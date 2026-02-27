
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
            <input type="checkbox" name="item1" onClick={toggleItemState} defaultChecked />
            <label htmlFor="item1">Test content</label>
            <input type="button" value="delete" onClick={deleteItem}/>
        </div>
    )

}

export default TodoItem;