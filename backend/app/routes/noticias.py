from fastapi import APIRouter
from app.services.supabase_client import supabase

router = APIRouter()

@router.get("/noticias")
def obtener_noticias():
    response = supabase.table("noticias").select("*").execute()
    return response.data