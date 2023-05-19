import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HeaderNav() {
  return (
    <div>
        <div id='top-nav'>
            <Link to='/login'>로그인</Link>
            <Link to='/login'>회원가입</Link>
            <Link to='/'>고객센터</Link>
            <Link to='/'>한국어</Link>
        </div>
        <div id='main-nav'>
            <div>
                <Link to='/'>=</Link>
                <Link to='/'>Logo</Link>
            </div>
            <div>
                <Link to='/list'>공연목록</Link>
                <Link to='/mypage'>마이페이지</Link>
                <Link to='/'>Book</Link>
            </div>
        </div>
        <div id='bottom-nav'>
            <a href="#">TOP</a>
        </div>
        <Outlet />
    </div>
  )
}
