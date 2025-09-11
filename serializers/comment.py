# serializers/comment.py

from pydantic import BaseModel
from typing import Optional
from .user import UserResponseSchema

class CommentSchema(BaseModel):
  id: Optional[int] = None 
  content: str
  user: UserResponseSchema

  class Config:
    orm_mode = True

class CommentCreate(BaseModel):
    content: str

class CommentUpdate(BaseModel):
    content: str