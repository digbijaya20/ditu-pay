const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;

