const ToDoLists = (props) =>

{
    
    return (
    <>
        <div className="todo_styles">
        <button onClick={()=>
        {
            props.onSelect(props.id);
        }}>x</button>
        <li >{props.text}</li>
        </div>
    </>
    
    );
}
export  default ToDoLists;