import React, { useEffect } from 'react';

import { RegisterForm } from './RegisterForm';
import client from '../client';
import news from '../data/news';
/*

This is Home.js, for now this page should be responsible for displaying a
H1 inside a main tag.

TODO: Create a functional component
  * At the time being this component takes no props.
  * It should contain a main tag
  * The main tag should contain a H1 with the text CTS2020.
  * The H1 should have a data-testid of page-title.

TODO: Add reference to form component
*/

export const Home = () => {
  useEffect(() => {
    //console.log('data:', news);
  }, []);

  return (
    <main data-testid="main-content">
      <h1>CTS 2020</h1>
      <h4>Anmäl dig</h4>
      <RegisterForm client={client} />
    </main>
  );
};

export default Home;
