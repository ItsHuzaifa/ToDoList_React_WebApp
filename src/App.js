import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {

  const [listvalue, setListvalue] = useState("");
  const [NewItem, setNewItem] = useState([]);

  const EventFunc = (e) =>{
    setListvalue(e.target.value);
  }

    const ButtonClicked = () =>{
      setNewItem((prevItem)=>{
        return [...prevItem, listvalue]
      });
      setListvalue("");
    }

    const DeleteItem = (id) =>{
        // console.log("deleted");
        setNewItem((prevItem)=>{
          return prevItem.filter((arr, index)=>{
            return index !== id;
          });
        });
    }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />

          <input type="text" placeholder="Add a Item" onChange={EventFunc} value={listvalue} />
          <button onClick={ButtonClicked}> + </button>

          <ol>
            {
             NewItem.map((niv, index)=>{

                return <TodoItem key={index} id={index} item={niv} onSelect={DeleteItem}/>
                
              })
            }
          </ol>

        </div>

      </div>
    </>
  );
}

export default App;
