const express = require('express');
const connectDB = require('./db');
const bookRoutes = require('./routes/books');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/books', bookRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Book Service running on port ${PORT}`));
