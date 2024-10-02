import { Link, Outlet } from "react-router-dom";

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