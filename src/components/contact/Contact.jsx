
import { useState } from "react";
import "./contact.scss";


const Contact = () => {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=> {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
    <div className="left">
    <img src="assets/torii.jpg" alt="contact"></img>


    </div>
    <div className="right">
    <h2>Contact.</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="E-mail" name="user_email"/>
      <textarea placeholder="Message" name="message"></textarea>
      <button>Send</button>
      {message && <span>Thanks, We'll reply soon!</span>}

      </form>  

    </div>
      
    </div>
  )
}

export default Contact
