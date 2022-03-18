import React from 'react'

const Todo = ({todo, eliminarTodo, editarTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
        <div className="ms-2 me-auto">
            <div className="fw-bold">
                {todo.nombre} ({ todo.estado ? 'Finalizada' : 'Pendiente' })
            </div>
            <p>{todo.descripcion}</p>
            <div>
                <button className="btn btn-danger me-2" onClick={() => eliminarTodo(todo.id)}>Eliminar</button>
                <button className="btn btn-warning" onClick={() => editarTodo(todo.id)}>Editar</button>
            </div>
        </div>
         <span className="badge bg-primary rounded-pill">
            {todo.prioridad && "Prioritario"}
         </span>
  </li>
  )
}

export default Todo