import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Text } from 'rebass';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import Spacer from '@poupachef/ui/spacer';
import Header from '@poupachef/components/Header';
import { setAuthentication } from '@poupachef/helpers/authentication';
import { SUPPLIER_LISTING_PATH } from '@poupachef/routing/routes/logged';
import api from '@poupachef/api';

import { Container } from './style';

interface ValuesI {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const history = useHistory();

  const handleGetToken = (values: ValuesI) => {
    const { username, password } = values;

    setAuthentication('123456');
    history.push(SUPPLIER_LISTING_PATH);

    api
      .post('/oauth/token', {
        grant_type: 'password',
        username,
        password,
        scope: 'web',
      })
      .then(({ data }) => {
        console.log(data);
      });
  };

  const initialValues: ValuesI = {
    username: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values: ValuesI) => {
      handleGetToken(values);
    },
  });

  return (
    <>
      <Header />
      <Container onSubmit={formik.handleSubmit}>
        <Text fontSize="32px" as="span" fontWeight="bold" pb="16px">
          Que bom ter você por aqui 👋
        </Text>
        <Text fontSize="16px" as="span" pb="32px">
          Entre com seu usuário e senha
        </Text>

        <TextField
          label="Username"
          name="username"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <Spacer space="32px" />

        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Spacer space="32px" />

        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
          ENTRAR
        </Button>
      </Container>
    </>
  );
};

export default Login;
