import React, { Component } from 'react'
import { Card } from 'antd'

import Container, { Col } from '../base/layout';
import { HeroPrimary, Content } from '../base/text';
import { ButtonPrimaryOutlined } from '../base/button';

export default class JoinSuccess extends Component {

    handleProfile = () => {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <Container className='py-5'>
                <Col>
                    <HeroPrimary className='mx-auto mt-5 text-center'>
                        สมัครเรียบร้อย !
                    </HeroPrimary>
                    <Card className='m-3'>
                        <Content className='mb-3 text-center'>เราจะทำการแจ้งเตือนก่อนวันงานเป็นเวลา 1 วัน ผ่านอีเมลของคุณ (ywcvoluteer@gmail.com) หากมีข้อสงสัย ติดต่อเรา 081-111-1111 (คุณแน็ต)</Content>
                        <ButtonPrimaryOutlined className='w-100 py-2' onClick={this.handleProfile}><b>ไปยังโปรไฟล์ของคุณ</b></ButtonPrimaryOutlined>
                    </Card>
                </Col>
            </Container>
        )
    }
}
