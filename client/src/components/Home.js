// import React from "react";
// import Button from '@material-ui/core/Button';

// export default function Home(props) {
//   return(
//     <div>
//       <h2>This is the Home Page here</h2>
//       <Button 
//       variant="contained" 
//       color="primary" 
//       href="/home">
//         Create a Fund
//       </Button>
//       <Button 
//       variant="contained" 
//       color="primary" 
//       href="/random">
//         Contribute to a Fund
//       </Button>
//     </div>
//   )
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
