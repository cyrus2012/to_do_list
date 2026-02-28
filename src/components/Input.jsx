
import { useState } from 'react';

/**
 * The input component for adding to-do items. Type the note text and click the button to save the note.
 * You may also  set the background color of the note
 * @param {*} props contain 1 property, named addNote and its value is a function
 * @returns 
 */
function Input(props){
    const [note, setNote] = useState("");
    const [bgColor, setBgColor] = useState("bg-white");
    


    function onTextChange(event){
        setNote(event.target.value);
    }

    function addNote(event){
        props.addNote({text:note, bgColor:bgColor});
        setNote("");
    }

    function selectionChange(event){
        console.log(event.target.value);
        switch(event.target.value){
            case 'white': setBgColor('bg-white');
                        break;
            case 'red': setBgColor('bg-red');
                        break;
            case 'blue': setBgColor('bg-blue');
                        break;
            case 'yellow': setBgColor('bg-yellow');
                        break;
            default: setBgColor('bg-white');
        }
    }


    return (
        <div className="inputNote">
            <textarea className={bgColor} value={note} onChange={onTextChange}></textarea>
            <label for="bg-color">bg-color:</label>
            <select name="bg-color" id="" onChange={selectionChange}>
                <option value="while">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select>
            <button onClick={addNote}>Add</button>
        </div>
    );

}

export default Input;