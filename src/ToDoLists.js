const ToDoLists = (props) =>
{
    return (
    <>
        <div class="todo_styles">
        <button>x</button>
        <li >{props.text}</li>
        </div>
    </>
    
    );
}
export  default ToDoLists;