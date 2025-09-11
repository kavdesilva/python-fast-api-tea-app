import React from "react"

const TeaCard = ({tea}) => {
  return (
    <div className="tea-card" key={tea.id}>
        <h3>{tea.name}</h3>
        <p>Rating: {tea.rating}/5</p>
        <p>In Stock: {tea.in_stock ? 'Yes' : 'No'}</p>
        <a href={`/teas/${tea.id}`}>View Details</a>
    </div>
  )
};

export default TeaCard;
