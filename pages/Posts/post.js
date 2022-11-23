import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import styles from '/styles/post.module.css';
import { useDispatch } from 'react-redux';

import { dislikePost, likePost, deletePost } from '../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card className={styles.card}>
            <CardMedia className={styles.media} image={post.selectedFile} title={post.title} />
            <div className={styles.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {/* <div className={styles.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id) }>
                    <MoreHorizonIcon fontSize="default" />
                </Button>
            </div> */}
            <div className={styles.details}>
                <Typography variant='body2' color='textSecondary' component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={styles.title} variant='h5' gutterBottom component="h2">{post.title}</Typography>
            <CardContent>
                <Typography className={styles.message} variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id)) }>
                    <ThumbUpAltIcon fontSize='small' />
                    Like {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => dispatch(dislikePost(post._id)) }>
                    <ThumbDownAltIcon fontSize='small' />
                    Dislike {post.dislikeCount}
                </Button>
                <Button size='small' color='secondary' onClick={() => dispatch(deletePost(post._id)) }>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
