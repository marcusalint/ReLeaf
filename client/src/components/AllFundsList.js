import React from "react";
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
// import AllFundsListItem from './components/AllFundsListItem'

export default function AllFundsList(props) {
  return (
    <div>
      <h1>All Funds Page</h1>
      <div>
      <SearchIcon/>
      <TextField/>
      </div>
      
    </div>
  );
}