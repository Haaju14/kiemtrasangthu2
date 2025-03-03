import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  // const onFinish = (values) => {
  //   const { username, password } = values;
  //   if (username === 'admin' && password === 'admin') {
  //     message.success('Đăng nhập thành công!');
  //     console.log("🔄 Đang chuyển hướng đến /success");
  //     navigate('/success');
  //   } else {
  //     message.error('Sai tài khoản hoặc mật khẩu!');
  //   }
  // };
  

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      id='controller'
    >
      <Form.Item
        label="Tên đăng nhập"
        name="username" 
        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
      >
        <Input id="textboxusername" />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password id="textboxmatkhau" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" id="btndangnhap">
          ĐăngNhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
