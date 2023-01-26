import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import ToDoList from './components/todolist';

function App() {
  const [inputText, setinputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodo(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilterTodo(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Vi`s Todo List{inputText}</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setinputText={setinputText}
        setStatus={setStatus}
      />
      <ToDoList todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
    </div>
  );
}

export default App;
