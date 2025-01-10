
import './App.css'
import React, { useState } from "react";
import Header from "../src/assets/components/Header"
import Footer from './assets/components/footer';
import Note from "./assets/components/Note";
import CreateArea from './assets/components/CreateArea';
import Collapse from '@mui/material/Collapse'; //delete collapse transition
import List from '@mui/material/List'; //list transition 
import { TransitionGroup } from 'react-transition-group';//transition


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <List sx={{ mt: 1 }}>
        <TransitionGroup>
      {notes.map((noteItem, index) => {
        return (
          <Collapse key={noteItem}>
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          /></Collapse>
        );
      })}
      </TransitionGroup>
      </List>
      
      <Footer />
    </div>
  );
}

export default App;

