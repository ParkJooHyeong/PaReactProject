import React, { useState } from 'react';
import axios from 'axios';
import '../pages/login.css'; // External CSS 파일 import

const Login = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('서버 API 엔드포인트 URL', credentials);

            if (response.status === 200) {
                // 로그인 성공
                console.log('로그인 성공');
            } else {
                // 로그인 실패
                console.error('로그인 실패');
            }
        } catch (error) {
            console.error('에러 발생:', error.message);
        }
    };

    return (
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
            <form>
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>
                <button onClick={handleLogin}>Log In</button>
                <div className="social">
                    <div className="go">
                        <i className="fab fa-google"></i>
                        Google
                    </div>
                    <div className="fb">
                        <i className="fab fa-facebook"></i>
                        Facebook
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
