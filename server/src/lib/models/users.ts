import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        required: true,
        default: new Date()
    }
});

const User = mongoose.model("User", userSchema);
(async () => await User.createCollection())();

export default User;