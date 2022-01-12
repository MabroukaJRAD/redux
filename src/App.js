import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';
import { useSelector } from 'react-redux';
import {selectTodolist} from './features/todoSlice'
function App() {
  const todoList = useSelector(selectTodolist)
  return (

    <div className="App">
      {/* to do list */}
      <div className="app__container">
      <div className="app__todoContainer">
        {
          todoList.map(item=>(
            //todo component
            <TodoItem name={item.item}
            done={item.done}
            id={item.id} />

          ))
        }

      </div>
      <Input/>

      </div>
     
    </div>
  );
}

export default App;
