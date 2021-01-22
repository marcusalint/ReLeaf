import React, { useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap";
// import ProgressBar from './progressbar/index.js'
import "./AllFundsListItem.css";

export default function AllFundsListItem(props) {
  let itemAnimate = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      itemAnimate,
      1,
      { opacity: 0 },
      { opacity: 1, ease: Power2.easeInOut, delay: 1 }
    );
  }, []);

  return (
    <li
      className="fund"
      key={props.id}
      ref={(el) => {
        itemAnimate = el;
      }}
    >
      <img className="fund--img" src={props.image} alt={props.title} />
      <div className="fund--container">
        <p>{props.location}</p>
        <h5>
          <strong>{props.title}</strong>
        </h5>
        <p>{props.description}</p>

        <span>
          <strong>{props.amount_raised}</strong> raised of {props.total_goal}
        </span>
      </div>
    </li>
  );
}
