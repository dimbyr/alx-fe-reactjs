import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <>
    <h1>Profile of a Person</h1>
    <Link to= 'profile-details'>Profile details</Link> | <Link to = 'profile-settings'> Profile Setting</Link>
    <Outlet />
    </>
  )
}

export default Profile;