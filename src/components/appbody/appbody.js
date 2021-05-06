import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home/home';
import Contact from './info/contact';
import Clubs from './list/clubs';
import Theme from './theme/theme';
import './appbody.css';
import ClubTemplate from './clubs/clubs';



const ClubTemplates = ({match}) => {
    return(
        <React.Fragment>
            <ClubTemplate id={parseInt(match.params.id, 10)} />
        </React.Fragment>
    )
}




export default class AppBody extends React.Component{

    render(){
        return(
            <div className='container appBody'>
                <div className='row content'>
                    <div className='col-12' style={{padding:'0px'}}>
                        <div className='container body'>
                            <div className='row content'>
                                <div className='col-12 ' style={{padding:'0px'}}>
                                    <Switch>
                                            <Route exact path='/' component={Home} />
                                            <Route exact path='/home' component={Home} />
                                            <Route exact path='/info' component={Contact} />
                                            <Route exact path='/list' component={Clubs} />
                                            <Route exacr path='/list/:id' component={ClubTemplates} /> 
                                            <Route exact path='/theme' component={Theme} />
                                        </Switch>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}