import React from 'react';
import './contact.css';
import Logo from '../theme/DistrictTheme2020.png';

export default class Contact extends React.Component{
    render(){
        return(
            <div className='container info'>
                <div className='row' style={{height:'100%'}}>
                    <div className='col-12'>
                        <img src={Logo} alt='#' className='logo'/>
                        <div className='infoText'>
                            <h1>About Us</h1>
                            <p>With the blessings of almighty and hardwork of different rotaractors we took a long path to serve the society in every possible manner. Our journey dates back to 1985 when we started with 1200 rotaractors with a strong aim to make people’s lives better. Since past 25 years we have grown tremendously by connecting to various communities, building networks internationally and creating long term relationships. We have been successful in providing a huge pool of opportunities to young minds to grow, learn and enhance their leadership skills so that in future too they fulfill our aim to serve the society and help it grow.</p>
                            <p>So far and yet so ambitious, the district 3080 today is a family of 3500+ rotaractors in more than 92 clubs across Punjab, Haryana, Himachal Pradesh, Uttrakhand, Uttar pradesh and complete chandigarh under the proud leadership of Rtr Samir Madan (District Rotaract Representative). </p>
                            <p>Rtr Samir Madan has initiated a new theme “Together we believe” for this rota year to bring a positive change in the society and one’s own life. He believes in the quote “Alone we can do so little, together we can do much more”, with this belief of his he has made every team member unstoppable on the path to serve and even in this pandemic the team’s togetherness is converting every uncertainty into an opportunity. Everyone together in this situation is working hard and striving to create masterpieces out of everything they do. </p>
                            <p>With distinct leaderships at different points of time, we have added many achievements to our kitty few of them being, hosting rotasia, SEARIC Summit & first ever RPL in RIY 2017-18 etc. </p>
                            <p>Currently under the governance of Rtr Ramesh Bajaj, and leadership of Rtr V.K Sharma ( District Rotaract Committee Chairman) and DRR- Rtr Samir Madan, the organization is yet to achieve more heights. With focus on our goal which is to serve the society, the team of high spirited individuals are ready to take on every situation as it comes to create wonders.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}