import React from "react";
import Button from '@material-ui/core/Button';

export default function Home(props) {
  return(
    <div>
      <h2>This is the Home Page here</h2>
      <Button 
      variant="contained" 
      color="primary" 
      href="#contained-buttons">
        Create a Fund
      </Button>
      <Button 
      variant="contained" 
      color="primary" 
      href="#contained-buttons">
        Contribute to a Fund
      </Button>
    </div>
  )
}