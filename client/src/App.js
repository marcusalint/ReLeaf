// import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from './components/Home';

export default function App(props) {
  return (
    <div className="App" >
      <h1> Releaf </h1>
      <Home/>
    </div >
  );
}

// const useApplicationData = require("./hooks/useApplicationData")
// import useApplicationData from "./hooks/useApplicationData"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// const App = () => {
// //   const {
// //       state,
// //   } = useApplicationData;
// //     const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
// // )   );
//   return (
//     <div className="App" >
//       <h1> Releaf </h1>
//       <Home/>
//     </div >
//   );
//   // return (
//   //   <h1>Hello</h1>
//   // )
// };
// export default App;