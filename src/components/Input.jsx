
import { useState } from 'react';

/**
 * The input component for adding to-do items. Type the note text and click the button to save the note.
 * @param {*} props contain 1 property, named addNote and its value is a function
 * @returns a textarea and a button
 */
function Input(props){
    const [note, setNote] = useState("");

    function onTextChange(event){
        setNote(event.target.value);
    }

    function addNote(event){
        props.addNote(note);
        setNote("");
    }

    return (
        <div className="inputNote">
            <textarea value={note} onChange={onTextChange}></textarea>
            <button onClick={addNote}>Add</button>
        </div>
    );

}

export default Input;