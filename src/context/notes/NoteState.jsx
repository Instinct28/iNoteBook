import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props)=>{

    const notesInital = [
        {
            "_id": "66e8506e3bf31c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf31c17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        },
        {
            "_id": "66e8506e3bf31c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf31c17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        },
        {
            "_id": "66e8506e3bf31c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf31c17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        },
        {
            "_id": "66e8506e3bf31c17eedcd5ea",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 1",
            "description": "Please watch tutorial",
            "tag": "General",
            "date": "2024-09-16T15:36:14.545Z",
            "__v": 0
        },
        {
            "_id": "66e850963bf31c17eedcd5ec",
            "createdBy": "66e2f3316d8617ac23169611",
            "title": "My title 2",
            "description": "Go to gym",
            "tag": "Gym",
            "date": "2024-09-16T15:36:54.232Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInital);
    
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;