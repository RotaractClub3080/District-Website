import React from 'react';
import './sidebar.css';
import team from '../list/list';
import{useHistory} from 'react-router-dom';
import Image from '../list/Rotaract.png';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

import Members from './members/members';
import Setting from './settings/settings';
//import Contact from './contact/contact';
//import About from './about/about';

function Links(props){
    const history = useHistory();
    return(
        <button className='navButton clubNav' onClick={()=>history.push(`/list/${props.id}`)}>
            <img className='img'src={Image} alt='#'></img>
            <h5 className='text'>{props.name}</h5>
        </button>
    )
}

const clubList = team.map((member) => {
    return(
        <Links name={member.name} id={member.id} key={member.id}/>
    )
})



export default class Sidebar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            settings:   false,
            members:    false,
            contact:    false,
            about:      false
        }
        this.toggleSetting = this.toggleSetting.bind(this);
        this.toggleMembers = this.toggleMembers.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
        this.toggleAbout   = this.toggleAbout.bind(this);
    }

    toggleSetting(){
        this.setState({setting: !this.state.setting});
    }
    
    toggleMembers(){
        this.setState({members: !this.state.members});
    }

    toggleContact(){
        this.setState({contact: !this.state.contact});
    }

    toggleAbout(){
        this.setState({about: !this.state.about});
    }
    
    render(){
        return(
            <div className='sidebar'>
               <button className='navButton clubNav' onClick={this.toggleSetting}>
                    <span className='fa fa-gear icon'></span>
                    <h5 className='buttonText'>Settings</h5>
                </button>
                <Modal className='modalWindow' isOpen={this.state.setting}>
                    <ModalHeader toggle={this.toggleSetting}>Settings</ModalHeader>
                    <ModalBody>
                        <Setting id={this.props.id} />
                    </ModalBody>
                </Modal>
               <button className='navButton clubNav' onClick={this.toggleMembers}>
                    <span className='fa fa-list icon'></span>
                    <h5 className='buttonText'>Members</h5>
                </button>
                <Modal className='modalWindow' isOpen={this.state.members}>
                    <ModalHeader toggle={this.toggleMembers}>Members</ModalHeader>
                    <ModalBody> 
                        <Members id={this.props.id}/>              
                    </ModalBody>
                </Modal>
                {
                /*
                <button className='navButton clubNav' onClick={this.toggleContact}>
                        <span className='fa fa-phone icon'></span>
                        <h5 className='buttonText'>Contact Us</h5>
                    </button>
                    <Modal className='modalWindow' isOpen={this.state.contact}>
                        <ModalHeader toggle={this.toggleContact}>Contacts</ModalHeader>
                        <ModalBody>
                            <Contact id={this.props.id} />               
                        </ModalBody>
                    </Modal>
                    <button className='navButton clubNav' onClick={this.toggleAbout}>
                        <span className='fa fa-phone icon'></span>
                        <h5 className='buttonText'>About</h5>
                    </button>
                    <Modal className='modalWindow' isOpen={this.state.about}>
                        <ModalHeader toggle={this.toggleAbout}>About</ModalHeader>
                        <ModalBody>
                            <About id={this.props.id} />               
                        </ModalBody>
                    </Modal>
                    <div className="title">
                        Teams
                    </div>
                    */
                    }
                {clubList}
            </div>
            
        )
    }
}