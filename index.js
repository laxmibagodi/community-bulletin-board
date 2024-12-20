import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoutes from './routes/AuthRoutes.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'

//routes

const app = express();

// middlewares
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

dotenv.config()

mongoose
.connect(
    process.env.MONGO_DB)
.then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`)))
.catch((error) => console.log(error));

//usage of routes
app.use('/auth', AuthRoutes)
app.use('/user', UserRoute)
app.use('/post', PostRoute)

