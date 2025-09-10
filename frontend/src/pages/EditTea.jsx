import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeaForm from '../components/TeaForm';
import { showTea, updateTea } from '../../utilities/teas-api';

export default function EditTea() {
  const { id } = useParams();
  const [tea, setTea] = useState(null);

  useEffect(() => {
    const loadTea = async () => {
      try {
        const teaData = await showTea(id);
        setTea(teaData);
      } catch (err) {
        console.log(err)
      }
    };
    loadTea();
  }, [id]);


  const handleUpdate = async (data) => {
    const updatedTea = await updateTea(id, data);
    setTea(updatedTea);
    return updatedTea;
  };

  return (
    <div className="edit-tea">
      <h1>Edit Tea: {tea?.name}</h1>

      <TeaForm initialData={tea} onSubmit={handleUpdate} submitText="Update Tea" />

      <div className="tea-actions">
        <a href={`/teas/${tea?.id}`} className="btn-back">Back to Tea Details</a>
        <a href="/teas" className="btn-back">Back to Tea List</a>
      </div>
    </div>
  );
}
