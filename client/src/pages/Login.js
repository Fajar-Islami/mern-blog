import React from 'react';
import FormAuth from '../components/FormAuth';
import { Container } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Container>
        <FormAuth judul='Login Akun' status='login' />
      </Container>
    </>
  );
};

export default Login;
