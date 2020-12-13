import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

export const Blog = ({ data }) => {
  const { deleteBlog, detailBlog } = useContext(BlogContext);
  // console.log('blogjs', data);
  return (
    <Card className='my-3'>
      <Card.Body>
        <h3>{data.judul} </h3>
        <Card.Subtitle className='mb-1 text-muted'>
          {data.author} || {data.email}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'> {data.createdAt} </Card.Subtitle>
        <Card.Text>{data.snippet} </Card.Text>
        <Link to={`/blogs/detailblog/${data._id}`} className='mr-3'>
          <Button variant='info'>Detail Post</Button>
        </Link>
        <Button variant='danger' onClick={() => deleteBlog(data._id)}>
          Hapus Post
        </Button>
      </Card.Body>
    </Card>
  );
};
