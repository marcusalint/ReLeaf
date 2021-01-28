import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import SearchIcon from '@material-ui/icons/Search';
import AllFundsListItem from './AllFundsListItem';
import BackToTop from './BackToTop';
import { TweenMax, Power2 } from 'gsap';
import "./AllFundsList.css";
const axios = require("axios").default;
export default function AllFundsList(props) {
  const [users, setUsers] = useState([]);
  const [profiles, setProfile] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let bannerAnimate = useRef(null);
  let searchBarAnimate = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/creatorProfile')
    .then((res) => {
      setProfile(res.data.posts)
    })
  },[]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
    .then((data) => {
      setUsers(data.data.users)
    })
  },[]);
  useEffect(() => {
    TweenMax.fromTo(bannerAnimate, 1.2, {opacity: 0}, {opacity: 0.9, ease: Power2.easeInOut})
    TweenMax.fromTo(searchBarAnimate, 1, {opacity: 0}, {opacity: 0.7, ease: Power2.easeInOut, delay: 1})
  }, []);

  const filterSearch = () => {
    let results = [];
    if (searchTerm === "") {
      return profiles;
    }
    let userResults = users.filter((user) => {
      if (user.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        let profileResults = profiles.filter((p) => {
          return p.user_id === user.id;
        })
        results = [...results, ...profileResults];
      }
      if (user.location.toLowerCase().includes(searchTerm.toLowerCase())) {
        let locationResults = profiles.filter((p) => {
          return p.user_id === user.id;
        })
        results = [...results, ...locationResults];
      }
    })
    return results;
  }
  return ( users && //make sure users state is set before rendering
    <section className="all-funds">
      <header>
        <div className="all-funds--banner">
          <div className="all-funds--banner-img" ref={el => {bannerAnimate = el}}></div>
        </div>
      </header>
      <div className="all-funds--searchbar" ref={el => {searchBarAnimate = el}}>
        <div className="all-funds--searchbar-content">
          <h4>Find a Campaign</h4>
          <span>
            <SearchIcon className="magnify-glass"/>
            <input 
            className="textfield" 
            id="outlined-basic"
            variant="outlined"
            placeholder="Search by name or location" 
            onChange={event => {setSearchTerm(event.target.value)}}>
            </input> 
          </span>
        </div>
      </div>
      {searchTerm &&
      <h4 className="search-results">Search Results for "{searchTerm}"</h4>}
      <ul className="all-funds--items">
        {
        filterSearch().map((val,key) => {
          return(
             <Link to={{
              pathname: '/campaign',
              state: {
                id: val.id
              }
            }} style={{textDecoration: 'none'}}>
            <AllFundsListItem
            key={val.id}
            title={val.title.substring(0,50)}
            location={val.location}
            description={val.description.substring(0,100)+"..."}
            amount_raised={val.amount_raised}
            total_goal={val.total_goal}
            image={val.image}
            />
          </Link>
            )
          })}
        </ul>
        <BackToTop showBelow={250}/>
    </section>
  );
}