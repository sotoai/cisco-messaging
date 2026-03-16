from datetime import datetime, timezone

from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base


class Deck(Base):
    __tablename__ = "decks"

    id = Column(String, primary_key=True)
    filename = Column(String, nullable=False)
    upload_path = Column(String, nullable=False)
    slide_count = Column(Integer, nullable=False, default=0)
    uploaded_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    uploaded_by = Column(String, nullable=True)

    slides = relationship("Slide", back_populates="deck", cascade="all, delete-orphan")


class Slide(Base):
    __tablename__ = "slides"

    id = Column(String, primary_key=True)
    deck_id = Column(String, ForeignKey("decks.id"), nullable=False)
    slide_index = Column(Integer, nullable=False)
    title = Column(String, nullable=True)
    thumbnail_path = Column(String, nullable=False)
    slide_data_path = Column(String, nullable=False)
    width_px = Column(Integer, nullable=False)
    height_px = Column(Integer, nullable=False)
    tags_product = Column(String, nullable=True)
    tags_initiative = Column(String, nullable=True)
    tags_vertical = Column(String, nullable=True)
    tags_type = Column(String, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    deck = relationship("Deck", back_populates="slides")
