import classes from "./PostsList.module.css";
import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from "react";

function PostsList({isPosting, onStopPosting}) {
 
    const [enterBody, setEnterBody] = useState('')
    const [enterAuthor, setEnterAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnterBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnterAuthor(event.target.value)
    }

    

    let modalContent;
    if (isPosting) {
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
        )
    }


    return (
        <>
            {modalContent}
            <ul className={classes.posts} >

                <Post author={enterAuthor} body={enterBody} />
                <Post author='Marx' body='Marx Body' />

            </ul>
        </>
    )
}




export default PostsList