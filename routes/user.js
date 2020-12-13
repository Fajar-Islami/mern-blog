const { addUser, getUser, loginUser } = require('../controller/user');

const router = require('express').Router();

router
  .route('/regis')
  //
  .get(getUser)
  .post(addUser);

router
  .route('/login')
  // //
  .post(loginUser);
// .post()

module.exports = router;
