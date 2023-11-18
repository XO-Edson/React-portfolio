import React from "react";

export const Contact = () => {
  return (
    <section className="contact">
      <div>
        <h1>CONTACT</h1>

        <p>Have a question or want to reach out?</p>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Enter email" />
          <input type="textbox" placeholder="Your Message" />
          <button>SEND</button>
        </form>
      </div>
    </section>
  );
};
