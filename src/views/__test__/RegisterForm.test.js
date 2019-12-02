import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { RegisterForm } from '../RegisterForm';
import client from '../../client';

describe('<App />', () => {
  afterEach(cleanup);

  it('should render with a section wrapping the form', () => {
    // Arrange
    const { getByTestId } = render(<RegisterForm client={client} />);
    const section = getByTestId('register-form');

    // Act

    // Assert
    expect(section).toBeTruthy();
  });

  it('should start with a empty string in all inputs', () => {
    // Arrange
    const { getByLabelText } = render(<RegisterForm client={client} />);
    const inputFirstName = getByLabelText('firstname');
    const inputLastName = getByLabelText('lastname');
    const inputEmail = getByLabelText('email');

    // Act

    // Assert
    expect(inputFirstName.value).toBe('');
    expect(inputLastName.value).toBe('');
    expect(inputEmail.value).toBe('');
  });

  it('onChange event should change input value for firstName', () => {
    // Arrange
    const mockClient = jest.fn();
    mockClient.RegisterFormInitialState = () => {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    };
    mockClient.api = jest.fn();
    const { getByLabelText } = render(<RegisterForm client={mockClient} />);
    const inputFirstName = getByLabelText('firstname');
    // Act
    fireEvent.change(inputFirstName, { target: { value: 'Malin' } });
    // Assert
    expect(inputFirstName.value).toBe('Malin');
  });
  it('onChange event should change input value for lastname', () => {
    // Arrange
    const mockClient = jest.fn();
    mockClient.RegisterFormInitialState = () => {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    };
    mockClient.api = jest.fn();
    const { getByLabelText } = render(<RegisterForm client={mockClient} />);
    const inputLastName = getByLabelText('lastname');
    // Act
    fireEvent.change(inputLastName, { target: { value: 'Hanak' } });
    // Assert
    expect(inputLastName.value).toBe('Hanak');
  });
  it('onChange event should change input value email', () => {
    // Arrange
    const mockClient = jest.fn();
    mockClient.RegisterFormInitialState = () => {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    };
    mockClient.api = jest.fn();
    const { getByLabelText } = render(<RegisterForm client={mockClient} />);
    const inputEmail = getByLabelText('email');
    // Act
    fireEvent.change(inputEmail, { target: { value: 'malin.hanak@cygni.se' } });
    // Assert
    expect(inputEmail.value).toBe('malin.hanak@cygni.se');
  });

  it.skip('should submit form', () => {
    // Arrange
    const mockClient = jest.fn();
    mockClient.RegisterFormInitialState = () => {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    };
    mockClient.api = jest.fn();
    const { container } = render(<RegisterForm client={mockClient} />);
    const form = container.getElementsByTagName('form')[0];
    // Act
    fireEvent.submit(form);
    // Assert
    expect(mockClient.api).toHaveBeenCalled();
  });
});
