import client from './client';
import { render, fireEvent, cleanup } from '@testing-library/react';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

beforeEach(() => {
  fetch.resetMocks();
});

console.error = jest.fn();

describe('the initial state checks', () => {
  it('RegisterForms initial `state`', () => {
    // Arrange
    const { firstName, lastName, email } = client.RegisterFormInitialState();

    // Act

    // Assert
    expect(firstName).toBe('');
    expect(lastName).toBe('');
    expect(email).toBe('');
  });
});

describe('mock API calls', () => {
  it('should return expected response data back.', () => {
    // Arrange
    fetch.mockResponses([JSON.stringify([{ id: 1 }])]);
    const onResponse = jest.fn();
    const onError = jest.fn();
    // Act
    // Assert
    return client
      .api('/attendances', { method: 'POST' })
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0][0]).toEqual({ id: 1 });
      });
  });

  it('should throw and error if response is an empty object', () => {
    // Arrange
    fetch.mockResponses([JSON.stringify({})]);
    const onResponse = jest.fn();
    const onError = jest.fn();
    // Act
    // Assert
    return client
      .api('/attendances', { method: 'POST' })
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalled();
      });
  });
});
