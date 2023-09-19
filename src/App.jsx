import React from 'react'
import Header from './Components/Header/Header'
import MiddleSection from './Components/Nav/MiddleSection'
import CommunityDiscussion from './Components/CommunityDiscussion/Community.jsx'
import GamingNews from './Components/Gaming-News/NewsForGames'
import PostReviewPage from './Components/post-review/PostReviewPage.jsx'
import HotTakes from './Components/HotTakes/HotTakes.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// you can move that to separate file if you want
const HomePage = () => {
  return (
    <div>
      <MiddleSection />
      <CommunityDiscussion/>
      <GamingNews/>
   </div>
  )
}




function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post-review" element={<PostReviewPage />} />
          <Route path="/HotTakes" element={<HotTakes />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
