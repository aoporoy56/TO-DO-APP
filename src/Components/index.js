import React, { useState } from 'react';
import TODO from './todo';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Index() {
    let [todoList, todoListHandle] = useState([]);
    let getTodoHandler = (value) =>{
        todoListHandle([...todoList, value]);
    }
    let getDeleteHandler = (val) => {
        todoListHandle(todoList.splice(3,1));
        console.log(val);
        // alert("Working on it.");
    }

  return (
    <div className='container d-flex justify-content-center'>
      <TODO sendTodoList={todoList} addHandler={getTodoHandler} deleteHandler={getDeleteHandler}/>
    </div>
  )
}
