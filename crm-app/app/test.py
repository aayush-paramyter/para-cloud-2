from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, String
from .database import Base

app = FastAPI()

origins = [
    "http://localhost:3000",  # Update with your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Lead(BaseModel):
    company_name: str
    contact_name: str
    email: str
    phone: str
    address: str
    source: str

@app.post("/api/leads/")
async def create_lead(lead: Lead):
    print("Received lead:", lead)  # Inspect the received data
    return {"message": "Lead created successfully", "lead": lead}
