import { useState } from 'react';
import './App.css';
import Input from './components/Input.jsx';

function App() {
  
  function addNote(text){
    console.log(text);
  }


  return (
    <>
      <h1>To Do List</h1>
      <Input addNote={addNote}/>
    </>
  )
}

export default App
