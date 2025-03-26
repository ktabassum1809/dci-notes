import mongoose from 'mongoose';

const mongoDbUri = process.env.MONGODB_URI;

const connect = async () => {
    try {
        await mongoose.connect(mongoDbUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to the MongoDB', error);
    }
}

const close = async () => mongoose.connection.close();

export default { connect, close };