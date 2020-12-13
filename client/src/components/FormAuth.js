import React, { useState, useContext } from 'react';
import PageTitle from '../components/PageTitle';
import { Form, Card, Button } from 'react-bootstrap';
import { BlogContext } from '../context/BlogContext';
import { useHistory } from 'react-router-dom';

const FormAuth = ({ judul, status }) => {
  let history = useHistory();

  const [user, setuser] = useState('');
  const [password, setpassword] = useState('');

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newBlog = {
        user,
        password,
      };
      console.log(newBlog);
      setuser('');
      setpassword('');
      // addBlog(newBlog);
      // history.push('/');
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <>
      <Card body>
        <PageTitle judulHalaman={judul} />
        <Form className='mt-4' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId='validationJudulBlog'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Masukan Username' value={user} onChange={(e) => setuser(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan Username</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput2'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Masukan Password' value={password} onChange={(e) => setpassword(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan password</Form.Control.Feedback>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default FormAuth;
