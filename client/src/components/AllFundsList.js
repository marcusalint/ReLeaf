import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import AllFundsListItem from './AllFundsListItem'
import "./AllFundsList.css";

const creator_profiles = [
  {"id":1,
  "title":"Hey! Come back here! You big-a monkey!",
  "description":"In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.",
  "image":"https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "amount_raised":4000,"total_goal":10000,
  "total_goal_reached":false,
  "user_id":1,
  "created_at":"2021-01-19T01:27:57.641Z"},
  {"id":2,
    "title":"Money needed for earthquake victims",
    "description":"In vel quam orci. Suspendisse potenti. Curabitur eget aliquam ex. Praesent ullamcorper scelerisque egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum viverra magna, ut gravida massa lacinia at. Fusce blandit quis lectus ac iaculis.",
    "image":"https://images.pexels.com/photos/7390/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "amount_raised":10000,
    "total_goal":10000,
    "total_goal_reached":true,
    "user_id":4,
    "created_at":"2021-01-19T01:27:57.641Z"}
]

export default function AllFundsList(props) {
  // const [state, setState] = useState("")
  return (
    <section className="all__funds">
      <h1>All Funds Page</h1>
      <div className="all__funds--searchbar">
      <SearchIcon/>
      <TextField/>
      </div>
      <ul className="all__funds--items">
        {/* <AllFundsListItem name="samantha"/> */}
      {creator_profiles.map((profile) => {
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