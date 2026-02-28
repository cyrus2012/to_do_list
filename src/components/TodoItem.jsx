
/**
 * This is a single piece of note
 * @param {*} props pass itemId (integer), text (String) and deleteItem (function(id))
 * @returns 
 */
function TodoItem(props){

    function toggleItemState(event){
    
        console.log(event.target.checked);
    }

    function deleteItem(event){
        event.preventDefault();
        props.deleteItem(props.itemId);
    }

    return (
        <div>
            <input type="checkbox" name="item1" onClick={toggleItemState} />
            <label htmlFor="item1">{props.text}</label>
            <input type="button" value="delete" onClick={deleteItem}/>
        </div>
    )

}

export default TodoItem;