import { useState } from 'react';
import './App.css';
import Input from './components/Input.jsx';
import TodoItem from './components/TodoItem.jsx';

function App() {
  
  const [notesList, setNotesList] = useState([]);
  const [id, setId] = useState(1);
 
  function addNote(note){
    //console.log(text);
    setNotesList([{id:id, text:note.text, bgColor:note.bgColor}, ...notesList]);
    setId(id + 1);
  }

  function deleteTodoItem(itemId){
    //console.log("go to delete item " + itemId);
    setNotesList(notesList.filter(note => note.id != itemId));
  }


  return (
    <>
      <h1>To Do List</h1>
      <Input addNote={addNote}/>
      <div>
        {
          notesList.map((note) =>{
            return (<TodoItem key={note.id} itemId={note.id} text={note.text} bgColor={note.bgColor} deleteItem={deleteTodoItem} />); 
          })
        }
      </div>
    </>
  )
}

export default App
