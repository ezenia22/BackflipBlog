import express from 'express';

import { getPosts, getPost, createPost, likePost, dislikePost, deletePost } from '../controllers/postsController.js'

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/dislikePost', auth, dislikePost);
// router.put('/api/users/:id', updatePost);

export default router;