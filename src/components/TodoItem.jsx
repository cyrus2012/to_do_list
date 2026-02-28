import { useState } from "react";

/**
 * This is a single piece of note
 * @param {*} props pass itemId (integer), text (String) and deleteItem (function(id))
 * @returns 
 */
function TodoItem(props){

    const [isCompleted, setIsCompleted] = useState(false);


    function toggleItemState(event){
        console.log(event.target.checked);
        setIsCompleted(event.target.checked);
    }

    function deleteItem(event){
        event.preventDefault();
        props.deleteItem(props.itemId);
    }

    return (
        <div className={"note " + props.bgColor}>
            <input type="checkbox" name={"item" + props.itemId} onClick={toggleItemState} />
            <p htmlFor={"item" + props.itemId} className={isCompleted? "textCrossLine" : "" } >{props.text}</p>
            <input type="button" value="delete" onClick={deleteItem}/>
        </div>
    )

}

export default TodoItem;