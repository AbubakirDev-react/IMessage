import mongoose from 'mongoose';

export async function connectDB() {
    try{
        const mongoUri=process.env.MONGO_URI;
        if(!mongoUri){
            throw new Error('MONGO_URI is required in environment variables');
        }
        const conn=await mongoose.connect(mongoUri)

        console.log("MongoDB connected: "+conn.connection.host);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
        // 1 meanst failed, 0 means success
    }
}