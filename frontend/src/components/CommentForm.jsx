import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const CommentForm = ({commentData, onSubmit, tea, handleEdit, editing}) => {
  const navigate = useNavigate()

  const initialState = {
    content: ''
  }

  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (commentData) {
      console.log(commentData)
        setFormData({ content: commentData.content })
    } else {
        setFormData(initialState)
    }
  }, [commentData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const comment = await onSubmit(formData)
        if (editing === true) handleEdit(false)
        navigate(`/teas/${tea.id}`)
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div className="comment-form" key={commentData?.id}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="content">Comment:</label><br/>
            <input type="text" 
                name="content"
                id="content"
                value={formData.content}
                onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default CommentForm;
