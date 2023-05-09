const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//dotenv config
dotenv.config();

//db connection
connectDB();
//rest object
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
// app.get('/', (req, res) => {
//     res.status(200).send({
//         message: "server is running",
//     })
// })
app.use('/api/v1/user', require('./routes/userRoutes'));

//listen port

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is running in ${process.env.NODE_MODE} mode on port ${port}`.cyan.bold);
}
)