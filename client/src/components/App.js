import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Profile from './pages/ProfilePage/Profile'
import ProfileBar from './pages/profileBar/profileBar'
import Items from './pages/Items/Items'

function App() {
  return (
    <>
      <Profile />
      <br></br>
      <ProfileBar />
      <br></br>
      <Items />
    </>
  )
}

export default App
