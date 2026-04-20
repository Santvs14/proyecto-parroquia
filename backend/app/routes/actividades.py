from fastapi import APIRouter
from app.services.supabase_client import supabase

router = APIRouter()

@router.get("/actividades")
def obtener_actividades():
    response = supabase.table("actividades").select("*").execute()
    return response.data