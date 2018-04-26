import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilterTodos from './containers/filterTodos';
import Todos from './containers/todos';
import AddTodo from './containers/addTodo';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterTodos />
        <AddTodo />
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default App;
