import './App.css';
import Header from "./Componets/Header"
import CreateArea from './Componets/CreateArea'
import Note from './Componets/Note'
import { useState } from 'react';

function App() {
  const[notes,setNotes]=useState([])
  function addNote(newNote)
  {
    setNotes((prevValue)=>{
      return[...prevValue,newNote];
    })
  }
  function deleteNotes(id){
    setNotes(preValue=>{
      return[...preValue.filter((note,index)=>
        index!==id)]
    })
  }
  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>(
        <Note key={index} 
        id={index}
        title={note.title} 
        content={note.content} 
        onDelete={deleteNotes}/>
      ))}
    </div>
  );
}

export default App;
