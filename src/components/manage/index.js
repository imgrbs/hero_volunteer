import React, { Component } from 'react'
import { Form, DatePicker, Checkbox, Select } from 'antd'

import Input from '../base/input'
import Header from '../base/text';
import Container, { Col } from '../base/layout';
import { ButtonPrimary } from '../base/button';

import types from './types.json'
import coreTeams from './coreTeams.json'

const Option = Select.Option;

const children = [];
types.map(type => {
    children.push(<Option key={type.name}>{type.name}</Option>);
})

const childCoreTeams = [];
coreTeams.map(type => {
    childCoreTeams.push(<Option key={type.name}>{type.name}</Option>);
})

function handleChange(value) {
  console.log(`Selected: ${value}`);
}


export default class Manage extends Component {
    
    state = {}

    submit = (e) => {
        e.preventDefault()
        this.save()
        window.location.href = '/'
    }

    save = () => {}

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  
    render() {
    return (
      <Container>
        <Col>
            <Header className='mt-5 mb-2'>สร้างกิจกรรม</Header>
            <Form onSubmit={this.submit}>
                <Header>รายละเอียดงาน</Header>
                <hr/>
                <Input className='my-2' name='eventName' placeholder='ชื่อโครงการ'/>
                <Input.TextArea className='my-2' name='description' placeholder='คำอธิบายโครงการ'/>
                <DatePicker.RangePicker className='my-2' onChange={this.onChange} />
                <Input.TextArea className='my-2' onChange={this.onChange} name='location' placeholder='สถานที่'/>

                <Input.TextArea className='my-2' onChange={this.onChange} name='benefit' placeholder='สิ่งที่ได้จากโครงการนี้'/>
                <Input.TextArea className='my-2' onChange={this.onChange} name='requirement' placeholder='เงื่อนไขการเข้าร่วม'/>
                
                <Select
                    mode="multiple"
                    className='w-100 my-2'
                    placeholder="Please Core Team Types"
                    onChange={this.handleChange}
                >
                    {childCoreTeams}
                </Select>

                <Checkbox>ต้องการสปอนเซอร์</Checkbox>
                <Input.TextArea className='my-2' onChange={this.onChange} name='requirement' placeholder='สิ่งที่ต้องการจากสปอนเซอร์'/>
                
                <Header>เกี่ยวกับผู้เข้าร่วม</Header>
                <hr/>
                <Select
                    mode="multiple"
                    className='w-100 my-2'
                    placeholder="Please select"
                    onChange={this.handleChange}
                >
                    {children}
                </Select>
                <Input.TextArea className='my-2' placeholder='รายละเอียดเพิ่มเติม'/>
                <ButtonPrimary htmlType="submit" className='w-80 py-2 px-5'>สร้างกิจกรรม</ButtonPrimary>
            </Form>
        </Col>
      </Container>
    )
  }
}
