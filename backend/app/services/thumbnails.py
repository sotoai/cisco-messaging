import logging
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

from ..config import THUMBNAIL_DIR, THUMBNAIL_WIDTH, THUMBNAIL_FORMAT, STORAGE_DIR

logger = logging.getLogger(__name__)


def generate_thumbnails(
    pptx_path: Path, deck_id: str, slide_count: int
) -> list[str]:
    """Generate PNG thumbnails for each slide in the deck.

    Tries LibreOffice + pdf2image first; falls back to Pillow placeholders.
    Returns a list of paths relative to STORAGE_DIR.
    """
    out_dir = THUMBNAIL_DIR / deck_id
    out_dir.mkdir(parents=True, exist_ok=True)

    try:
        return _generate_via_libreoffice(pptx_path, deck_id, slide_count, out_dir)
    except Exception as exc:
        logger.warning(
            "LibreOffice conversion failed (%s). Generating placeholder thumbnails.",
            exc,
        )
        return _generate_placeholders(deck_id, slide_count, out_dir)


def _generate_via_libreoffice(
    pptx_path: Path, deck_id: str, slide_count: int, out_dir: Path
) -> list[str]:
    from pdf2image import convert_from_path

    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(
            [
                "libreoffice",
                "--headless",
                "--convert-to",
                "pdf",
                "--outdir",
                tmp,
                str(pptx_path),
            ],
            check=True,
            capture_output=True,
            timeout=120,
        )

        pdf_files = list(Path(tmp).glob("*.pdf"))
        if not pdf_files:
            raise RuntimeError("LibreOffice produced no PDF output")

        images = convert_from_path(str(pdf_files[0]), dpi=150)

    relative_paths: list[str] = []
    for idx, img in enumerate(images):
        ratio = THUMBNAIL_WIDTH / img.width
        new_height = int(img.height * ratio)
        img_resized = img.resize((THUMBNAIL_WIDTH, new_height), Image.LANCZOS)

        out_path = out_dir / f"{idx}.png"
        img_resized.save(str(out_path), THUMBNAIL_FORMAT)

        rel = out_path.relative_to(STORAGE_DIR)
        relative_paths.append(str(rel))

    return relative_paths


def _generate_placeholders(
    deck_id: str, slide_count: int, out_dir: Path
) -> list[str]:
    """Create simple gray placeholder thumbnails with slide numbers."""
    width = THUMBNAIL_WIDTH
    height = int(width * 9 / 16)  # 16:9 aspect ratio

    relative_paths: list[str] = []
    for idx in range(slide_count):
        img = Image.new("RGB", (width, height), color=(200, 200, 200))
        draw = ImageDraw.Draw(img)

        text = f"Slide {idx + 1}"
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 60)
        except (OSError, IOError):
            font = ImageFont.load_default()

        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (width - text_width) // 2
        y = (height - text_height) // 2
        draw.text((x, y), text, fill=(100, 100, 100), font=font)

        out_path = out_dir / f"{idx}.png"
        img.save(str(out_path), THUMBNAIL_FORMAT)

        rel = out_path.relative_to(STORAGE_DIR)
        relative_paths.append(str(rel))

    return relative_paths
