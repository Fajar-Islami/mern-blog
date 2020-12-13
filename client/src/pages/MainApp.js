import React, { useContext, useEffect } from 'react';
import CompNavbar from '../components/CompNavbar';
import CompFooter from '../components/CompFooter';
import { BlogProvider, BlogContext } from '../context/BlogContext';
import RoutesMainApp from '../config/RoutesMainApp';
import { BrowserRouter as Router } from 'react-router-dom';
const MainApp = () => {
  // const { blogs, getBlogs } = useContext(BlogContext);

  // useEffect(() => {
  //   getBlogs();
  //   // Untuk menghilangkan warning
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <BlogProvider>
      <Router>
        <div style={{ minHeight: '100vh' }} className='container-fluid d-flex flex-column'>
          <div className='flex-grow-1'>
            <CompNavbar />
            <h1 className='my-4'>OUR's Blog</h1>
            <div className='content'>
              <RoutesMainApp />
            </div>
          </div>
          <CompFooter />
        </div>
      </Router>
    </BlogProvider>
  );
};

export default MainApp;
