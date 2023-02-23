import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  function showModalHandler() {
    setModalIsVisible(true)//this makes modalIsVisible == true so modal is shown
  }

  return (<>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
    <PostsList  isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </main>   
  </>
  )
}

export default App
