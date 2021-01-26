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
    <div className="form-style-5">  
      <form onSubmit ={handleSubmit} >
 
  
    <Form.Label>Categories</Form.Label>
    <Form.Control name="categories" as="select" onChange = {changeHandler}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      
    </Form.Control>
 
 
    <Form.Label>Product fund title</Form.Label>
    <Form.Control name="product_title" as="textarea" rows={1} onChange = {changeHandler}/>
 
  
    <Form.Label>Product fund description</Form.Label>
    <Form.Control name="description" as="textarea" rows={3}  onChange = {changeHandler}/>
 
  
  <Form.Label>Product Price</Form.Label>
      <Form.Control name="price" type="text"  onChange = {changeHandler}/>
  

  
    <button className="btn-save"variant="primary" type="submit">
      Save
    </button>
    </form>
   </div>
  );
  }


