/**
 * Created by Vlad on 4/22/2017.
 */
import mongoose from 'mongoose';
import shortid from 'shortid';
import uniqueValidator from 'mongoose-unique-validator';
import {findAndCount} from '../libs/helper';

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    link: {
        type: String,
        unique: 'This link already exists',
        required: true,
        trim: true

    },
    shortLink: {
        type: String,
        required: true,
        trim: true,
        default: shortid.generate
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    tags: {
        type: [{
            type: String,
            trim: true
        }],
        default: ['qwe', 'qwe', 'qwe']
    },
    clicks: {
        type: Number,
        default: 0
    }
});

linkSchema.statics.findAndCount = findAndCount;

linkSchema.plugin(uniqueValidator);
const linkModel = mongoose.model('Link', linkSchema);
export default linkModel;
