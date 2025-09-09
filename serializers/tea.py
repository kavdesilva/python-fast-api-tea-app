# serializers/tea.py

from pydantic import BaseModel, Field
from typing import Optional, List
from .comment import CommentSchema

class TeaSchema(BaseModel):
  id: Optional[int] = Field(default=None)
  name: str
  in_stock: bool
  rating: int
  comments: List[CommentSchema] = []

  class Config:
    orm_mode = True