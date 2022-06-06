import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs } from 'shared/components';

import { storeAuthToken } from 'shared/utils/authToken';

import { FormCont, FormHeading, FormElement, ActionButton } from './Styles';

const Signup = () => {
  const history = useHistory();

  const [{ isWorking }, register] = useApi.post('/sessions');

  return (
    <Form
      initialValues={{
        username: '',
        password: '',
        user_info: {
          email: '',
          first_name: '',
          last_name: '',
          profile_image: '',
        },
      }}
      validations={{
        username: Form.is.required(),
        password: Form.is.required(),
        email: Form.is.required(),
        first_name: Form.is.required(),
        last_name: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        try {
          const result = await register({
            username: values.username,
            password: values.password,
            user_info: {
              email: values.email,
              first_name: values.first_name,
              last_name: values.last_name,
              profile_image: '',
            },
          });
          toast.success('Register Success');
          history.push('/authenticate/login');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <FormHeading>Sign Up</FormHeading>

          <Form.Field.Input name="username" label="Name" />
          <Form.Field.Input type="password" name="password" label="Password" />
          <Form.Field.Input name="email" label="Email" />
          <Form.Field.Input name="first_name" label="FirstName" />
          <Form.Field.Input name="last_name" label="LastName" />

          <ActionButton type="submit" variant="primary" isWorking={isWorking}>
            Sign Up
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

export default Signup;
