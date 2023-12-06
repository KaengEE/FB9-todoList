import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const Modal = ({ setModalOpen, selectedTodo }) => {
  //수정데이터
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [error, setError] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const inputChange = (e) => {
    setUpdatedTodo(e.target.value);
  };

  //시작할때 기존 todo 넣어주기
  useEffect(() => {
    setUpdatedTodo(selectedTodo.title);
  }, []);

  const editDoc = async () => {
    //console.log(`id: ${selectedTodo.id}, 제목: ${updatedTodo}`);
    if (updatedTodo.trim() === "" || updatedTodo == null) {
      setError(true);
      return;
    }
    //update
    const ref = doc(db, "todos", selectedTodo.id);
    await updateDoc(ref, { title: updatedTodo.trim() });
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
            <input
              required
              type="text"
              value={updatedTodo}
              onChange={inputChange}
            />
            {error && <p className="error">내용을 입력해주세요!</p>}
            <button onClick={editDoc} className="edit-button">
              수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};
