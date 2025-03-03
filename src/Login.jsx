import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';

const App = () => {

  

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
        <Input id = "textboxUserName" />
      </Form.Item>

      <Form.Item
        label="PassWord"
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password id = "textboxpassword"/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" id = "btndangnhap">
          Dang Nhap
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
