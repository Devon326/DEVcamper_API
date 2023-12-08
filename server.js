const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Routes
const bootcamps = require('./routes/bootcamps');
const users = require('./Routes/users');
const post = require('./Routes/post');


// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/users', users);
app.use('/api/v1/posts', post);

const PORT = process.env.PORT || 5000;

//change the route at package.json
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));