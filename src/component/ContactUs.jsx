import React from "react";

export default function ContactUs({
  contactInfo,
  handleChange,
  handleSubmit,
  handleAdd,
}) {
  const { name, email, phone, message } = contactInfo;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <div>
        <label>Name</label> <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label> <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number</label> <br />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message</label> <br />
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button onClick={handleAdd}>Submit</button>
    </form>
  );
}