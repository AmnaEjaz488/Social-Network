var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Thought from '../models/Thought.js'; // Add ".js" to the import path
import User from '../models/user.js'; // Add ".js" to the import path
export const getAllThoughts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thoughts = yield Thought.find();
        res.json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const getThoughtById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought.findById(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const createThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { thoughtText, username } = req.body;
        if (!thoughtText || !username) {
            res.status(400).json({ message: 'thoughtText and username are required.' });
            return;
        }
        const thought = yield Thought.create(req.body);
        res.status(201).json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const updateThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const deleteThought = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json({ message: 'Thought deleted successfully' });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const addReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const removeReaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thought = yield Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
            return;
        }
        res.json(thought);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const addFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
export const removeFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
