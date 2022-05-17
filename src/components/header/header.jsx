import React from "react";
//css
import './header.css'

export default function Header(props) {
  return(
    <div className="contact__header">
      <h1 className="contact__title">{props.text}</h1>
    </div>

  )
}