import classes from "./PostsList.module.css";
import Post from './Post'
import NewPost from './NewPost'
import { useState } from "react";

function PostsList() {
    const [enterBody,setEnterBody] = useState('')
    const [enterAuthor,setEnterAuthor] = useState('')
   
    function bodyChangeHandler(event) {       
        setEnterBody(event.target.value)
    }

    function authorChangeHandler(event) {       
        setEnterAuthor(event.target.value)
    }


    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
            <ul className={classes.posts} >
                <Post author={enterAuthor} body={enterBody} />
                <Post author='Marx' body='Marx Body' />

            </ul>
        </>
    )
}




export default PostsList