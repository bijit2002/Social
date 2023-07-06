import React from 'react'
import './home.scss'
import Stories from '../../components/stories/Stories'
import Posts from '../../components/Posts/Posts'
import Share from '../../components/share/Share'

function Home() {
  return (
    <div className='home'>
     <Stories/>
     <Share/>
     <Posts/>
    </div>
  )
}

export default Home