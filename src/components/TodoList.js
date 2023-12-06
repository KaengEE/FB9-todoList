export default function TodoList({ todos }) {

  const handleClick = async (id) => {
    console.log(id);
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => handleClick(todo.id)}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}