import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { showTea, deleteTea } from "../../utilities/teas-api";
import teaPlaceHolder from '../assets/cute_tea.jpg'

const TeaDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tea, setTea] = useState({})

  useEffect(() => {
    const loadTea = async () => {
      try {
        const teaData = await showTea(id)
        setTea(teaData)
        console.log(teaData.comments)
      } catch (error) {
        console.log(error)
      }
    }
    loadTea()
  }, [id])

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await deleteTea(id)
      navigate('/teas')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="tea-details">
      <h1>Tea Details</h1>
      <h1>{tea.name}</h1>
      <img src={teaPlaceHolder} alt="cute-tea" className="tea-placeholder" />

      <div className="tea-info">
        <p><strong>Rating:</strong> {tea.rating}/5</p>
        <p><strong>In Stock:</strong> {tea.in_stock ? 'Yes' : 'No'}</p>
        <p><strong>ID:</strong> {tea.id}</p>
      </div>

      <div className="tea-actions">
        <a href={`/teas/${tea.id}/edit`}>Edit Tea</a>
        <button onClick={handleDelete} className="btn-delete">
          Delete Tea
        </button>
        <a href="/teas" className="btn-back">
          Back to Tea List
        </a>
      </div>

      <div className="tea-comments">
        <div className="comment-form">
          
        </div>
        {tea.comments && tea.comments.length > 0 ? (
          <>
            {tea.comments.map(comment => (
              <div key={comment.id} className="comment-card">
                <p>{comment.content}</p>
              </div>
            ))}
          </>
        ) : (
          <p>No comments to display.</p>
        )}
      </div>
    </div>
  )
};

export default TeaDetails;
