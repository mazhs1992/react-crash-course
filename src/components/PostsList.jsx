import classes from "./PostsList.module.css";
import Post from './Post'
import { useLoaderData } from 'react-router-dom'//gives the data from the loader


function PostsList() {
    const posts = useLoaderData();

    // This will cause infinite loop
    // fetch('https://localhost:8080/posts').then(response=> response.json()).then(data => {
    //     setPosts(data.posts)
    // });
 
 
    //I dont need that since i added loader

    // useEffect(() => { 
    //     //You cannot pass async here
    //     // Thats why we pass a function inside useEffect which is async

    //     async function fetchPosts() {
    //         setIsFetching(true)
           
    //         // if(!responce.ok){
    //             //use it in case of error from the back
    //         // }
    //         setPosts(resData.posts);
    //         setIsFetching(false)
    //     }  

    //     fetchPosts();
    // }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts',{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        setPosts((existingPosts)=>[postData, ...existingPosts])
    }

    let modalContent;
   


    return (
        <>
            {modalContent}
            { posts.length>0 &&(
                 <ul className={classes.posts} >
                    {posts.map((post)=> <Post key={post.body} author={post.author} body={post.body}/>)}
                </ul>
            )}
            
            { posts.length===0 && (
                <div style= {{textAlign:'center',color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start Adding some</p>
                </div>
            )}

           
        </>
    )
}




export default PostsList