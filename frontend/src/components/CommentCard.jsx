import { useState } from "react";
import { useNavigate } from "react-router";
import CommentForm from "./CommentForm";
import { updateComment, deleteComment } from "../../utilities/comments-api";

const CommentCard = ({ comment, user, tea }) => {
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)

  const handleEdit = () => {
    editing ? setEditing(false) : setEditing(true)
  }
  
  const handleUpdate = async (data) => {
    const updatedComment = await updateComment(comment.id, data)
    return updatedComment
  }

  const handleDelete = async () => {
    const deletedComment = await deleteComment(comment.id)
    navigate(0)
  }

  return (
    <div key={comment.id} className="comment-card">
        {!editing ? 
        <>
          <p>{comment.user?.username} says:</p>
          <p>{comment.content}</p>
          <div className="comment-actions">
            {user === comment.user?.id.toString() && <button onClick={handleEdit}>Edit</button>}
            {user === comment.user?.id.toString() && <button onClick={handleDelete}>Delete</button>}
          </div>
        </>
        :
        <>
          <CommentForm commentData={comment} onSubmit={handleUpdate} tea={tea} handleEdit={handleEdit} editing={editing}/>
          <button onClick={handleEdit}>Cancel Edit</button>
        </>
        }
    </div>
  )
};

export default CommentCard;
