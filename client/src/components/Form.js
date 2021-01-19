import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import {Form} from 'react-bootstrap';
import {useState} from 'react';





export default function FormComp() {
  const [state,setState] = useState('')
  
      function handleSubmit(e) {
      e.preventDefault();
      console.log(e);
      console.log(state)
      const data = {name: state};
      console.log(data);
     
      axios
        .post('http://localhost:3000/api/categories', {state})
        .then(response => {

          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
 
    }

  
  
  return (
    <form onSubmit ={handleSubmit}>
    
      <Form.Label>Category</Form.Label>
      <Form.Control type="text" placeholder="Enter new Category" onChange = {e => setState(e.target.value)} />
      
   
  
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
  );
  }


