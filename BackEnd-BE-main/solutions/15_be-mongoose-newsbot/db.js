import mongoose from 'mongoose';

export default function connect() {
    // Register connection events
    // https://mongoosejs.com/docs/connections.html#connection-events
    mongoose.connection.on('connected', () => console.log('DB connected'));
    mongoose.connection.on('error', (error) =>
        console.error('DB Error', error)
    );

    // Connect to mongoose
    const url = process.env.MONGODB_CONNECTION_STRING; // DO NOT COMMIT SECRETS
    return mongoose.connect(url);
}
