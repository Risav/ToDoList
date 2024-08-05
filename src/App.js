import React, { useState } from 'react';
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText){
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const [topName, setTopName] = useState('');

  function handleNameChange(event){
    setTopName(event.target.value);
  }

  const [topHeadingText, setTopHeadingText] = useState('');

  function handleNameClick(event) {
    setTopHeadingText(topName);

    event.preventDefault();
  }



  return (
    <div>
      <div className='top-head'>
        <h2>Hello {topHeadingText}</h2>
        <form className='top-form'>
          <input 
            onChange={handleNameChange}
            type='text'
            placeholder='Whats your name?'
            value={topName}
          />
          <button
            type='submit'
            onClick={handleNameClick}
          >Submit</button>
        </form>
      </div>
      <div className='container'>
        <div className='heading'>
          <h1> To-Do List</h1>
        </div>
        <InputArea add={addItem} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem 
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p>Hints: Write the items and add it to your item list. And Click on the item inorder to delete it.</p>
      </div>
    
    </div>
  );
}

export default App;
