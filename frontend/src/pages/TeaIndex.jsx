import { useState, useEffect } from "react";
import { teaIndex } from "../../utilities/teas-api";

const TeaIndex = () => {
  const [teas, setTeas] = useState([])

  useEffect(() => {
    const loadTeas = async () => {
      try {
          const teaData = await teaIndex()
          setTeas(teaData)
      } catch (error) {
          console.log(error)
      }
    }
    loadTeas()
  }, [])

  return (
    <div>
      <h1>Tea Collection</h1>
      <div className="teas-grid">

        {teas?.map((tea, i) => (
            <div className="tea-card">
              <h3>{tea.name}</h3>
              <p>Rating: {tea.rating}/5</p>
              <p>In Stock: {tea.in_stock ? 'Yes' : 'No'}</p>
              <div className="tea-actions">
                <a href={`/teas/${tea.id}`}>View Details</a>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
};

export default TeaIndex;
