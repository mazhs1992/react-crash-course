import classes from "./PostsList.module.css";
import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from "react";

function PostsList({isPosting, onStopPosting}) {

    // This will cause infinite loop
    // fetch('https://localhost:8080/posts').then(response=> response.json()).then(data => {
    //     setPosts(data.posts)
    // });
 
    const [posts,setPosts]=useState([])

    function addPostHandler(postData) {
        fetch('https://localhost:8080/posts',{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        setPosts((existingPosts)=>[postData, ...existingPosts])
    }

    let modalContent;
    if (isPosting) {
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>
        )
    }


    return (
        <>
            {modalContent}
            {posts.length>0 &&(
                 <ul className={classes.posts} >
                    {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body}/>)}
                </ul>
            )}
            
            {posts.length===0 && (
                <div style= {{textAlign:'center',color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start Adding some</p>
                </div>
            )}
           
        </>
    )
}




export default PostsList