import { useState } from 'react';

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newTodo);

    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>새 할일 :</span>
        <input
          required
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </label>
      <button>추가</button>
    </form>
  );
}
