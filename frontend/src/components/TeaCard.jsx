import React from "react"

const TeaCard = ({tea}) => {
  return (
    <div className="tea-card" key={tea.id}>
        <h3>{tea.name}</h3>
        <p>Rating: {tea.rating}/5</p>
        <p>In Stock: {tea.in_stock ? 'Yes' : 'No'}</p>
        <div className="tea-actions">
        <a href={`/teas/${tea.id}`}>View Details</a>
        </div>
    </div>
  )
};

export default TeaCard;
