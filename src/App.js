import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [value,setv]=useState("");
  const [items,setitem]=useState([]);
  
  function add(event){
setv(event.target.value);
  }

  function addtolist(){
setitem((prevValue) =>{
return [...prevValue,value];
})
setv("");
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" name="items" value={value} onChange={add}/>
      <button onClick={addtolist}>Add to list</button>
       <div>
         <ul>
          { items.map((item)=>{

           return (<li>{item} </li>);
          
          })}
           </ul>
       </div>
       </div>
  );
}
