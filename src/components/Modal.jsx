import classes from "./Modal.module.css";
import {useNavigate} from "react-router-dom";


// function Modal(props) {
function Modal({children}) {
    // {props.children}
    const navigate= useNavigate()

    function closeHandler() {
        navigate('..') //go to the parent route
    }
    return(
    <>
        <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open={true} className={classes.modal}>                
                {children}
            </dialog>
        
    </>)
}

export default Modal