import { useState } from "react";
import { useParams } from "react-router";
import CommentForm from "./CommentForm";
import { updateComment } from "../../utilities/comments-api";

const CommentCard = ({comment}) => {
  const {id} = useParams()
  const [editing, setEditing] = useState(false)

  const handleEdit = () => {
    editing ? setEditing(false) : setEditing(true)
  }
  
  const handleUpdate = async (data) => {
    const updatedComment = await updateComment(id, data)
    return updatedComment
  }

  return (
    <div key={comment.id} className="comment-card">
        {!editing ? 
        <>
          <p>{comment.user?.username} says:</p>
          <p>{comment.content}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
        :
        <>
          <CommentForm commentData={comment} onSubmit={handleUpdate}/>
          <button onClick={handleEdit}>Cancel Edit</button>
        </>
        }
    </div>
  )
};

export default CommentCard;
