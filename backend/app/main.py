from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine
from .models import Base

from .routers import products
from .routers import customers
from .routers import orders
from .routers import dashboard

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Inventory Order Management API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(customers.router)
app.include_router(orders.router)
app.include_router(dashboard.router)

@app.get("/")
def root():
    return {
        "message": "Inventory Management API Running"
    }