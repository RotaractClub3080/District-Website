import React from 'react';
import './header.css';
import {
    Navbar,
    Nav,
    NavItem,
  } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{

    
    render(){
        return(
         <React.Fragment>
             <Navbar className='navcolor'>
                <div className='container navbarContainer'>
                    <Nav >
                        <NavItem>
                            <Link className='nav-link' to='/home'><span className='fa fa-home '>Home</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/list'><span className='fa fa-list '>Clubs</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/info'><span className='fa fa-phone '>About Us</span></Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to='/theme'><span className='fa fa-snowflake-o '>Theme</span></Link>
                        </NavItem>
                    </Nav>
                </div>
             </Navbar>
         </React.Fragment>
        )
    }       
}