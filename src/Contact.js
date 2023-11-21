import React from "react";

export const Contact = ({ data, setData }) => {
  return (
<<<<<<< HEAD
    <div className="contact-container">
      <section className="contact" id="contact">
        <h1>CONTACT </h1>
        <div className="form-container">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>Have a question or want to reach out?</p>
            <p>email: example@gmail.com</p>
          </div>

          <form action="post">
            <div className="personal-info">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={data.name}
                onChange={(e) =>
                  setData((prevData) => ({ ...prevData, name: e.target.value }))
                }
              />
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <textarea
              rows="10"
              type="text"
              placeholder="Your Message"
              id="message"
              name="message"
              value={data.message}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  message: e.target.value,
                }))
              }
            ></textarea>

            <button>SEND</button>
          </form>
        </div>
      </section>
    </div>
=======
    <section className="contact">
      <h1>CONTACT </h1>
      <div className="form-container">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Have a question or want to reach out?</p>
          <p>email: example@gmail.com</p>
        </div>

        <form action="post">
          <div className="personal-info">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={data.name}
              onChange={(e) =>
                setData((prevData) => ({ ...prevData, name: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) =>
                setData((prevData) => ({ ...prevData, email: e.target.value }))
              }
            />
          </div>

          <textarea
            rows="10"
            type="text"
            placeholder="Your Message"
            id="message"
            name="message"
            value={data.message}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                message: e.target.value,
              }))
            }
          ></textarea>

          <button>SEND</button>
        </form>
      </div>
    </section>
>>>>>>> 518f247626ee9d63c85c5789b50c6982c3446a58
  );
};
