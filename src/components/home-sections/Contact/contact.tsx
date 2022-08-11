import Head from "next/head";
import c from "./../../../styles/components.module.scss";
import contactStyle from "@styles/contact.module.scss";

const Contact = () => {
  return (
    <section id={contactStyle.contact}>
      <h2 className={contactStyle.heading}>
        <span className={contactStyle.code}>04.</span>
        <span>Contact</span>
      </h2>
      
      <h1 id={contactStyle.request}>Let us get in Touch!</h1>
      <p id={contactStyle.briefer}>
        I would love to chat with anyone who is interested in saying hello.
        <br /> So feel free to contact me!
      </p>
      <div id={contactStyle.buttonRow}>
        <a href="mailto:ungarmichael.mail@gmail.com">
          <button>Send a mail</button>
        </a>
        <button>More about me</button>
      </div>
    </section>
  );
};

export default Contact;
