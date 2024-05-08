import express from 'express';
import databaseConnection from './utils/database.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js'
import cors from 'cors'

// Load environment variables
dotenv.config({ path: '.env' });

// Connect to the database
databaseConnection();

const app = express();
const PORT = process.env.PORT || 8080; // Set a default port if PORT is not defined in the environment variables

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser()) 
const corsOptions= {
    origin: 'http://localhost:3000',
}
app.use(cors(corsOptions)) 


//api 
app.use('/api/v1/user', userRoute); // http://localhost:8080/api/v1/user/register




app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
