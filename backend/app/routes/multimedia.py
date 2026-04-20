from fastapi import APIRouter

router = APIRouter()

@router.get("/multimedia")
def multimedia():
    return {"mensaje": "Sección multimedia"}