import React from 'react';
import './theme.css';
import Logo from './DistrictTheme2020.png';


export default class Theme extends React.Component{
    render(){
        return(
            <div className='container logo'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={Logo} alt='#' className='logo'/>
                        <div className='imgText'>
                            <p>"When there's teamwork & collaboration, wonderful things can be achieved.</p>
                            <p>Individually we are one drop but together we are an ocean. And thus, RI district 3080 presents you the theme of the year 2020-21 "Together We Believe".</p>
                            <p>IF together we believe, we can make each passing day a masterpiece. Thus we hope each one of you has more strength in your opinion, action, character when we work as one.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}