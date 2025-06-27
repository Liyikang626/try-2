import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('注册：', { username, password });
        alert(`注册成功！\n用户名：${username}\n密码：${password}`);
    };

    return (
        <form onSubmit={handleRegister}>
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
            <button type="submit">注册</button>
        </form>
    );
}

export default Register;
