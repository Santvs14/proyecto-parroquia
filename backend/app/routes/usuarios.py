from fastapi import APIRouter
from app.services.supabase_client import supabase

router = APIRouter()

@router.post("/registro")
def registrar(usuario: dict):
    res = supabase.auth.sign_up(usuario)
    return res