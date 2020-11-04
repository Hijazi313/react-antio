import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const {TextArea}  = Input;
function Contact() {
    return (
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum!</p>
                </div>
                <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Full Name!' }]}
      >
        <Input  placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          
          type="email"
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="telephone"
        rules={[{ required: true, message: 'Please input your telephone!' }]}
      >
        <Input
          
          type="number"
          placeholder="Telephone"
        />
      </Form.Item>
      <Form.Item
        name="subject"
        rules={[{ required: true, message: 'Please input your Subject!' }]}
      >
        <Input
          
          type="text"
          placeholder="Subject"
        />
      </Form.Item>
      <Form.Item>
        <TextArea placeholder="Message" style={{resize:"block"}} />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
         <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
            
        </div>
    )
}

export default Contact
