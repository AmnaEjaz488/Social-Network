import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../../controllers/userController.js';
const router = Router();
// Route to get all users
router.route('/').get(getAllUsers).post(createUser);
// Route to get, update, or delete a user by ID
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
// Route to add or remove a friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
export default router;
