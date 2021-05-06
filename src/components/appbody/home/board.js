import React from 'react';
import './board.css';
import member1 from './DeputyDRRRtrShashankKaushik.jpeg';
import member2 from './DRRRtrSamirMadan.jpg';
import member3 from './DRSRtrChinmayAbbhi.jpg';
import member4 from './DRSRtrKanikaMehta.jpeg';
import member5 from './DRSRtrKunalBhatia.png';
import member6 from './DRSRtrPranavVashishth.jpeg';
import member7 from './IPDRRRtrIshitaKaith.JPG';




export default class Board extends React.Component{

    render(){
        return(
            <div className='container boardContainer'>
                <div className='row justify-content-center align-content-center'>
                    <div className='col-12' style={{color:'white', textAlign:'center'}}>
                        <h1>Board Of Directors</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg1' src={member1} alt='#'/>
                        <div className='nameText'><h4>Deputy DRR Rtr.Shashank Kaushik</h4></div>
                    </div>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg2' src={member2} alt='#'/>
                        <div className='nameText'><h3>DRR Rtr.Samir Madan</h3></div>
                    </div>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg3' src={member3} alt='#'/>
                        <div className='nameText'><h3>DRS Rtr.Chinmay Abbhi</h3></div>
                    </div>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg4' src={member4} alt='#' />
                        <div className='nameText'><h3>DRS Rtr.Kanika Mehta</h3></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg5 skew' src={member5} alt='#'/>
                        <div className='nameText'><h3>DRS Rtr.Kunal Bhatia</h3></div>
                    </div>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg6' src={member6} alt='#'/>
                        <div className='nameText'><h3>DRS Rtr.Pranav Vashishth</h3></div>
                    </div>
                    <div className='col-12 col-sm-3 imgContainer'>
                        <img className = 'boardImg7' src={member7} alt='#'/>
                        <div className='nameText'><h3>IPDRR Rtr.Ishita Kaith</h3></div>
                    </div>
                </div>
            </div>
        )
    }
}