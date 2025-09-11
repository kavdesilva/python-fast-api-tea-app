import { useState } from "react";
import CommentForm from "./CommentForm";
import { updateComment } from "../../utilities/comments-api";

const CommentCard = ({ comment, user, tea={tea} }) => {

  const [editing, setEditing] = useState(false)

  const handleEdit = () => {
    editing ? setEditing(false) : setEditing(true)
  }
  
  const handleUpdate = async (data) => {
    const updatedComment = await updateComment(comment.id, data)
    return updatedComment
  }

  return (
    <div key={comment.id} className="comment-card">
        {!editing ? 
        <>
          <p>{comment.user?.username} says:</p>
          <p>{comment.content}</p>
          {user === comment.user?.id.toString() && <button onClick={handleEdit}>Edit</button>}
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
