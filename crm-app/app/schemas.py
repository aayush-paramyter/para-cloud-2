from typing import Optional
from pydantic import BaseModel

class LeadBase(BaseModel):
    company_name: str
    contact_name: str
    email: str
    phone: Optional[str] = None  # Make this field optional
    address: Optional[str] = None  # Make this field optional
    source: str
    owner: Optional[str] = None  # Make this field optional
    score: Optional[int] = None  # Make this field optional
    status: Optional[str] = None  # Make this field optional

class LeadCreate(LeadBase):
    pass

class Lead(LeadBase):
    id: int

    class Config:
        from_attributes = True
