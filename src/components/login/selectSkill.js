import React from 'react'
import Container from '../base/layout';
import { ImgSelectable } from '../base/imgSelectable'
import { Col } from '../base/layout'
import { Row } from 'reactstrap'
import { ButtonPrimary } from '../base/button';

const img1 = { name: 'การตลาด', src: 'static/image/favorite/การตลาด.png' }
const img2 = {
    name: 'การแสดงละคร', src: 'static/image/favorite/การแสดงละคร.png'
}
const img3 = { name: 'เล่นดนตรี', src: 'static/image/favorite/เล่นดนตรี.png' }
const img4 = { name: 'งานช่าง', src: 'static/image/favorite/งานช่าง.png' }
const img5 = { name: 'สอนหนังสือ', src: 'static/image/favorite/สอนหนังสือ.png' }
const img6 = { name: 'ทำอาหาร', src: 'static/image/favorite/ทำอาหาร.png' }

const imgList = [img1, img2, img3, img4, img5, img6]


export default class SelectFavorite extends React.Component {

    state = {
        selectedImg: [],
    }

    handleClick = (val) => {
        let newSelectedImg = []
        if (this.state.selectedImg.includes(val)) {
            newSelectedImg = this.state.selectedImg.filter(el => el !== val)
        } else {
            newSelectedImg = [...this.state.selectedImg, val]
        }
        this.setState({
            selectedImg: newSelectedImg
        })
    }

    handleSubmit = () => {

    }

    render() {
        console.log(imgList)
        return (
            <React.Fragment>
                <Container>
                    <Row className='px-2' style={{ margintTop: '10px' }}>
                        <Col xs={12} lg={4}>
                            <h5 className='px-3 my-2'>เลือกทักษะ</h5></Col>
                    </Row>
                    <Row className='py-1 px-3'>
                        {
                            imgList.map(img =>
                                (<Col xs={6} lg={4} className='my-2'><ImgSelectable selected={this.state.selectedImg.includes(img.name)} src={img.src} onClick={() => this.handleClick(img.name)} /></Col>)
                            )
                        }
                    </Row>
                    <Row className='py-1 mx-2 w-100'>
                        <Col xs={12} className='text-right'>
                            <ButtonPrimary className='btn mr-auto' onClick={this.handleSubmit}>Next</ButtonPrimary></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}