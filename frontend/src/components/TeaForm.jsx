import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const TeaForm = ({onSubmit, initialData}) => {
  const navigate = useNavigate()

  const initialState =  {
    name: '',
    in_stock: true,
    rating: 1
  }

  const [formData, setFormData] = useState({})
  
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        in_stock: initialData.in_stock,
        rating: initialData.rating
      })
    } else {
      setFormData(initialState)
    }
  }, [initialData])


  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]:
        type === 'checkbox' ? checked :
        type === 'number' ? Number(value) : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const tea = await onSubmit(formData)
      navigate(`/teas/${tea?.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="tea-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label><br/>
          <input type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label><br/>
          <input type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange} 
            min="1"
            max="5" />
        </div>
        <div className="form-group">
          <label htmlFor="in_stock">In Stock:</label>
          <input type="checkbox"
            id="in_stock"
            name="in_stock"
            checked={formData.in_stock}
            onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default TeaForm;
