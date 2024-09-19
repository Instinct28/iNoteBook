import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

    const context = useContext(noteContext);
    const {notes} = context;

  return (
    <>
        <AddNote/>
        <div className='row my-3'>
            <h2>Your Notes</h2>
            {
                notes.map((element)=>{
                    return <NoteItem key={element._id} element={element}/>
                })
            }
        </div>
     </>
  )
}

export default Notes
