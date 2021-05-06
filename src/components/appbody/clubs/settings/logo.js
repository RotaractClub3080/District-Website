import React from 'react';
//import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios';
import checkPassword from './auth'



export default class Logo extends React.Component{

    constructor(props){
        super(props);

        this.state  = {
            image: null
        }

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFileChange(event){
        const file = event.target.files[0];
        this.setState({ image: file});
        console.log(this.state.image);
    }

    onSubmit = () =>{
        if(this.state.image === null){
            alert("File not recieved!!")
        }else{
            axios.get(`http://localhost:8888/team/logos/${this.props.id}`).then(res =>{

                let password = prompt("Enter password")

                if(checkPassword(password, this.props.id)){
                    //form a formdata object
                    const formData = new FormData()
                    formData.append("logo", this.state.image)

                    if(res.data === null){
                        //if the file data is null send a post request other wise some image data exists so send a put request
                        axios.post(`http://localhost:8888/team/logos/${this.props.id}`, formData, {
                            headers:{
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(res=>{
                            if(res.status === 200){
                                alert("File uploaded successfully!")
                            }
                        }).catch(err =>{
                            alert("Server Error! File did not get uploaded correctly!")
                        })
                        
                    }else{
                        axios.put(`http://localhost:8888/team/logos/${this.props.id}`, formData, {
                            headers:{
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(res =>{
                            if(res.status === 200){
                                alert("File uploaded successfully!")
                            }
                        }).catch(err =>{
                            alert("Server Error! File did not get uploaded correctly!")
                        })
        
                    }
                }
                else{
                    alert('Incorrect password!')
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }



    render(){
        return(
            <div>
                {
                /*
                <div style={{marginTop: '2vh'}}>
                    <Form>
                        <FormGroup row style={{position: 'relative', left:'1vh'}}>
                            <Label sm={4}>Logo</Label>
                            <Col sm={8}>
                                <Input type="file" onChange={this.onFileChange}/>
                            </Col>
                        </FormGroup>
                        <Button onClick={this.onSubmit}>
                            Add to team
                        </Button>
                    </Form>
                </div>
                */
            }
            </div>
            
        )
    }
}