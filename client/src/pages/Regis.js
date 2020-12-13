import React from 'react';
import FormAuth from '../components/FormAuth';
import { Container } from 'react-bootstrap';

const Regis = () => {
  return (
    <>
      <Container>
        <FormAuth judul='Daftar Akun' status='daftar' />
      </Container>
    </>
  );
};

export default Regis;
