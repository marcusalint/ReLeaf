import React from 'react'
import "./SidePanel.scss";



const SidePanel = () => {
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="https://placeimg.com/640/640/people"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">

        </nav>
      </section>
      <section className="schedule">

      </section>
    </main>
  )
}

export default SidePanel
