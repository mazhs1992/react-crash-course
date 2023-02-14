import classes from './NewPost.module.css'



function NewPost(props) {
    //    const stateData = useState('')
    //    stateData[0]//current value --> at the begging == ''
    //    stateData[1]//update Function
    //best way to call it
    

    return(
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body'  required rows={3} onChange={props.onBodyChange}/>
            </p>
           
            <p>
                <label htmlFor='name'>Your name</label>
                <textarea id='name' type='text' required onChange={props.onAuthorChange}/>
            </p>
        </form>
    );
}

export default NewPost