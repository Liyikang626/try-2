import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // 阻止表单刷新页面
        try{
            // 发请求到后端
            const res = await fetch('http://localhost:5000/api/login', {
                method: 'POST', // 用 POST 方式发
                headers: {
                    'Content-Type': 'application/json' // 告诉后端：我是发的 JSON
                },
                body: JSON.stringify({
                    username, // 用户名
                    password  // 密码
                })
            });

            const data = await res.json(); // 等待后端回答，并把回答变成对象
            if (res.ok) {
                alert('登录成功！' + data.username);
            } else {
                alert('登录失败：' + data.message);
            }
        }

        catch (err){
            console.log(err);
            alert("Something wrong happen")
        }

    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>用户名：</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>密码：</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" onClick={handleLogin}>登录</button>
        </form>
    );
}

export default Login;

