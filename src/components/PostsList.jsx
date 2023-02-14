import classes from "./PostsList.module.css";
import Post from './Post'
import NewPost from './NewPost'

function PostsList() {

    return (
        <>
            <NewPost />
            <ul className={classes.posts} >
                <Post author='Vangelis' body='Mazis Body' />
                <Post author='Marx' body='Marx Body' />

            </ul>
        </>
    )
}




export default PostsList