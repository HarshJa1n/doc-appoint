const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // To avoid warnings in the console
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.bgRed.white);

    }
}

module.exports = connectDB;