import React from 'react';
import './home.css';
import InfoCarousel from './infoCarousel';
import Footer from './FooterComponent.js';
import Video from './video.js';
import Board from './board.js';
import Rotary from './Rotarylogo.png'
import Logo from '../theme/DistrictTheme2020.png';
import {Card, CardImg, CardHeader} from 'reactstrap';
import {Link} from 'react-router-dom';
import team from '../list/list';
import Image from '../list/Rotaract.png';
import CountUp from 'react-countup';


function ClubCard ({name, img, id}){
    return(
        <div className='container cards'>
            <Card body className='text-center cardbody'>
            <Link to={`/list/${id}`} >
                <CardImg top width="100%" src={img} alt='img' />
                <CardHeader style={{fontSize:'2vh'}}>{name}</CardHeader>
            </Link>
            </Card>
        </div>
    )
}

const list = team.map((member) => {
    return(
    <div key={member.id} style={{ margin:'2vw', height:'100%'}}> 
        <ClubCard name={member.name } img={Image} id={member.id} />
    </div>
    )
});


export default class Home extends React.Component{

    render(){
        return(
            <div className='container mainpage'>
                <div className='row slide align-item-center' style={{zIndex: '-1', maxWidth: '100vw',width:'100vw', maxHeight:'96vh', margin:'0px'}}>
                    <div className='col-12' style={{padding: '0px'}}>
                        <InfoCarousel />
                    </div>
                </div>
                <div className='row align-item-center logoRow' style={{ zIndex:'9', position:'absolute', top:'40vh'}}>
                    <div className='col-12 logoCol' style={{fontSize:'10vh'}}>
                       <img src={Rotary} className='logo'alt='#' />
                    </div>
                </div>
                <div className='row' style={{height:'30vh', marginTop:'20vh'}}>
                    <div className='col-4 col-offset-4' style={{marginLeft:'18vw', background:'rgb(28, 32, 38)'}}>
                        <img src={Logo} alt='#' style={{height:'100%', width:'100%'}} />
                    </div>
                    <div className='col-4' style={{textAlign:'center', color:'white', paddingTop:'10vh', background:'rgb(61, 63, 66)'}}>
                        <h2>Theme Of The Year</h2>
                        <hr style={{ color: 'white', backgroundColor: 'white', height: .5, borderColor : 'white'}}/>
                        <h4>Together We Believe</h4>
                    </div>
                </div>
               
                <div className='row videoRow'>
                    <div className = 'col-7  video'>
                        <Video />
                    </div>
                    <div className='col-3' style={{color:'white', textAlign:'center'}}>
                        <div style={{top:'30%', left:'20%', position:'absolute'}}>
                            <h1>Our Strength</h1>
                            <CountUp end={3200} duration={10} suffix='+'/>
                            <h3>Total Members</h3>
                            <CountUp end={200000} duration={20} suffix='+'/>
                            <h3>Lives Impacted</h3>
                        </div>
                    </div>
                </div>
                <div className='row teams'>
                    <div className='col-12' style={{textAlign:'center', color:'white'}}>
                        <h1>Teams</h1>
                    </div>
                    <div className='col-12 team'>
                        {list}
                    </div>
                </div>

                <div className='row board'>
                    <div className='col-12'>
                        <Board />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}