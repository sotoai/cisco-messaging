from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
STORAGE_DIR = BASE_DIR / "storage"
UPLOAD_DIR = STORAGE_DIR / "uploads"
SLIDES_DIR = STORAGE_DIR / "slides"
THUMBNAIL_DIR = STORAGE_DIR / "thumbnails"
DATABASE_URL = f"sqlite:///{BASE_DIR / 'storyos.db'}"

for d in [UPLOAD_DIR, SLIDES_DIR, THUMBNAIL_DIR]:
    d.mkdir(parents=True, exist_ok=True)

THUMBNAIL_WIDTH = 1280
THUMBNAIL_FORMAT = "PNG"

ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:4173",
]
