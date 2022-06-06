import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';

import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

const Auth = () => {
  const history = useHistory();

  useEffect(() => {
    if (getStoredAuthToken()) {
      history.push('/');
    }
  }, [history]);

  return (
    <div>
      <Route path="/authenticate/login" render={() => <Login />} />
      <Route path="/authenticate/logout" render={() => <Logout />} />
      <Route path="/authenticate/signup" render={() => <Signup />} />
    </div>
  );
};

export default Auth;
