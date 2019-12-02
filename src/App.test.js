import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { Loading } from './components/Loading';
import { theme } from './global-layouts/theme';

test('<App />', () => {
  // Arrange
  const { debug, getByText, getByTestId } = render(
    <ThemeProvider theme={theme}>
      <App fallback={null} />
    </ThemeProvider>,
    { wrapper: MemoryRouter },
  );
  const h1 = getByText('CTS 2020');
  const main = getByTestId('main-content');

  // Act

  // Assert
  expect(h1).toBeTruthy();
  expect(main).toBeTruthy();
});
