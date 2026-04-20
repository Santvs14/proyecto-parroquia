from fastapi import FastAPI
from app.routes import noticias, actividades, donaciones, usuarios, multimedia, contenido_catolico

app = FastAPI(
    title="API Parroquia",
    description="Plataforma parroquial",
    version="1.0"
)

app.include_router(noticias.router)
app.include_router(actividades.router)
app.include_router(donaciones.router)
app.include_router(usuarios.router)
app.include_router(multimedia.router)
app.include_router(contenido_catolico.router)

@app.get("/")
def home():
    return {"mensaje": "API Parroquial funcionando"}