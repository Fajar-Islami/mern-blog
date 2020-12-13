import React, { createContext, useReducer } from 'react';
import BlogReducer from './BlogReducer';
import axios from 'axios';

// Initial State
const initialState = {
  blogs: [],
  blogs1: [],
  error: null,
  loading: true,
  totalBlogs: '',
};

// Context
export const BlogContext = createContext(initialState);

// Provider
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogReducer, initialState);

  async function getAllBlogs() {
    const res = await axios.get(`/api/v1/blogs/all`);
    try {
      let totalData = res.data.data;
      dispatch({
        type: 'GET_ALL_BLOGS',
        payload: totalData.length,
      });
    } catch (err) {
      dispatch({
        // type: 'BLOG_ERROR',
        // // payload: err.response.data.error,
        // payload: err,
        type: 'BLOG_LEAVE',
        // payload: err.response.data.error,
        payload: err,
      });
    }
  }
  async function getBlogs(page, perpage) {
    const res = await axios.get(`/api/v1/blogs?page=${page}&perPage=${perpage}`);
    // const res = await axios.get(`/api/v1/blogs`);
    try {
      // console.log(res.data.data);
      dispatch({
        type: 'GET_BLOGS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        // type: 'BLOG_ERROR',
        // // payload: err.response.data.error,
        // payload: err,
        type: 'BLOG_LEAVE',
        // payload: err.response.data.error,
        payload: err,
      });
    }
  }
  async function detailBlog(id) {
    const res = await axios.get(`/api/v1/blogs/${id}`);

    try {
      // console.log(res.data.data);
      dispatch({
        type: 'DETAIL_BLOG',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'BLOG_ERROR',
        payload: err.response.data.error,
      });
    }
  }
  async function addBlog(blog) {
    // Klo sending data butuh header
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/blogs', blog, config);
      dispatch({
        type: 'ADD_BLOG',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'BLOG_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deleteBlog(id) {
    try {
      await axios.delete(`/api/v1/blogs/${id}`);
      dispatch({
        type: 'DELETE_BLOG',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'BLOG_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  return <BlogContext.Provider value={{ blogs: state.blogs, blogs1: state.blogs1, error: state.error, loading: state.loading, totalBlogs: state.totalBlogs, getAllBlogs, getBlogs, addBlog, detailBlog, deleteBlog }}> {children} </BlogContext.Provider>;
};
