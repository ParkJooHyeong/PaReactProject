import React, { useEffect, useState } from 'react';
import { getUser } from '../apis/users';

// 유저 정보를 보여주는 컴포넌트
const UserInfo = ({ userId }) => {
  // 유저 정보를 상태로 관리합니다.
  const [user, setUser] = useState(null);

  // 컴포넌트가 마운트될 때 유저 정보를 가져옵니다.
  useEffect(() => {
    // getUser 함수를 호출하고, 결과를 user 상태에 저장합니다.
    const fetchUser = async () => {
      const result = await getUser(userId);
      setUser(result);
    };
    fetchUser();
  }, [userId]); // userId가 바뀔 때마다 다시 호출합니다.

  // 유저 정보가 없으면 로딩 메시지를 보여줍니다.
  if (!user) {
    return <div>로딩중...</div>;
  }

  // 유저 정보가 있으면 이름, 이메일, 전화번호를 보여줍니다.
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserInfo;
