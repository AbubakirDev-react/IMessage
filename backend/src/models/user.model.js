import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    profileImageUrl: {
        type: String,
        default: '',
    },
    },{
        timestamps: true, // creates createdAt and updatedAt fields automatically
    }
);

const User = mongoose.model('User', userSchema);

export default User;