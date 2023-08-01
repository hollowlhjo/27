import React from 'react';

const TodoItems = ({ entries, deleteItem, editItem }) => {
  const createTasks = (item) => {
    return (
      <li key={item.key}>
        <span>{item.text}</span>
        <button onClick={() => editItem(item.key, prompt('Enter new text:', item.text))}>Edit</button>
        <button onClick={() => deleteItem(item.key)}>Delete</button>
      </li>
    );
  };

  const todoEntries = entries.map(createTasks);

  return <ul className="theList">{todoEntries}</ul>;
};

export default TodoItems;