from fastapi import APIRouter

router = APIRouter()

@router.get("/carlo-acutis")
def carlo_acutis():
    return {"mensaje": "Información sobre Carlo Acutis"}

@router.get("/peliculas-cristianas")
def peliculas():
    return {"mensaje": "Películas cristianas"}

@router.get("/series-biblicas")
def series():
    return {"mensaje": "Series bíblicas"}