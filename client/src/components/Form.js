import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import {Form} from 'react-bootstrap';
import {useState} from 'react';
import "./Form.css";




export default function FormComp() {
  const [state,setState] = useState({title: '', 
                                     description: '',
                                     image: '',
                                     total_goal: ''});
  function changeHandler(e) {
       setState({...state, [e.target.name]: e.target.value })
  }
      function handleSubmit(e) {
      e.preventDefault();
      axios
        .post('http://localhost:3000/api/creatorProfile', {state})
        .then(response => {

          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
 
    }

  
  
  return (
    <div className="form-style-8">
    <form onSubmit ={handleSubmit}>
    
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" name="title" placeholder="Enter a title" onChange = {changeHandler} />
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" name="description" placeholder="Enter a Description" onChange = {changeHandler} />
      <Form.Label>Image</Form.Label>
      <Form.Control type="text" name="image" placeholder="Enter a Category" onChange = {changeHandler} />
      <Form.Label>Total Goal</Form.Label>
      <Form.Control type="text" name ="total_goal" placeholder="Enter new Category" onChange = {changeHandler} />
     
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
  </div>
  );
  }


