import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom'

import FormProducts from './FormProducts';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import FormList from './FormList';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import "./Form.css";

Modal.setAppElement('div')

export default function CreateFundPage(props) {
  const [productButton, setProductButton] = useState(false);
  const [redirect, setRedirect] = useState(false)
  const [campaignId, setCampaignId] = useState(0)
  const [state, setState] = useState(
    { profile_title: "",
      profile_description: "",
      image: "",
      total_goal: "",
      products :[]
    })

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
    setProductButton(false)
    setState(prev => ({ ...prev, products: temp}));
    console.log(state)
    
  }   
                                      
  function changeHandler(e) {
    setState({...state, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    console.log('Do something after counter has changed', campaignId);
    if(campaignId > 0){
 setRedirect(true);
    }
   
 }, [campaignId]);
 
   function handleSubmit(e) {
     
   e.preventDefault();

  //  console.log(campaignId, "This is test");
   
  //  setProductButton(true, () => {console.log(productButton, "STATE OF PRODUCT BUTTON")});

   axios
     .post('http://localhost:3000/api/creatorProfileUpdate', {state})
     .then(response => {
      const id_value = response.data.rows[0].id;
      // console.log(response.data.rows[0].id, "this is the id")
      setCampaignId(id_value)
      // console.log(campaignId, "INSIDE CAMPAIGN ID");
      
      //  if (redirect) {
      //   return <Redirect to='/campaign' />;
      // }
     
       
     
     })
     .catch(error => {
       console.log(error)
     })
console.log(campaignId, "OUTSIDE")
 }
  return (
    <div className="form-style-5">
      <form >
    
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="profile_title" placeholder="Enter a title" as="input" onChange = {changeHandler} 
        defaultValue="Forest Fire Destroyed My Home" autoComplete='off'/>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="profile_description" placeholder="Enter a Description" onChange = {changeHandler} as="textarea" rows={3} size="sm"
        defaultValue="Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui" autoComplete='off'/>
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" name="image" defaultValue="https://images.pexels.com/photos/417070/pexels-photo-417070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" placeholder="Enter a Category" onChange = {changeHandler} autoComplete='off'/>
        <Form.Label>Total Goal</Form.Label>
        <Form.Control type="text" name ="total_goal" placeholder="Enter new Category" as="input" defaultValue="20000" onChange = {changeHandler} autoComplete='off'/>


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
      <button className="btn-add"onClick={(e) => setProductButton(true)}>Add Product</button>
      <Modal isOpen={productButton} onRequestClose={() => setProductButton(false)}>
        <FormProducts onSave={save}/>
        <button className="btn-cancel" onClick={() =>setProductButton(false)}>Cancel</button>
      </Modal>
      <button className='btn-save' onClick ={handleSubmit} variant="primary" type="submit">
          Save
      </button>
      { redirect && <Redirect to={{
              pathname: '/campaign',
              state: {
                id: campaignId
              }
            }}/>}
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