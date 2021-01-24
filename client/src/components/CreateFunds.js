import React, {useState} from 'react';

import FormProducts from './FormProducts';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import FormList from './FormList';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import "./Form.css";
export default function CreateFundPage(props) {
  const [productButton, setProductButton] = useState(false);
  const [state, setState] = useState(
    { profile_title: "",
      profile_description: "",
      image: "",
      total_goal: "",
      products :[]})

  function save(stateReceived){
    const newCategories = stateReceived.categories;
    const newTitle = stateReceived.product_title;
    const newDescription = stateReceived.description;
    const newPrice = stateReceived.price;
    let temp = [...state.products];
    const newProduct = {
      categories: newCategories, 
      product_title: newTitle, 
      description: newDescription, 
      price: newPrice};
      
      temp.push(newProduct);
      console.log(temp);
    // setState({...state, categories:newCategories,product_title:newTitle,description:newDescription,price:newPrice}); 
     
    setState(prev => ({ ...prev, products: temp}));
    console.log(state)
    setProductButton(false);
    
  }   
                                      
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
  console.log(state)
  return (
    <div className="form-style-8">
      <form onSubmit ={handleSubmit}>
    
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="profile_title" placeholder="Enter a title" onChange = {changeHandler} />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="profile_description" placeholder="Enter a Description" onChange = {changeHandler} as="textarea" rows={3} size="sm"/>
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" name="image" placeholder="Enter a Category" onChange = {changeHandler} />
        <Form.Label>Total Goal</Form.Label>
        <Form.Control type="text" name ="total_goal" placeholder="Enter new Category" onChange = {changeHandler} />

        <Button variant="primary" type="submit">
          Save
        </Button>

      </form>
      {state.products.map(item =>  {
        return (
          <table>
            <tbody>
              <FormList 
              product_title={item.product_title}
              description={item.description}
              categories={item.categories}
              price={item.price}/>
            </tbody>
          </table>
        )
      })}
      <Button onClick={(e) => setProductButton(true)}>Add Product</Button>
      <Modal isOpen={productButton} onRequestClose={() => setProductButton(false)}>
        <FormProducts onSave={save}/>
        <Button onClick={() =>setProductButton(false)}>Cancel</Button>
      </Modal>
    </div>
  )
}

  // const EMPTY = "EMPTY";
  // const SHOW = "SHOW";
  // const CREATE = "CREATE";
  // const LIST = "LIST";
  // const SAVING = 'SAVING';
  // const DELETING = 'DELETING';
  // const CONFIRM = 'CONFIRM';
  // const EDIT = "EDIT";
  // const ERROR_SAVING = "ERROR_SAVING";
  // const ERROR_DELETING = "ERROR_DELETING";
  
  // const { mode, transition, back } = useVisualMode(
  //   props.interview ? SHOW : EMPTY
  // );
  // return (
  //   <div>
  //     <FormComp/>
  //     {state.products.map(item =>  {
  //       return (
  //         <div>
  //           <p>{item.product_title}</p>
  //           <p>{item.description}</p>
  //           <p>{item.categories}</p>
  //           <p>{item.price}</p>
  //         </div>
  //       )
  //     })}

  //     {/* <p>{state[1].product_title}{state[1].description}</p> */}
  //     <Button onClick={(e) => setProductButton(true)}>Add Product</Button>
  //     {productButton && <FormProducts onSave={save}/>}
  //     {/* {mode === EMPTY && <Empty onAdd={() => transition('CREATE')} />} */}
  //     {/* {mode === CREATE && <FormProducts onSave={save}/> } */}
  //     {/* {mode === LIST && <FormList categories={state.categories}
  //                                 product_title={state.product_title}
  //                                 description={state.description}
  //                                 price ={state.price}/> } */}
  //   </div>

  // )



// const [error, setError] = useState("")
// function validate() {
//   if (name === "") {
//     setError("Student name cannot be blank");
//     return;
//   }
//   if (interviewer === null) {
//     setError("You must choose an interviewer");
//     return;
//   }
//   setError("");
//   props.onSave(name, interviewer);
// }