import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import team from './list'
import axios from 'axios';
import checkPassword from './auth'



export default class TeamInput extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            image: null,
            designation: null,
            name: null,
            contact: null,
            email: null
        }

        this.submit = this.submit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    submit(){

        console.log(this.state.image)
        console.log(this.state.name)
        console.log(this.state.designation)
        console.log(this.state.email)
        console.log(this.state.contact)

        //check if any of the information is empty or not

        if( this.state.name === null || this.state.designation === null || this.state.email === null || this.state.contact === null){
            alert("Insert all the relevant information!");
        }else{

            //construct the request object
            let passWord = prompt('Enter Password!');
            //check for password validity

            if(checkPassword(passWord, this.props.id)){
                console.log(this.props.id)
                console.log(this.state.designation)
                console.log(this.state.name)
                console.log(this.state.email)
                 //construct the form data
                const formData = new FormData();
                
                formData.append("club", team[this.props.id - 1].name)
                formData.append("clubId", parseInt(this.props.id))
                formData.append("name", this.state.name)
                formData.append("email", this.state.email)
                formData.append("position", this.state.designation)
                formData.append("contactNumber", this.state.contact)
            
                console.log(formData);

                //send the post request to the backend server
                axios.post(`http://www.rotaract3080.com:8888/api/v1/user/add-user`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res) => {
                    console.log(res);
                    alert("Upload Successfull!")
                }).catch((err) => {
                    alert("Data not uploaded!")
                    console.log(err);
                });

                console.log('Sent Post Request!');
            }else{
                alert('Insert correct password');
            }
        
        }
        
    }

    onFileChange(event){
        const file = event.target.files[0];
        this.setState({ image: file});
    }

    onInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
        return(
            <div style={{marginTop: '2vh'}}>
                <Form>
                    <FormGroup>
                        <Input placeholder="Name" name="name" onChange={this.onInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Designation" name="designation" onChange={this.onInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Contact" name="contact" onChange={this.onInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Email" name="email" onChange={this.onInputChange}/>
                    </FormGroup>
                    <Button onClick={this.submit}>
                        Add to team
                    </Button>
                </Form>
            </div>
        )
    }
}