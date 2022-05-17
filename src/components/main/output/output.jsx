import React from "react";
import Header from "../../header/header";
//css
import './output.css'


export default function Output(props) {
  let btnId = ['All', 'Family', 'Friends','Colleague',]
  return(
    <div className="contact__main">
      <Header text="Contact list
      "/>

     <div className="contact__buttonbox">
       {btnId.map((id, key) => (
         <button key={key+8} className="contact__btn" type="button" onClick={props.sort} id={id}>{id}</button>
       ))}
      </div>

      <ul className="contact__list" id="id-list">
      {props.person.map((item, key) => (
          <li key={key} className="contact__item contact__Friends">
            <p className="contact__text">
              <span className="contact__cate">Full name</span>
              {item.name} {item.fullname}
            </p>
            <p className="contact__text">
              <span className="contact__cate">Number</span>
              {item.number}
            </p>
            <p className="contact__text">
              <span className="contact__cate">Category</span>
              {item.categores}
            </p>
            <p className="contact__text"><a className="contact__tel" href={`tel: +${item.number}`}>Call <i className="bx bxs-phone-call"></i></a></p>
          </li>
        ))}
      </ul>
    </div>
  )
}