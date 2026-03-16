from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from .config import ALLOWED_ORIGINS, STORAGE_DIR
from .database import engine, Base
from .routers import decks, slides


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(title="StoryOS API", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static/storage", StaticFiles(directory=str(STORAGE_DIR)), name="storage")
app.include_router(decks.router, prefix="/api/decks", tags=["decks"])
app.include_router(slides.router, prefix="/api/slides", tags=["slides"])
