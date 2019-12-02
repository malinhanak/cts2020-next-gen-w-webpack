function RegisterFormInitialState() {
  return {
    firstName: '',
    lastName: '',
    email: '',
  };
}

const api = (path, options = null) => {
  // console.log('options', options);
  return fetch(`http://localhost:4000${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with ${res.status}`);
      }
      return res.json();
    })
    .then((response) => {
      if (!Array.isArray(response) && Object.keys(response).length === 0) {
        throw new Error('Empty Object');
      }
      return response;
    });
};

export default { RegisterFormInitialState, api };
