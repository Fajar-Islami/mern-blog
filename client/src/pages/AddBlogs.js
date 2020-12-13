import React, { useState, useContext } from 'react';
import PageTitle from '../components/PageTitle';
import { Form, Card, Button } from 'react-bootstrap';
import { BlogContext } from '../context/BlogContext';
import { useHistory } from 'react-router-dom';

const AddBlogs = () => {
  let history = useHistory();

  const { addBlog } = useContext(BlogContext);

  const [judul, setJudul] = useState('');
  const [snippet, setSnippet] = useState('');
  const [isi, setIsi] = useState('');

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newBlog = {
        judul,
        snippet,
        isi,
      };
      // console.log(newBlog);
      setJudul('');
      setSnippet('');
      setIsi('');
      addBlog(newBlog);
      history.push('/');
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <>
      <Card body>
        <PageTitle judulHalaman='Buat Blog Baru' />
        <Form className='mt-4' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId='validationJudulBlog'>
            <Form.Label>Judul blog</Form.Label>
            <Form.Control type='text' placeholder='Masukan Judul Blog' value={judul} onChange={(e) => setJudul(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan Judul Blog</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput2'>
            <Form.Label>Snippet blog</Form.Label>
            <Form.Control type='text' placeholder='Masukan Snippet Blog' value={snippet} onChange={(e) => setSnippet(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan Snippet Blog</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Isi blog</Form.Label>
            <Form.Control as='textarea' rows={3} value={isi} onChange={(e) => setIsi(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan Isi Blog</Form.Control.Feedback>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AddBlogs;
