import React from "react";
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import AllFundsListItem from './components/AllFundsListItem'

export default function AllFundsList(props) {
  return (
    <section className="all_funds">
      <h1>All Funds Page</h1>
      <div>
      <SearchIcon/>
      <TextField/>
      </div>
      <ul>
        <AllFundsListItem/>
      </ul>
    </section>
  );
}