import React , {useState} from 'react';
import './App.css';

const App=() => {
  //created hook element
  const [inputList,setInputList]=useState("");
  // created hook of arry
  const [item,setItem]=useState([]);
  const itemEvent= (event) =>{
    
    setInputList(event.target.value);
    
  };

  // spread data 
  const listOfItem = ()=>{
    setItem((oldItems)=>{
      return[...oldItems,inputList];

    });
    setInputList('');
  };
  return (
    <>
    <div className="main-div">
      <div className="center-div">
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder="Add a item" 
        onChange={itemEvent}
        value={inputList}/>
        <button onClick={listOfItem}>X</button>
        <ol>
          {item.map((itemval)=>
          {
            return  <li>{itemval}</li>

          })}
        </ol>
        

      </div>
        
      
    </div>
    </>
  );
}

export default App;
