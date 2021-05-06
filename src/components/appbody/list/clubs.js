import React from 'react';
import './clubs.css';
import team from './list';
import {Card, CardImg, CardHeader} from 'reactstrap';
import Image from './Rotaract.png';
import {Link} from 'react-router-dom';

function ClubCard ({name, img, id}){
    return(
        <div className='container cards'>
            <Card body className='text-center cardbody'>
            <Link to={`/list/${id}`} >
                <CardImg top width="100%" src={img} alt='img' />
                <CardHeader >{name}</CardHeader>
            </Link>
            </Card>
        </div>
    )
}

const list = team.map((member) => {
    return(
    <div className='col-12 col-sm-3' key={member.id}> 
        <ClubCard name={member.name } img={Image} id={member.id} />
    </div>
    )
});

export default class Clubs extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    {list}
                </div>
            </div>
        )
    }
}