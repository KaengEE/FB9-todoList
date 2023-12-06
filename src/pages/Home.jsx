import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Home() {
  const [todos, setTodos] = useState(null);
  console.log(todos);

  //시작할때 데이터 가져오기
  useEffect(() => {
    const ref = collection(db, "todos");

    //todos 컬렉션에 모든 문서들 가져오기
    const unsub = onSnapshot(ref, (snapshot) => {
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
