import React, { useState } from 'react'
import style from './loginform.module.scss'

import { auth } from '../../database/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [user, setUser] = useState('');

// 파이어베이스 회원가입 / 로그인
const newSignIn = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    setUser(
        {
            uid : user.uid,
            email : user.email,
            displayName : user.displayName
        }
    )
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    if(errorCode ==='auth/email-already-in-use') {
        alert('동일한 이메일이 이미 존재합니다.')
    }
    else if (errorCode ==='auth/weak-password') {
        alert('비밀번호는 6자리 이상으로 설정해 주세요.')
    }
    else {
        alert('로그인에 실패했습니다')
    }
  });
}

const onEmailLogin = () => {
    async function getLogin() {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            setUser(
                {
                    uid : user.uid,
                    email : user.email,
                    displayName : user.displayName                    
                }
            )
        }
        catch (error) {
            console.log(error.code, error.message);
        }
    }
    getLogin();
}

  return (
    <div className={style}>
        <h1>회원가입 / 로그인</h1>
        <div>
            <form action=""
                onSubmit={newSignIn}
            >
                <div>
                    <label htmlFor="">아이디</label>
                    <input type="email" name="" id="" 
                        onChange={(e)=>(setEmail(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input type="password"
                        onChange={(e)=>(setPassword(e.target.value))}
                    />
                </div>
                <div>
                    <button type="submit">회원가입</button>
                    <button type='button'
                        onClick={onEmailLogin}
                    >로그인</button>
                </div>
            </form>
        </div>
        <div>
            <h2>{user.email}</h2>
            <p>
                {user.displayName}
            </p>
        </div>
    </div>
  )
}
