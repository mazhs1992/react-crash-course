import React from 'react'
import ReactDOM from 'react-dom/client'


import Posts ,{loader as postsLoader} from './routes/Posts'
import RootLayout from './routes/RootLayout'
import NewPost, { action as newPostAction} from './routes/NewPost'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import './index.css'

//here you pass all the routes you want to have
const router =createBrowserRouter([
  {
      path:'/',
      element: <RootLayout/>, 
      children:[
        {
          path: '/' ,
          element: <Posts />,
          loader: postsLoader,
          children: [
            { path: '/create-post', element: <NewPost /> , action: newPostAction} //actions handle forms
          ]
        },
        {
          path:'/test',
          element: <h1>test</h1>
        },
       
      ]
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)

/*

RouterProvider
    tells React to watch the url and send different component for different path

*/