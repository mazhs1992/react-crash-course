import classes from './NewPost.module.css'
import { useState } from "react";
import Modal from '../components/Modal'
import {Link} from 'react-router-dom'

function NewPost({onAddPost}) {
    //    const stateData = useState('')
    //    stateData[0]//current value --> at the begging == ''
    //    stateData[1]//update Function
    //best way to call it
    
    const [enterBody, setEnterBody] = useState('')
    const [enterAuthor, setEnterAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnterBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnterAuthor(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body:enterBody,
            author:enterAuthor
        }
        onAddPost(postData)
        onCancel()
    }


    return(
        <Modal>
            <form className={classes.form} onSubmit= {submitHandler}>
                <p>
                    <label htmlFor='body'>Text</label>
                    <textarea id='body'  required rows={3} onChange={bodyChangeHandler}/>
                </p>
            
                <p>
                    <label htmlFor='name'>Your name</label>
                    <textarea id='name' type='text' required onChange={authorChangeHandler}/>
                </p>
                <p className={classes.actions}>

                    <Link to='..' type='button' >Cancel</Link>

                    <button >Submit</button>
                </p>
            </form>
        </Modal>
        
    );
}

export default NewPost