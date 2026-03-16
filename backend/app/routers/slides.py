from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import Slide
from ..schemas import SlideResponse, SlideTagsUpdate, slide_to_response

router = APIRouter()


@router.get("/", response_model=list[SlideResponse])
def list_slides(
    product: Optional[str] = None,
    initiative: Optional[str] = None,
    vertical: Optional[str] = None,
    type: Optional[str] = None,
    db: Session = Depends(get_db),
):
    query = db.query(Slide)

    if product:
        query = query.filter(Slide.tags_product.like(f"%{product}%"))
    if initiative:
        query = query.filter(Slide.tags_initiative.like(f"%{initiative}%"))
    if vertical:
        query = query.filter(Slide.tags_vertical.like(f"%{vertical}%"))
    if type:
        query = query.filter(Slide.tags_type.like(f"%{type}%"))

    slides = query.order_by(Slide.created_at.desc()).all()
    return [slide_to_response(s) for s in slides]


@router.get("/{slide_id}", response_model=SlideResponse)
def get_slide(slide_id: str, db: Session = Depends(get_db)):
    slide = db.query(Slide).filter(Slide.id == slide_id).first()
    if not slide:
        raise HTTPException(status_code=404, detail="Slide not found")
    return slide_to_response(slide)


@router.patch("/{slide_id}/tags", response_model=SlideResponse)
def update_slide_tags(
    slide_id: str,
    body: SlideTagsUpdate,
    db: Session = Depends(get_db),
):
    slide = db.query(Slide).filter(Slide.id == slide_id).first()
    if not slide:
        raise HTTPException(status_code=404, detail="Slide not found")

    if body.product is not None:
        slide.tags_product = body.product
    if body.initiative is not None:
        slide.tags_initiative = body.initiative
    if body.vertical is not None:
        slide.tags_vertical = body.vertical
    if body.type is not None:
        slide.tags_type = body.type

    db.commit()
    db.refresh(slide)
    return slide_to_response(slide)
