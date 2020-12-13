import React, { useContext, useEffect } from 'react';
import { Blog } from '../components/Blog';
import { BlogContext } from '../context/BlogContext';
import PageTitle from '../components/PageTitle';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const { blogs, getAllBlogs, getBlogs, loading, totalBlogs } = useContext(BlogContext);
  useEffect(() => {
    getAllBlogs();
    getBlogs(1, 10);
    // Untuk menghilangkan warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <PageTitle judulHalaman='Home' />
      {loading ? (
        <Spinner animation='grow' />
      ) : (
        <>
          <h5>Total post: {totalBlogs} </h5>
          {blogs.map((blog, i) => {
            return <Blog data={blog} key={i} />;
          })}
        </>
      )}
    </>
  );
};

export default Home;
