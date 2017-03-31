/**
 * Created by vlad on 2/21/2017.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
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
