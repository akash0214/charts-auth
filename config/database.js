const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

exports.dbConnect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("DB connected successfully !!");
        })
        .catch((err) => {
            console.log("Couldn't connect to DB !!");
            console.error(err);
            process.exit(1);
        })
};