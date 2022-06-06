import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs } from 'shared/components';

import { storeAuthToken } from 'shared/utils/authToken';

import { FormCont, FormHeading, FormElement, ActionButton, LinkButton } from './Styles';

const Login = () => {
  const history = useHistory();

  const [{ isWorking }, login] = useApi.post('/sessions/login');

  return (
    <Form
      initialValues={{
        username: '',
        password: '',
      }}
      validations={{
        username: Form.is.required(),
        password: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        try {
          const result = await login({ username: values.username, password: values.password });
          toast.success('Login Success');
          storeAuthToken(result.token);
          history.push('/');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <FormHeading>Login</FormHeading>

          <Form.Field.Input name="username" label="Name" />
          <Form.Field.Input type="password" name="password" label="Password" />

          <ActionButton type="submit" variant="primary" isWorking={isWorking}>
            Login
          </ActionButton>

          <LinkButton href="/authenticate/signup">Sign Up</LinkButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

export default Login;
