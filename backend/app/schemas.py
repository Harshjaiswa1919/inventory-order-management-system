from pydantic import BaseModel


class ProductCreate(BaseModel):
    name: str
    sku: str
    price: float
    quantity: int


class ProductUpdate(BaseModel):
    name: str
    sku: str
    price: float
    quantity: int


class ProductResponse(ProductCreate):
    id: int

    class Config:
        from_attributes = True


class CustomerCreate(BaseModel):
    full_name: str
    email: str
    phone: str


class CustomerResponse(CustomerCreate):
    id: int

    class Config:
        from_attributes = True


class OrderCreate(BaseModel):
    customer_id: int
    product_id: int
    quantity: int


class OrderResponse(BaseModel):
    id: int
    customer_id: int
    product_id: int
    quantity: int
    total_amount: float

    class Config:
        from_attributes = True