import React, { useState } from "react";

const Child = ({ state }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(data);
  };
  return (
    <div className="">
      <div className="">
        <form className="form" onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="nfnameame"
              id="fname"
              onBlur={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              onBlur={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="name">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              onBlur={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              onBlur={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Child;
