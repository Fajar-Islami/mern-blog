const router = require('express').Router();
const { getAllBlogs, getAllBlogsPagination, addBlog, deleteBlog, detailBlog, updateBlog } = require('../controller/blog');

router
  .route('/')
  //
  .get(getAllBlogsPagination)
  .post(addBlog);
router
  .route('/all')
  //
  .get(getAllBlogs);

router
  .route('/:id')
  //
  .delete(deleteBlog)
  .get(detailBlog)
  .post(updateBlog);
module.exports = router;
