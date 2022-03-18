
import Swal from 'sweetalert2'
import { useFormulario } from '../hooks/useFormulario';

const Formulario = ({agregarTodo}) => {

  const initialState = {
      nombre: "",
      descripcion: "",
      estado: "pendiente",
      prioridad: false,
  }

  const [inputs, handleChange, reset] = useFormulario(initialState)

  const { nombre, descripcion, estado, prioridad } = inputs

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: 'Error!',
        text: 'Ingrese el nombre',
        icon: 'error',
      });
      return;
    }
    if(!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: 'Error!',
        text: 'Ingrese el descripcion!',
        icon: 'error',
      });
      return;
    }
      Swal.fire({
        title: 'Éxito',
        text: 'Tarea agregada',
        icon: 'success',
      });

      agregarTodo({
        nombre: nombre,
        descripcion: descripcion,
        estado: estado === 'pendiente' ? false : true,
        prioridad: prioridad,
        id: Date.now(),
      })
      
      reset();
  };



  return (
    <>
      <div className='container mt-5 '>
      <h4>Agregar tarea</h4>
        <div className='mt-3'>
          <form onSubmit={handleSubmit}>
              <input
                type="text" 
                className="form-control mb-2"
                name="nombre"
                placeholder="Ingrese nombre"
                value={nombre}
                onChange={handleChange}
              />
              <textarea
                className="form-control mb-2"
                name="descripcion"
                placeholder="Ingrese descripcion"
                value={descripcion}
                onChange={handleChange}
              />
              <select
                name="estado"
                className="form-control mb-2"
                value={estado}
                onChange={handleChange}
              >
                  <option value="pendiente">Pendiente</option>
                  <option value="completado">Completado</option>
              </select>
              <div className="form-check">
                  <input
                    id="flexCheckDefault"
                    className="form-check-input"
                    type="checkbox"
                    name="prioridad"
                    checked={prioridad}
                    onChange={handleChange}
                    />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                      Prioritario
                  </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4">
                    Agregar
              </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario