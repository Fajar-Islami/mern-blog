import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddBlogs from '../pages/AddBlogs';
import About from '../pages/About';
import DetailBlog from '../pages/DetailBlog';
import EditBlog from '../pages/EditBlog';

const RoutesMainApp = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/blogs' exact component={Home} />
      <Route path='/blogs/home' exact component={Home} />
      <Route path='/blogs/about' exact component={About} />
      <Route path='/blogs/addblog' exact component={AddBlogs} />
      <Route path='/blogs/detailblog/:id' exact component={DetailBlog} />
      <Route path='/blogs/editblog/:id' exact component={EditBlog} />
    </Switch>
  );
};

export default RoutesMainApp;
