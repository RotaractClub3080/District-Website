import React from 'react';
import MemberCard from './memberCard'
import axios from 'axios'
import checkPassword from '../settings/auth';
import {Button} from 'reactstrap'



export default class Members extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            members: []
        }
        this.delete = this.delete.bind(this)

        
    }
    componentWillMount(){
        axios.get(`http://www.rotaract3080.com:8888/api/v1/user/get-users-club/${this.props.id}`).then(res => {
            console.log(res)
            this.setState({members: res.data.data})
            console.log(this.state.members)
        }).catch(err => {
            console.log(err)
        })
    }


    delete(id, clubId){
        let password = prompt('Enter password')
        if(checkPassword(password, clubId)){
            axios.delete(`http://www.rotaract3080.com:8888/api/v1/user/delete-user/${id}`).then(res=>{
                alert("Member deleted!")
                axios.get(`http://www.rotaract3080.com:8888/api/v1/user/get-users-club/${this.props.id}`).then(res => {
                console.log(res)
                this.setState({members: res.data.data})
                console.log(this.state.members)
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err=>{
                alert('Delete operation not successful!')
            })
        }else{
            alert('Enter correct password!')
        }
    }

    render(){
        return(
            <div className='container' style={{overflowY: 'scroll', maxHeight: '60vh'}}>
                {this.state.members.map(member => {
                    return(
                        <div style={{marginTop: '2vh'}}>
                            <MemberCard data = {member} />
                            <Button style={{marginTop:'1vh'}} onClick={()=>this.delete(member._id, member.clubId)} block>Delete</Button>
                        </div>
                    )
                })}
            </div>
        )
    }

}