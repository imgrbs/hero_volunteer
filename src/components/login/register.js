import React from 'react'
import { Radio, Form } from 'antd'
import Container from "../base/layout";
import { ButtonPrimary } from '../base/button';
import Input from '../base/input'
import { IconInput } from '../base/icon'
import Header from '../base/text';

export default class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phone: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // insert user info
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Form className='my-5 px-5 text-center' style={{ margin: 'auto' }} onSubmit={this.handleSubmit}>
                        <Header className='text-left'>ข้อมูลส่วนตัว</Header>
                        <Input
                            className='my-2'
                            placeholder="ชื่อ"
                            name='firstName'
                            prefix={<IconInput type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                        <Input
                            className='my-2'
                            placeholder="นามสกุล"
                            name='lastName'
                            prefix={<IconInput type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={this.state.lastName}
                            onChange={this.onChange}
                        />
                        <div className='text-center'>
                            <span className='mx-3'>เพศ </span>
                            <Radio.Group onChange={this.onChange} value={this.state.gender}>
                                <Radio value='M'>ชาย</Radio>
                                <Radio value='F'>หญิง</Radio>
                            </Radio.Group>
                        </div>
                        <Input
                            className='my-2'
                            placeholder="อีเมล"
                            name='email'
                            prefix={<IconInput type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <Input
                            className='my-2'
                            placeholder="เบอร์โทร"
                            name='phone'
                            prefix={<IconInput type="phone" style={{ color: 'rgba(0,0,0,.25)', transform: 'rotate(90deg)' }} />}
                            value={this.state.phone}
                            onChange={this.onChange}
                        />
                        <ButtonPrimary className='w-100 my-2 py-2'>บันทึก</ButtonPrimary>
                    </Form>

                </Container>
            </React.Fragment>
        )
    }
}