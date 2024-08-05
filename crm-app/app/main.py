from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import leads

app = FastAPI()
Base.metadata.create_all(bind=engine)
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

app.include_router(leads.router, prefix="/api", tags=["leads"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the CRM API!"}