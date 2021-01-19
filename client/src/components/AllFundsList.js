import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import AllFundsListItem from './AllFundsListItem'
import "./AllFundsList.css";
const axios = require("axios").default;

export default function AllFundsList(props) {
  const [state, setState] = useState([])

  console.log("Yo testing the axios request for creator profiles")
  console.log(state)

  useEffect(() => {
    axios.get('http://localhost:3000/api/posts')
    .then((data) => {
      console.log("Yellow", data.data.posts)
      setState(data.data.posts)
    })
  },[]);

  console.log(state)

  return (
    <section className="all-funds">
      <h1>All Funds Page</h1>
      <div className="all-funds--searchbar">
        <h2>Search for a Fund</h2>
        <SearchIcon/>
        <TextField/>
      </div>
      <ul className="all-funds--items">
      {state.map((profile) => {
        return(
          <AllFundsListItem
          key={profile.id}
          title={profile.title}
          location={profile.location}
          description={profile.description}
          amount_raised={profile.amount_raised}
          total_goal={profile.total_goal}
          image={profile.image}
          />
        )
      })}
      </ul>
    </section>
  );
}