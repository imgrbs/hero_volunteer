import React, { Component } from 'react'
import { DatePicker, Checkbox, Select } from 'antd'

import Input from '../base/input'
import Header from '../base/text';
import Container, { Col } from '../base/layout';
import { ButtonPrimary } from '../base/button';

import types from './types.json'

const Option = Select.Option;

const children = [];
types.map(type => {
    children.push(<Option key={type.name}>{type.name}</Option>);
})

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

export default class Manage extends Component {
  render() {
    return (
      <Container>
        <Col>
            <Header className='mt-5 mb-2'>สร้างกิจกรรม</Header>
            <form onSubmit={this.submit}>
                <Header>รายละเอียดงาน</Header>
                <hr/>
                <Input placeholder='ชื่อโครงการ'/>
                <Input.TextArea placeholder='คำอธิบายโครงการ'/>
                <DatePicker.RangePicker onChange={this.onChange} />
                <Input.TextArea placeholder='สถานที่'/>

                <Input.TextArea placeholder='สิ่งที่ได้จากโครงการนี้'/>
                <Input.TextArea placeholder='เงื่อนไขการเข้าร่วม'/>
                <Input.TextArea placeholder='หน้าที่'/>

                <Checkbox>ต้องการสปอนเซอร์</Checkbox>
                <Input.TextArea placeholder='สิ่งที่ต้องการจากสปอนเซอร์'/>
                
                <Header>เกี่ยวกับผู้เข้าร่วม</Header>
                <hr/>
                <Select
                    mode="multiple"
                    className='w-100'
                    placeholder="Please select"
                    onChange={this.handleChange}
                >
                    {children}
                </Select>
                <Input.TextArea placeholder='รายละเอียดเพิ่มเติม'/>
                <ButtonPrimary className='w-80 py-2 px-5'>สร้างกิจกรรม</ButtonPrimary>
            </form>
        </Col>
      </Container>
    )
  }
}
