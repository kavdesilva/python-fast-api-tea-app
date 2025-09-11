# serializers/tea.py

from pydantic import BaseModel, Field
from typing import Optional, List
from .comment import CommentSchema
from .user import UserResponseSchema

class TeaSchema(BaseModel):
  id: Optional[int] = Field(default=None)
  name: str
  in_stock: bool
  rating: int
  user: UserResponseSchema
  comments: List[CommentSchema] = []

  class Config:
    orm_mode = True

  # NEW: add a new schema for creating teas
class TeaCreate(BaseModel):
    name: str
    in_stock: bool
    rating: int

class TeaUpdate(BaseModel):
    name: str
    in_stock: bool
    rating: int