import TeaForm from '../components/TeaForm'
import { createTea } from '../../utilities/teas-api'

const CreateTea = () => {

  const handleCreate = async (data) => {
    try {
      const newTea = await createTea(data)
      return newTea
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="create-tea">
     <h1>Add New Tea</h1>
     <TeaForm onSubmit={handleCreate} /> 
      <div className="tea-actions">
        <a href="/teas" className="btn-back">
          Back to Tea List
        </a>
      </div>
    </div>
  )
};

export default CreateTea;
