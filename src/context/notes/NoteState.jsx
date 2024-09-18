import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props)=>{
    const s1 = {
        "name" : "Yash",
        "class" : "10A"
    };
    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(()=>{
            setState({
                "name" : "Arti",
                "class" : "10A"
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;