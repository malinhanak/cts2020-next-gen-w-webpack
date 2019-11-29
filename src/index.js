import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Test = styled.div`
  background-color: yellow;
`;

const App = () => {
  return <Test>Hello React,Webpack 4 & Babel 7!</Test>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
