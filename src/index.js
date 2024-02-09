
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './/apis/LogIn'; // Login 컴포넌트 파일 경로에 맞게 수정

const root = document.getElementById('root');

// React 17 이하 버전
// ReactDOM.render(<Login />, root);

// React 18 버전
const { createRoot } = ReactDOM;
const rootInstance = createRoot(root);
rootInstance.render(<Login />);

