import React from 'react';
import Sidebar from './sidebar';
import './clubs.css';
import team from './settings/list';
import Post from './post.js';
import { Jumbotron, Container } from 'reactstrap';


function clubName(id){
    let name = '';
    for(let i = 0; i < team.length; i++){
        if(team[i].id === id){
            name = team[i].name;
            break; 
        }
    }
    return name;
}

export default class ClubTemplate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.activateModal = this.activateModal.bind(this);
    }

    activateModal = ()=>{
        console.log('Print onClick');
        this.setState({modal: !this.state.modal});
    }

    render(){
        return(
            <div className='container cbody'>
                <div className='row crow'>
                    <div className='col-4 sidebar'>
                        <div className='container cSidebar'>
                            {/* This will contain menu items */}
                            <Sidebar id={this.props.id} />
                        </div>
                    </div>
                    <div className='col-8' style={{maxHeight:'98vh',overflowY: 'scroll'}}>
                        <div className='container posts'>
                                <div className='row'>
                                    <div className='col-12' >
                                    <Jumbotron fluid>
                                        <Container fluid>
                                        <h5 style={{'fontSize': '2vw', textAlign:'center'}} className="display-3">{team[parseInt(this.props.id) - 1].name}</h5>
                                        </Container>
                                    </Jumbotron>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}