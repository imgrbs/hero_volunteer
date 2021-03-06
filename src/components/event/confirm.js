import React, { Component } from 'react'
import { Radio, Form, Modal } from 'antd'

import firebase, { getOne, update, insert } from '../../config/firebase';
import Container, { ContainerFluid, Col } from '../base/layout';
import Input from '../base/input'
import Icon, { IconInput, IconWithText } from '../base/icon'

import Header, { Highlight } from '../base/text';
import HorizontalLine from '../base/HorizontalLine';
import { UserContext } from '../../context';
import Loading from '../base/loading';
import { ButtonPrimary } from '../base/button';

const confirm = Modal.confirm;

class ConfirmRegister extends Component {
    state = {
        visible: false,
        loading: true,
        event: {},
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phone: ''
    }

    showConfirm = () => {
        const handleJoin = this.handleJoin
        confirm({
            title: 'ยืนยันการสมัครค่ายอีกครั้ง?',
            content: 'กรุณาตรวจเช็คข้อมูลของท่านก่อนกดยืนยัน',
            onOk() {
                handleJoin()
            },
            onCancel() {},
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const { user } = this.props
        const { uid } = this.props.match.params
        this.getEventByUid(uid)
        if (user && user.profile) {
            const { firstName, lastName, gender, email, phone } = user.profile
            this.setState({ firstName, lastName, gender, email, phone })
        }
    }
    
    getEventByUid = uid => {
        getOne('/events', uid).once("value").then((snapshot) => {
        const event = snapshot.val()
        this.setState({ event })
        this.setState({ loading: false })
        })

        return this.state.event
    }

    handleJoin = () => {
        const { user } = this.props
        if (user) {
            const { uid } = this.props.match.params
            const event =  this.getEventByUid(uid)
            const { isApproved, coreTeam = [], coreTeamTypes, staffs = [], maxStaff} = event
            const timestamp = firebase.database.ServerValue.TIMESTAMP
            if (!isApproved) {
                const newEvent = {
                    ...event,
                    coreTeam: [
                    ...coreTeam,
                    {
                        userUid: user.uid,
                        timestamp,
                    }
                    ]
                }
                this.updateEventByUid(uid, newEvent)
            } else {
                const newEvent = {
                    ...event,
                    staffs: [
                    ...staffs,
                    {
                        userUid: user.uid,
                        timestamp,
                    }
                    ]
                }
                this.updateEventByUid(uid, newEvent)
            }
            this.props.history.push(`/event/success`)
        } else {
            this.props.history.push(`/login`)
        }
    }

    updateEventByUid = (uid, value) => {
        update('/events', uid, value)
    }

    render() {
        const { event, loading } = this.state
        return (
        <React.Fragment>
            <ContainerFluid>
                <Container>
                    <Col>
                        <Header>สมัครเข้าร่วมงาน</Header>
                    </Col>
                    <Col>
                        <Form className='col-12 text-center' style={{ margin: 'auto' }} onSubmit={e => e.preventDefault()}>
                            <Input
                                className='my-2'
                                placeholder="ชื่อ"
                                name='firstName'
                                prefix={<IconInput type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={this.state.firstName}
                                onChange={this.onChange}
                                required
                            />
                            <Input
                                className='my-2'
                                placeholder="นามสกุล"
                                name='lastName'
                                prefix={<IconInput type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={this.state.lastName}
                                onChange={this.onChange}
                                required
                            />
                            <div className='text-left'>
                                <span className='mx-3'>เพศ </span>
                                <Radio.Group name='gender' onChange={this.onChange} value={this.state.gender} required>
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
                                required
                            />
                            <Input
                                className='my-2'
                                placeholder="เบอร์โทร"
                                name='phone'
                                prefix={<IconInput type="phone" style={{ color: 'rgba(0,0,0,.25)', transform: 'rotate(90deg)' }} />}
                                value={this.state.phone}
                                onChange={this.onChange}
                                required
                            />
                        </Form>
                    </Col>
                    <Col>
                        <Header>ตำแหน่ง</Header>
                        <HorizontalLine />
                    </Col>
                    <Col>
                        <Header>เกี่ยวกับงาน</Header>
                        <Highlight>{event.eventName}</Highlight>
                    </Col>
                    <IconWithText type="calendar" text={`${event.date} | ${event.startTime} - ${event.endTime}`} />
                    <IconWithText type="environment" text={event.location} />
                    <Col className='mt-2'>
                        <Header>ผู้จัดงาน</Header>
                        <Highlight>{event.organizer}</Highlight>
                        <Highlight>{event.telNo}</Highlight>
                    </Col>
                    <Col className='mb-3'>
                        <ButtonPrimary onClick={this.showConfirm} className='w-100 py-2 text-white'>ยืนยันการสมัคร</ButtonPrimary>
                    </Col>
                </Container>
            </ContainerFluid>
            <Loading isShow={loading} />
        </React.Fragment>
        )
    }
}

const ComposeUserContext = ({...props}) => (
    <UserContext.Consumer>
       {
            ({ user }) => (
                <ConfirmRegister user={user} {...props}/>
            )
       }
    </UserContext.Consumer>
)

export default ComposeUserContext