import React , {useState} from 'react';
import './App.css';

const App=() => {
  const [inputList,setInputList]=useState("");
  const itemEvent= (event) =>{
    setInputList(event.target.value);
  };
  return (
    <>
    <div className="main-div">
      <div className="center-div">
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder="Add a item" onChange={itemEvent}/>
        <button>X</button>
        <ol>
          <li>{inputList}</li>
        </ol>
        

      </div>
        
      
    </div>
    </>
  );
}

export default App;
