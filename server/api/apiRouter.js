const express = require('express');
const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
})

module.exports = apiRouter;
