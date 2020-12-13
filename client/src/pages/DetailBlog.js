import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Spinner } from 'react-bootstrap';
const DetailBlog = () => {
  const { blogs1, detailBlog } = useContext(BlogContext);
  let { id } = useParams();

  useEffect(() => {
    // detailBlog(id);
    //   return () => {
    //     getBlogs(1, 10);
    //   };
    detailBlog(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(detail);
  // console.log(blogs);
  // if (blogs.length < 0) {
  // }
  return (
    <>
      {blogs1.length < 1 ? (
        <Spinner animation='grow' />
      ) : (
        <Card className='my-3'>
          <Card.Body>
            <h3>{blogs1.judul} </h3>
            <Card.Subtitle className='mb-1 text-muted'>
              {blogs1.author} || {blogs1.email}
            </Card.Subtitle>
            <Card.Subtitle className='mb-2 text-muted'> {blogs1.createdAt} </Card.Subtitle>
            <Card.Text>{blogs1.snippet} </Card.Text>
            <Card.Text>{blogs1.isi} </Card.Text>
            <Link to={`/blogs/editblog/${blogs1._id}`} className='mr-3'>
              <Button variant='warning'>Edit Post</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default DetailBlog;
