import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { removeStoredAuthToken } from 'shared/utils/authToken';

const Logout = () => {
  const history = useHistory();

  removeStoredAuthToken();
  history.push('/authenticate/login');

  return <div></div>;
};

export default Logout;
