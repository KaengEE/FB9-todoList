import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function TodoList({ todos }) {
  const handleClick = async (id) => {
    const ref = doc(db, "todos", id);
    await deleteDoc(ref);
    //console.log(id);
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.title}
            <button onClick={() => handleClick(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
