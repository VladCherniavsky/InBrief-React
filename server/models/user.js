/**
 * Created by vlad on 2/21/2017.
 */
import mongoose from 'mongoose';

// mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        unique: 'This username already exists',
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: 'This email already exists',
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', userSchema);
export default userModel;
