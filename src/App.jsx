import React from 'react'
import Header from './Components/Header/Header'
import MiddleSection from './Components/Nav/MiddleSection'
import CommunityDiscussion from './Components/CommunityDiscussion/Community.jsx'
import GamingNews from './Components/Gaming-News/NewsForGames'

const App = () => {
  return (
   <>
    <Header />
    <MiddleSection />
  < CommunityDiscussion/>
  <GamingNews/>
   </>  
  )
}

export default App