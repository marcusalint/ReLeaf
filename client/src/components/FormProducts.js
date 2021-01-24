import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import {Form} from 'react-bootstrap';
import {useState} from 'react';
import "./Form.css";




export default function FormProducts(props) {
  const[state,setState] = useState({categories: "",
                                    product_title: "",
                                   description: "",
                                  price: ""});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    props.onSave(state);
  }
  function changeHandler(e) {
    setState({...state, [e.target.name]: e.target.value })
  }
    return (
    <div className="form-style-8">  
      <form onSubmit ={handleSubmit} >
 
  
    <Form.Label>Categories</Form.Label>
    <Form.Control name="categories" as="select" onChange = {changeHandler}>
      <option>Medical</option>
      <option>Hygiene</option>
      <option>Clothing</option>
      <option>Furniture</option>
    </Form.Control>
 
 
    <Form.Label>Product fund title</Form.Label>
    <Form.Control name="product_title" as="textarea" rows={1} onChange = {changeHandler}/>
 
  
    <Form.Label>Product fund description</Form.Label>
    <Form.Control name="description" as="textarea" rows={3}  onChange = {changeHandler}/>
 
  
  <Form.Label>Product Price</Form.Label>
      <Form.Control name="price" type="text"  onChange = {changeHandler}/>
  

  
    <Button variant="primary" type="submit">
      Save
    </Button>
    </form>
   </div>
  );
  }


