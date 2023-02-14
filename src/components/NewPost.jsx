import classes from './NewPost.module.css'



function NewPost({onBodyChange,onAuthorChange}) {
    //    const stateData = useState('')
    //    stateData[0]//current value --> at the begging == ''
    //    stateData[1]//update Function
    //best way to call it
    

    return(
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body'  required rows={3} onChange={onBodyChange}/>
            </p>
           
            <p>
                <label htmlFor='name'>Your name</label>
                <textarea id='name' type='text' required onChange={onAuthorChange}/>
            </p>
            <p className={classes.actions}>
                <button type='button'>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost