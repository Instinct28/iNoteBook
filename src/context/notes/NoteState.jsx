import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props)=>{

    const notesInital = [
        {
            "_id": "66e8506e3bfrhrdhry31c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bfghrjfjryj31c17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        },
        {
            "_id": "66e8506e3rgthrtdhbf31c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf3ewtfrdhdh1c17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        },
        {
            "_id": "66e8506e3bf3ergesh1c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf31thjc17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        },
        {
            "_id": "66e8506e3bf31rthrdthrdthc17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf31thrdthtrc17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        }
    ];

    //Add a note
    const addNote = (title, description, tag)=>{
        const note = {
            "_id": "66e850963bf31trdthc17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    //Update a note
    const updateNote = (id, title, description, tag)=>{
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }
    }

    //Delete a note
    const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
    }

    const [notes, setNotes] = useState(notesInital);
    
    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;