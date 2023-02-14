import classes from './NewPost.module.css'


function NewPost() {

    let enterBody = ''
    function changeBodyHandler(event) {
        //console.log(event.target.value);
        enterBody = event.target.value
    }


    return(
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body'  required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor='name'>Your name</label>
                <textarea id='name' type='text' required/>
            </p>
        </form>
    );
}

export default NewPost