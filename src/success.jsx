import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    textAlign: 'center',
    marginLeft:"60vh"
  }}
>
  <h1>🎉 Đăng nhập thành công! 🎉</h1>
  <p>Chào mừng bạn đã đăng nhập.</p>
  <Button type="primary" onClick={() => navigate('/')}>
    Quay lại trang đăng nhập
  </Button>
</div>

  );
};

export default Success;
