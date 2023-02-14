import classes from "./PostsList.module.css";
import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from "react";

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enterBody, setEnterBody] = useState('')
    const [enterAuthor, setEnterAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnterBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnterAuthor(event.target.value)
    }

    function hideModalHandler() {
        setModalIsVisible(false)
    }

    let modalContent;
    if (modalIsVisible) {
        modalContent = (
            <Modal onClose={hideModalHandler}>
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