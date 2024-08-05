from sqlalchemy.orm import Session
from . import models, schemas

def get_leads(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Lead).offset(skip).limit(limit).all()

def get_lead_by_id(db: Session, lead_id: int):
    return db.query(models.Lead).filter(models.Lead.id == lead_id).first()

def create_lead(db: Session, lead: schemas.LeadCreate):
    db_lead = models.Lead(**lead.dict())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

def delete_lead(db: Session, lead_id: int):
    db_lead = db.query(models.Lead).filter(models.Lead.id == lead_id).first()
    if db_lead:
        db.delete(db_lead)
        db.commit()
        return True
    return False
