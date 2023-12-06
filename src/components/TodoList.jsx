import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { Modal } from "./Modal";

export default function TodoList({ todos }) {
  // 삭제함수
  const handleClick = async (id) => {
    const ref = doc(db, "todos", id);
    await deleteDoc(ref);
  };
  // 모달창 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  //선택한 todo
  const [selectedTodo, setSelectedTodo] = useState(null);

  //모달창 표시
  const showModal = (id) => {
    // id에 해당하는 todo만 선택하여 전달
    const selectedTodo = todos.find((todo) => todo.id === id);
    setSelectedTodo(selectedTodo);
    setModalOpen(true);
    //console.log(selectedTodo);
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.title}
            {/* 수정 아이콘 */}
            <FiEdit
              className="edit"
              onClick={() => showModal(todo.id)}
              id={todo.id}
            />
            {/* 삭제 아이콘 */}
            <RiDeleteBin6Line
              className="dele"
              onClick={() => handleClick(todo.id)}
            />
          </li>
        ))}
      </ul>
      {/* 모달창 */}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} selectedTodo={selectedTodo} />
      )}
    </div>
  );
}
