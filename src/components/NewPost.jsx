import classes from './NewPost.module.css'
import { useState } from "react";


function NewPost() {
    //    const stateData = useState('')
    //    stateData[0]//current value --> at the begging == ''
    //    stateData[1]//update Function
    //best way to call it
    const [enterBody,setEnterBody] = useState('')

   
    function changeBodyHandler(event) {       
        setEnterBody(event.target.value)
    }


    return(
        <form className={classes.form}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body'  required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>{enterBody}</p>
            <p>
                <label htmlFor='name'>Your name</label>
                <textarea id='name' type='text' required/>
            </p>
        </form>
    );
}

export default NewPost