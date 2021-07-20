import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './pages/NavBarPage/NavbarCard'
import UserList from './pages/UsersPage/UsersList'
import ProfilePageItemsList from './pages/UserProfilePageItemsList/ProfilePageItemsList'
import UserProfile from './pages/UserProfilePage/UserProfile'

function App() {
  return (
    <>
      <UserProfile />
      <br></br>
      <Navbar />
      <br></br>
      <ProfilePageItemsList />
    </>
  )
}

export default App
