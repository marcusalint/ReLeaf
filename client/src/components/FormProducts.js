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
  function selectCategory(e) {
    let value = 0;
    if ( e.target.value === "Hygiene") {
      value = 1
    } else if (e.target.value === "Medical") {
      value = 2
    } else if (e.target.value === "Clothing") {
      value = 3
    } else if (e.target.value === "Funeral") {
      value = 4;
    } else {
      value = 5;
    }
    setState({...state, [e.target.name]: value});
  }
    return (
    <div className="form-style-5">  
      <form onSubmit ={handleSubmit} >
 
  
    <Form.Label>Categories</Form.Label>
    <Form.Control name="categories" as="select" onChange = {selectCategory}>
      <option>Hygiene</option>
      <option>Medical</option>
      <option>Clothing</option>
      <option>Funeral</option>
      <option>Housing</option>
      
    </Form.Control>
 
 
    <Form.Label>Product fund title</Form.Label>
    <Form.Control name="product_title" as="textarea" rows={1} onChange = {changeHandler} defaultValue="Medical and hospital bills"/>
 
  
    <Form.Label>Product fund description</Form.Label>
    <Form.Control name="description" as="textarea" rows={3}  onChange = {changeHandler} defaultValue="My cousin was injured and I need help covering for their medical expenses and physiotherpy during their recovery"/>
 
  
  <Form.Label>Product Price</Form.Label>
      <Form.Control name="price" type="text"  onChange = {changeHandler} defaultValue="2000" autocomplete="false"/>
  

  
    <button className="btn-save"variant="primary" type="submit">
      Save
    </button>
    </form>
   </div>
  );
  }


