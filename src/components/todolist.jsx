import Todo from './todo';

const ToDoList = ({ todos, setTodos, filterTodo }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodo.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
