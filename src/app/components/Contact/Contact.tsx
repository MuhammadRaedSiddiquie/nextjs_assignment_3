import React from 'react'
import Style from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink} from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <section className={Style.section} id='contact'>
      <div id="myForm" className={Style.skillsform}>
        <h2>Contact Form</h2>
        <div className="form">
          <form action="">
            <input id="myName" type="text" placeholder="Enter Your Name*" />
            <input id="myEmail" type="text" placeholder="Enter Your Email*" />
            <input id="mySub" type="text" placeholder=" Subject" />
            <textarea name="" id="myMessage" placeholder="Message"></textarea>
            <label className={Style.fileicon}>
              <input type="file" />
              <span><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></span>
              Attach File
            </label>
            <input type="submit" />

          </form>
        </div>
      </div>




    </section>
  )
}

export default Contact
