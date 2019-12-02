import React from 'react';
import { render } from '@testing-library/react';

import { Home } from '../Home';

test('<App />', () => {
  // Arrange
  const { getByText } = render(<Home />);
  const h4 = getByText('Anmäl dig');

  // Act

  // Assert
  expect(h4).toBeTruthy();
});
