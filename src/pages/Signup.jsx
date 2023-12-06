import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email, password);
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("유저가입: ", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>가입</button>
        {/* 에러메시지 */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
