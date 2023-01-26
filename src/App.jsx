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
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodo(todos.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilterTodo(todos.filter((todo) => todo.completed));
        break;

      default:
        setFilterTodo(todos);
        break;
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
