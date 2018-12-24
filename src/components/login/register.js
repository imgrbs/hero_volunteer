import React from 'react'
import { Input, Icon, Radio, Form } from 'antd'
import Container, { Col, ContainerFluid, VideoContainer } from "../base/layout";
import { ButtonPrimary } from '../base/button';

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
                    <Form className='px-5' onSubmit={this.handleSubmit}>
                        <Col className='py-1'>
                            <h3>ข้อมูลส่วนตัว</h3>
                            <Input
                                className='my-2'
                                placeholder="ชื่อ"
                                name='firstName'
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={this.state.firstName}
                                onChange={this.onChange}
                            />
                            <Input
                                className='my-2'
                                placeholder="นามสกุล"
                                name='lastName'
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={this.state.lastName}
                                onChange={this.onChange}
                            />
                            <div className='my-2'>
                                <span>เพศ </span>
                                <Radio.Group onChange={this.onChange} value={this.state.gender}>
                                    <Radio value='M'>ชาย</Radio>
                                    <Radio value='F'>หญิง</Radio>
                                </Radio.Group>
                            </div>
                            <Input
                                className='my-2'
                                placeholder="อีเมล"
                                name='email'
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <Input
                                className='my-2'
                                placeholder="เบอร์โทร"
                                name='phone'
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)', transform: 'rotate(90deg)' }} />}
                                value={this.state.phone}
                                onChange={this.onChange}
                            />
                        </Col>
                        <Col className='py-3'>
                            <ButtonPrimary className='w-100 py-1'>บันทึก</ButtonPrimary>
                        </Col>
                    </Form>

                </Container>
            </React.Fragment>
        )
    }
}