import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="App">
            <h1>{showLogin ? '用户登录' : '用户注册'}</h1>
            {showLogin ? <Login /> : <Register />}
            <button onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? '没有账号？去注册' : '已有账号？去登录'}
            </button>
        </div>
    );
}

export default App;
