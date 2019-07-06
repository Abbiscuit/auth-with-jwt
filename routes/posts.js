const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.send(req.user);
  // res.json({
  //   posts: {
  //     title: 'my first post',
  //     description: 'You cannot see this UNLESS you have ID'
  //   }
  // });
});

module.exports = router;
