
import reactLogo from '../assets/react.svg'
import './App.css'
import PostsList from '../components/PostsList'
import { Outlet } from 'react-router-dom';

/* 
  with Outlet you can give sub routes
*/

function Posts() {
  
  return (
    <>

    <Outlet/>
      <main>
        <PostsList  />
      </main>   
    </>
  )
}





export default Posts;

export async function  loader () {
  const responce = await fetch('http://localhost:8080/posts');
  const resData = await responce.json();
  return  resData.posts;
}