import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthContext } from "../context/useAuthContext";

export default function Navbar() {
  const { dispatch, user } = useAuthContext();
  //로그아웃 함수
  const logout = () => {
    signOut(auth)
      .then(() => {
        //console.log("로그아웃");
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <nav>
      <h1>My Todo List</h1>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {/* 유저가 없을때 로그인/회원가입 활성화 */}
        {!user && (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}

        {/* 유저가 있을때 로그아웃 버튼 활성화 */}
        {user && (
          <>
            <li> 😃{user.email}님</li>
            <li onClick={logout}>로그아웃</li>
          </>
        )}
      </ul>
    </nav>
  );
}
