import React from 'react'
import { Form, FormGroup, Input, Button} from 'reactstrap';
import checkPassword from '../settings/auth';
import axios from 'axios';


export default class EditForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: this.props.data.name,
            designation: this.props.data.position,
            email: this.props.data.email,
            contact: this.props.data.contactNumber,
            photo: " ",
            clubId: this.props.data.clubId,
            id: this.props.data._id,
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.save          = this.save.bind(this)
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
            <div>
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
            </div>
        )
    }
}