from fastapi import APIRouter
from app.services.supabase_client import supabase

router = APIRouter()

@router.post("/donar")
def donar(donacion: dict):
    response = supabase.table("donaciones").insert(donacion).execute()
    return response.data