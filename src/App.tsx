import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard'; // 新增的登录成功页面

function App() {
    const [currentPage, setCurrentPage] = useState('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 登录状态

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setCurrentPage('dashboard');
    };

    return (
        <div className="App">
            <h1>
                {currentPage === 'login'
                    ? '用户登录'
                    : currentPage === 'register'
                        ? '用户注册'
                        :   '用户中心'
                }

            </h1>

            {currentPage === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
            {currentPage === 'register' && <Register />}
            {currentPage === 'dashboard' && <Dashboard />}

            <div>
                {!isLoggedIn && (
                    <>
                        <button onClick={() => setCurrentPage('register')}>注册</button>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                setCurrentPage('login');
                            }}
                        >
                            退出登录
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;