import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import HomeLayout from './components/HomeLayout';
function App() {
  return (
    <>
    <Router>
      <Link to ='/'> Home </Link>|<Link to ='/profile'> Profile </Link>
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route  path = '/profile' element={<Profile/>}>
          <Route path='profile-details' element = {<ProfileDetails/>}/>
          <Route path='profile-settings' element = {<ProfileSettings/>}/>
        </Route>


      </Routes>
    </Router>
    </>
  )
}

export default App
