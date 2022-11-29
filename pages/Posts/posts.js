import Post from './post.js';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import styles from '/styles/posts.module.js';

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = styles() 

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={5}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts
