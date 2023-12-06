import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const { user } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(newTodo);

    //컬렉션
    const ref = collection(db, "todos");
    //db에 추가
    await addDoc(ref, { title: newTodo, uid: user.uid });

    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="label-container">
          <span>새 할일 :</span>
          <input
            required
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
          />
        </label>
        <button>추가</button>
      </div>
    </form>
  );
}
