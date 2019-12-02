import React, { useState } from 'react';

export const RegisterForm = ({ client }) => {
  const [state, setState] = useState(client.RegisterFormInitialState());

  const handleChange = (e) => {
    e.persist();
    return setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitAttendance = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      body: JSON.stringify(state),
    };
    return client
      .api('/attendances', options)
      .then(() => setState(client.RegisterFormInitialState()));
  };

  return (
    <section data-testid="register-form">
      <form onSubmit={submitAttendance} data-testid="form">
        <input
          type="text"
          aria-label="firstname"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          aria-label="lastname"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          aria-label="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
