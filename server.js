const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Connect DB
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
const blogRoutes = require('./routes/blog');
const userRoutes = require('./routes/user');

app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/blogs/auth', userRoutes);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`));
