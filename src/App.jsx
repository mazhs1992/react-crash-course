import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/Post'

function App() {
  

  return (<>
    <h1>Posts</h1>
    <Post author='Vangelis' body='Mazis Body' />
    <Post author='Marx' body='Marx Body'/>
    <Post/>
    </>  
  )
}

export default App
