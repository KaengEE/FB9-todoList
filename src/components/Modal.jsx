import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

export const Modal = ({ setModalOpen, selectedTodo }) => {
  //수정데이터
  const [updatedTodo, setUpdatedTodo] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const inputChange = (e) => {
    setUpdatedTodo(e.target.value);
  };

  const editDoc = async () => {
    //console.log(`id: ${selectedTodo.id}, 제목: ${updatedTodo}`);

    //update
    const ref = doc(db, "todos", selectedTodo.id);
    await updateDoc(ref, { title: updatedTodo });
    //모달창 닫기
    closeModal();
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {selectedTodo && (
          <>
            <h3>TODO Edit</h3>
            <p>기존 TODO : {selectedTodo.title}</p>
            <input
              required
              type="text"
              value={updatedTodo}
              onChange={inputChange}
            />
            <button onClick={editDoc} className="edit-button">
              수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};
