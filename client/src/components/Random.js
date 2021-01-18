import React from "react";
import Button from '@material-ui/core/Button';

export default function Random(props) {
  return(
    <div>
      <h2>Random Page</h2>
      <Button 
      variant="contained" 
      color="primary" 
      href="/home">
        Random Page
      </Button>
      <Button 
      variant="contained" 
      color="primary" 
      href="#contained-buttons">
        Random Page
      </Button>
    </div>
  )
}