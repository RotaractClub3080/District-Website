import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Form, FormGroup, Input} from 'reactstrap';
import checkPassword from '../settings/auth';
import axios from 'axios';



export default class MemberCard extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            name: this.props.data.name,
            designation: this.props.data.position,
            email: this.props.data.email,
            contact: this.props.data.contactNumber,
            photo: this.props.data.imageUrl,
            clubId: this.props.data.clubId,
            id: this.props.data._id,
            editForm: false,
        }
        this.toggle = this.toggle.bind(this)
        this.save = this.save.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.cancelEdit = this.cancelEdit.bind(this)
    }

    toggle(){
        this.setState({editForm: !this.state.editForm})
    }
    cancelEdit(){
        this.setState({editForm: !this.state.editForm})
        this.setState({designation: this.props.data.position})
        this.setState({contact: this.props.data.contactNumber})
        this.setState({email: this.props.data.email})
        this.setState({name: this.props.data.name})
    }

    onInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    

    save(){
        console.log('Button pressed')
        //check for the password
        let password = prompt('Enter password')
        if(checkPassword(password, this.state.clubId)){
            //construct the formData
            let formData = new FormData();
            formData.append("name", this.state.name)
            formData.append("email", this.state.email)
            formData.append("position", this.state.designation)
            formData.append("contactNumber", this.state.contact)
            formData.append("imageUrl", this.state.photo)

            axios.put(`http://www.rotaract3080.com:8888/api/v1/user/update-user/${this.state.id}`, 
                {
                    "name": this.state.name,
                    "email": this.state.email,
                    "position": this.state.designation,
                    "contactNumber": this.state.contact,
                    "imageUrl": this.state.photo
                }).then(res =>{ 
                console.log(res)
                alert('Updated Successfully!')
                this.toggle()
            }).catch(err=>{
                alert('Update failed!')
            })


        }else{
            alert('Insert correct password!')
        }

    }

    render(){
        return(
            <div className='row'>
                <Card body>
                    {
                        this.state.editForm ? <div>
                        <Form>
                        <FormGroup>
                            <Input placeholder={this.state.name} name="name" onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder={this.state.designation} name="designation" onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder={this.state.contact} name="contact" onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder={this.state.email} name="email" onChange={this.onInputChange}/>
                        </FormGroup>
                        </Form>
                            <Button onClick={this.save} style={{marginRight: '2vw'}}>Save</Button>
                            <Button onClick={this.cancelEdit}>Cancel</Button>
                        </div> :
                        <div>
                            <CardTitle tag="h5">{this.state.name}</CardTitle>
                            <CardText>{this.state.designation}</CardText>
                            <CardText>Phone: {this.state.contact}</CardText>
                            <CardText>Email: {this.state.email}</CardText> 
                            <Button onClick={this.toggle}>Edit</Button>
                        </div>
                    }
                </Card>
            </div>
        )
    }
}