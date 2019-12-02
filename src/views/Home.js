import React from 'react';

import { RegisterForm } from './RegisterForm';
import client from '../client';

export const Home = () => {
  return (
    <main data-testid="main-content">
      <h1>CTS 2020</h1>
      <h4>Anmäl dig</h4>
      <RegisterForm client={client} />
    </main>
  );
};

export default Home;
