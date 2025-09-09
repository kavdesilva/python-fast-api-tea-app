import React, { use } from "react"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { showTea } from "../../utilities/teas-api";
import teaPlaceHolder from '../assets/cute_tea.jpg'

const TeaDetails = (props) => {
  const { id } = useParams()
  const [tea, setTea] = useState({})

  useEffect(() => {
    const loadTea = async () => {
      try {
        const teaData = await showTea(id)
        setTea(teaData)
      } catch (error) {
        console.log(error)
      }
    }
    loadTea()
  }, [id])

  return (
    <div className="tea-details">
      <h1>Tea Details</h1>
      <h1>{tea.name}</h1>
      <img src={teaPlaceHolder} alt="cute-tea" className="tea-placeholder" />
      <div className="tea-info"></div>
      <div className="tea-actions"></div>
    </div>
  )
};

export default TeaDetails;
