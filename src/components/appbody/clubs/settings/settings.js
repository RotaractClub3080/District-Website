import React from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Logo from './logo';
import TeamInput from './teamInput';
import AboutEdit from './about'


export default class Setting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: 1
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle = (tab) => {
        if(this.state.activeTab !== tab) this.setState({activeTab: tab});
    }
    
    render(){
        return(
            <div classnames='container'>
               <Nav tabs>
                   <NavItem>
                       <NavLink className={classnames({active: this.state.activeTab === 1})} onClick={()=>this.toggle(1)}>Team</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className={classnames({active: this.state.activeTab === 2})} onClick={()=>this.toggle(2)}>About</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className={classnames({active: this.state.activeTab === 3})} onClick={()=>this.toggle(3)}>Logo</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className={classnames({active: this.state.activeTab === 4})} onClick={()=>this.toggle(4)}>Upload</NavLink>
                   </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                   
                    <TabPane tabId={1}>
                        <Row>
                            <Col sm="12">
                                <TeamInput id={this.props.id} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={2}>
                        <Row>
                            <Col sm="12">
                                <AboutEdit id={this.props.id} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={3}>
                        <Row>
                            <Col sm="12">
                                <Logo id={this.props.id} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={4}>
                        <Row>
                            <Col sm="12">
                                
                            </Col>
                        </Row>
                    </TabPane>
                    
                </TabContent>
            </div>
        )
    }
}