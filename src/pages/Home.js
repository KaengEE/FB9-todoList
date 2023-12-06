import { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState([
    { title: '아침운동', id: 1 },
    { title: '제시간에 학원오기', id: 2 },
    { title: '점심먹기', id: 3 },
    { title: '복습하기', id: 4 }
  ]);

  return (
    <div className="App">
      {todos && <TodoList todos={todos} />}
      <TodoForm />
    </div>
  );
}
