import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { Loading } from './components/Loading';
import { theme } from './global-layouts/theme';

test('<App />', () => {
  // Arrange
  const { debug, getByText, getByTestId, container } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    { wrapper: MemoryRouter },
  );
  const main = getByTestId('main-content');
  const svgLoad = container.getElementsByTagName('svg');
  // Act

  // Assert
  expect(main).toBeTruthy();
  expect(svgLoad[0]).toBeTruthy();
});
