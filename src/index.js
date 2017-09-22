/* eslint-disable no-console */

import express from 'express';

import constants from './config/constants';

const app = express();

app.listen(constants.PORT, () => {
  console.log(`Server is running on port: ${constants.PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
