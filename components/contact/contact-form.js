import classes from "./contact-form.module.css";
import { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendMessageHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      alert("Please fill in all the fields");
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          alert("Message sent successfully");
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        } else {
          alert(`🛴 ${res.status} : ${res.statusText}`);
        }
      })
      .catch((err) => {
        alert("Something went wrong 🧎‍♀️ ");
      });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" ref={emailRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameRef} required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            id="message"
            rows="5"
            ref={messageRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
