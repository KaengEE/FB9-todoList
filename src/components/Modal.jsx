import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

export const Modal = ({ setModalOpen, selectedTodo }) => {
  //수정데이터
  const [updatedTitle, setUpdatedTitle] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const inputChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const editDoc = async () => {
    //console.log(`id: ${selectedTodo.id}, 제목: ${updatedTitle}`);

    //update
    const ref = doc(db, "todos", selectedTodo.id);
    await updateDoc(ref, { title: updatedTitle });
    //모달창 닫기
    closeModal();
  };

  return (
    <div className="modal-container">
      <button onClick={closeModal} className="modal-close">
        X
      </button>
      {selectedTodo && (
        <>
          <h3>TODO Edit</h3>
          <p>기존 TODO : {selectedTodo.title}</p>
          <input type="text" value={updatedTitle} onChange={inputChange} />
          <button onClick={editDoc} className="edit-button">
            수정
          </button>
        </>
      )}
    </div>
  );
};
