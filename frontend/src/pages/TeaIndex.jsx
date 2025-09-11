import { useState, useEffect } from "react";
import { teaIndex } from "../../utilities/teas-api";
import TeaCard from '../components/TeaCard'

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

        {teas?.map(tea => (
          <TeaCard tea={tea} />
        ))}
      </div>
    </div>
  )
};

export default TeaIndex;
