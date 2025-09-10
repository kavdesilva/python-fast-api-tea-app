from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models.tea import TeaModel
from models.comment import CommentModel
from serializers.tea import TeaSchema
from serializers.comment import CommentSchema
from typing import List
from database import get_db

router = APIRouter()

@router.post('/teas/{tea_id}/comments', response_model=CommentSchema)
def create_comment(tea_id: int, comment: CommentSchema, db: Session = Depends(get_db)):
    # Check if tea exists
    tea = db.query(TeaModel).filter(TeaModel.id == tea_id).first()
    if not tea:
        raise HTTPException(status_code=404, detail="Tea not found")
    
    # Create comment data
    comment_data = comment.dict(exclude={'id'})
    comment_data['tea_id'] = tea_id
    
    # Create comment from comment data with tea_id included
    new_comment = CommentModel(**comment_data)
    db.add(new_comment)
    db.commit()
    db.refresh(new_comment)
    return new_comment