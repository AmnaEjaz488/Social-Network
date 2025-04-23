import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }], // References Thought model
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], // References User model
}, {
    toJSON: { virtuals: true },
    id: false,
});
const User = model('User', userSchema);
export default User;
