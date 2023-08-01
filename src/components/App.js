import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import '../styles/App.css';

class App extends Component {
  inputElement = React.createRef();

  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    };
  }

  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  editItem = (key, newText) => {
    const editedItems = this.state.items.map((item) => {
      if (item.key === key) {
        return { ...item, text: newText };
      }
      return item;
    });
    this.setState({
      items: editedItems,
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} />
      </div>
    );
  }
}

export default App;