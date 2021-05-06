import React from 'react';
import Image from '../list/Rotaract.png';
import './posts.css';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import PostCarousel from './carousel';





export default function Post (props){
        return(
            <div className='container' style={{marginTop: '2vh'}}>
                <Card style={{background: 'black'}}>
                    <CardBody >
                        <CardTitle >
                        <div className='cardTitle clubNav' style={{background: 'black', color: 'white'}}>
                            <img className='img'src={Image} alt='#'></img>
                            <h5 className='text'>{props.name}</h5>
                        </div>
                        <div className='border'></div>
                        </CardTitle>
                        <CardText className='textBody'>
                            {props.text}
                        </CardText>
                        <PostCarousel />
                    </CardBody>
                </Card>
            </div>
        )
}