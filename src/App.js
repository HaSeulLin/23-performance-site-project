import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import HeaderNav from './features/hearderNav/HeaderNav';
import MyPage from './page/MyPage';
import PerformList from './page/PerformList';
import LoginForm from './features/Login/LoginForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/list' element={<PerformList />}/>
          <Route path='/mypage' element={<MyPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
