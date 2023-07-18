const express = require('express');
const { dbConnect } = require('./config/database');
const router = require('./routes/users');
const app = express();
require('dotenv').config();
app.use(express.json());
const port = process.env.PORT || 3000;
//Connecting DB
dbConnect();

//Mounting Routes
app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});