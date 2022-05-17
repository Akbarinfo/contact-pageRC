import React from "react";
import Header from "../../header/header";
//css
import './added.css'

export default function Added(props) {
  return(
    <div className="contact__main">
      <Header text="Contact Add
      "/>
      <div className="contact__boxinput">
        <form className="contact__form" onSubmit={props.onSubmit} id="form">
          <label className="contact__label" htmlFor="name">
            <span className="contact__span">First name</span>
            <input className="contact__input" onChange={props.types} type="text" id="name" placeholder="Name" required />
          </label>
          <label className="contact__label" htmlFor="fname">
            <span className="contact__span">Last name</span>
            <input className="contact__input" onChange={props.types} type="text" id="fname" placeholder="FName" required />
          </label>
          <label className="contact__label" htmlFor="number">
            <span className="contact__span">Number</span>
            <input className="contact__input" onChange={props.types} type="number" id="number" defaultValue={+998} required />
          </label>
          <label className="contact__label" htmlFor="select">
            <span className="contact__span">Category</span>
            <select className="contact__select" onChange={props.types} name="contact-cat" id="contact-cat">
              <option selected>Category</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="colleague">Colleague</option>
            </select>
          </label>
          <button className="contact__submit" type="submit">Add Contact</button>
        </form>
      </div>
    </div>

  )
}