import Post from './post.js';
import { useSelector } from 'react-redux';

function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h3>Welcome to your posts</h3>
      <Post/>
    </div>
  )
}

export default Posts
