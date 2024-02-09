import React from 'react';
import '../pages/login.css'; // External CSS 파일 import

const Login = () => {
  const handleLogin = () => {
    // 여기에 로그인 버튼 클릭 시 수행할 동작을 추가합니다.
    console.log('Login button clicked');
    // 추가적인 로그인 로직을 구현하거나, 부모 컴포넌트에 이벤트를 전달할 수 있습니다.
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button onClick={handleLogin}>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
