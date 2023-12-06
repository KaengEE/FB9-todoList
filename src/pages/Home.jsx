import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function Home() {
  const [todos, setTodos] = useState(null);
  const { user } = useAuthContext();
  //console.log(todos);

  //시작할때 데이터 가져오기
  useEffect(() => {
    //where절이 있을경우 query로 만들어줘야함
    const q = query(collection(db, "todos"), where("uid", "==", user.uid));

    //todos 컬렉션에 모든 문서들 가져오기
    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      //성공시 snapshot.docs에 모든 doc를 넣음
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setTodos(results);
    });
    return () => unsub();
  }, []);

  return (
    <div className="App">
      {todos && <TodoList todos={todos} />}
      <TodoForm />
    </div>
  );
}
