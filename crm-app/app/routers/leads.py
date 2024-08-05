from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from .. import crud, models, schemas, database

router = APIRouter()

@router.post("/leads/", response_model=schemas.Lead)
def create_lead(lead: schemas.LeadCreate, db: Session = Depends(database.get_db)):
    db_lead = crud.create_lead(db=db, lead=lead)
    return db_lead

@router.get("/leads/", response_model=List[schemas.Lead])
def read_leads(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db)):
    leads = crud.get_leads(db, skip=skip, limit=limit)
    return leads

@router.get("/leads/{lead_id}", response_model=schemas.Lead)
def read_lead(lead_id: int, db: Session = Depends(database.get_db)):
    db_lead = crud.get_lead_by_id(db, lead_id=lead_id)
    if db_lead is None:
        raise HTTPException(status_code=404, detail="Lead not found")
    return db_lead

@router.delete("/leads/{lead_id}", response_model=dict)
def delete_lead(lead_id: int, db: Session = Depends(database.get_db)):
    result = crud.delete_lead(db, lead_id=lead_id)
    if not result:
        raise HTTPException(status_code=404, detail="Lead not found")
    return {"message": "Lead deleted successfully"}
