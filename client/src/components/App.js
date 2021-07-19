import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './pages/UsersPage/UsersList'
import ProfilePageItemsList from './pages/UserProfilePageItemsList/ProfilePageItemsList'

import UserProfile from './pages/UserProfilePage/UserProfile'

function App() {
  return (
    <>
      <h1>yay!</h1>
      <UserList />
      <hr></hr>
      <ProfilePageItemsList />
      <UserProfile />
    </>
  )
}

export default App
