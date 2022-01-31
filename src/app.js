const express = require('express');

const profileRouter = require('./routers/profile');

const app = express();

app.use(express.json());
app.use(profileRouter);

module.exports = app;
