import React from 'react';
import {Player} from 'video-react';
import './video.css';
import trailer from './rotaract.mp4';

class Video extends React.Component{
    render(){
        return(
            <div className='container video'>
                <div className='row'>
                    <div className='col-12'>
                        <Player playsInline src={trailer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;