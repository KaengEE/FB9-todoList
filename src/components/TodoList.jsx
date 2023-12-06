import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function TodoList({ todos }) {
  //삭제함수
  const handleClick = async (id) => {
    const ref = doc(db, "todos", id);
    await deleteDoc(ref);
    //console.log(id);
  };

  //수정함수

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.title}
            {/* 수정아이콘 */}
            <FiEdit className="edit" onClick={() => handleClick(todo.id)} />
            {/* 삭제아이콘 */}
            <RiDeleteBin6Line
              className="dele"
              onClick={() => handleClick(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
