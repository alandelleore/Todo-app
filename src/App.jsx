import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="container border border-dark">
      
        <h2 className='text-light p-2 bg-info'>Todo-app</h2>
     
        <TodoList />
    </div>
  );
};

export default App