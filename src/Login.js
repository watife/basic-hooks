import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: ""
};

export default function Login() {
  const [loginForm, onLoginFormChange] = useState(initialState);
  const [user, setUser] = useState(null);

  const handleChange = event => {
    onLoginFormChange({
      ...loginForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setUser(loginForm);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </>
  );
}
