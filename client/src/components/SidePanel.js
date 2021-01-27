import React from 'react'
import "./SidePanel.scss";

const SidePanel = (props) => {
  const profile = [...props.profile];
  console.log(profile,"Poop");
  console.log(Object.keys(props.profile[0]));
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="https://placeimg.com/640/640/people"
          alt="Interview Scheduler"
        />
        <p>{props.goal}</p>
        <p>{props.profile[0].title}</p>
        <p>{props.profile[0].description}</p>
        <nav className="sidebar__menu">

        </nav>
      </section>
      <section className="schedule">

      </section>
    </main>
  )
}

export default SidePanel
