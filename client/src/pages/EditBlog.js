import React, { useState, useContext, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { Form, Card, Button } from 'react-bootstrap';
import { BlogContext } from '../context/BlogContext';
import { useHistory, useParams } from 'react-router-dom';

const EditBlog = () => {
  let history = useHistory();
  const { blogs1, detailBlog } = useContext(BlogContext);
  let { id } = useParams();

  const [judul, setJudul] = useState('');
  const [snippet, setSnippet] = useState('');
  const [isi, setIsi] = useState('');

  useEffect(() => {
    detailBlog(id);

    console.log('judul: ', judul);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(blogs1);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newBlog = {
        _id: blogs1._id,
        email: blogs1.email,
        author: blogs1.author,
        judul,
        snippet,
        isi,
      };
      console.log(newBlog);
      setJudul('');
      setSnippet('');
      setIsi('');
      // addBlog(newBlog);
      // history.push('/');
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <>
      <Card body>
        {/* <h3>{blogs1.judul} </h3> */}
        <PageTitle judulHalaman='Buat Blog Baru' />
        <Form className='mt-4' noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId='validationJudulBlog'>
            <Form.Label>Judul blog</Form.Label>
            <Form.Control type='text' placeholder='Masukan Judul Blog' defaultValue={blogs1.judul} onChange={(e) => setJudul(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan Judul Blog</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput2'>
            <Form.Label>Snippet blog</Form.Label>
            <Form.Control type='text' placeholder='Masukan Snippet Blog' defaultValue={blogs1.snippet} onChange={(e) => setSnippet(e.target.value)} required />
            <Form.Control.Feedback type='invalid'>Masukan Snippet Blog</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Isi blog</Form.Label>
            <Form.Control as='textarea' rows={3} alue={blogs1.isi} onSubmit={(e) => setIsi(e.target.value)} onChange={(e) => setIsi(e.target.value)} required />
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

export default EditBlog;
