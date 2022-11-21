import express from 'express';

import { getPosts, getPost, createPost, likePost, deletePost } from '../controllers/postsController.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
// router.put('/api/users/:id', updatePost);

export default router;