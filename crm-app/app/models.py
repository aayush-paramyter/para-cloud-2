from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String, index=True)
    contact_name = Column(String)
    email = Column(String, unique=True, index=True)
    phone = Column(String, nullable=True)
    address = Column(String, nullable=True)
    source = Column(String)
    owner = Column(String, nullable=True)
    score = Column(Integer, nullable=True)
    status = Column(String, nullable=True)
