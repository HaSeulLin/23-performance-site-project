import React from 'react'

import { auth } from '../database/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {

// 파이어베이스 회원가입 / 로그인

const newSignIn = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  return (
    <div>
        <h1>회원가입 / 로그인</h1>
        <div>
            <form action="">
                <label htmlFor="">아이디</label>
                <input type="text" name="" id="" />
                <br />
                <label htmlFor="">비밀번호</label>
                <input type="password" />
            </form>
        </div>
    </div>
  )
}
