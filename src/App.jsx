import { useState } from 'react';
import './App.css';
import Input from './components/Input.jsx';
import TodoItem from './components/TodoItem.jsx';

function App() {
  


  function addNote(text){
    console.log(text);
  }

  function deleteTodoItem(itemId){
    console.log("go to delete item " + itemId);
  }

  return (
    <>
      <h1>To Do List</h1>
      <Input addNote={addNote}/>
      <TodoItem itemId="1" deleteItem={deleteTodoItem}/>
    </>
  )
}

export default App
