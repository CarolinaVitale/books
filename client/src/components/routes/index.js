import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/Login/Login'
import MyProfile from '../pages/MyProfile/MyProfile'

import BookDetails from '../pages/BooksDetails/BooksDetails'
import PostDetails from '../pages/PostDetails/PostDetails'
import HomePage from '../pages/HomePage/HomePage'
import RegisterForm from '../pages/Register/RegisterForm'



const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path='/' exact render={(props) => <HomePage {...props} loggedUser={loggedUser} storeUser={storeUser}/>} />
            <Route path="/register" render={props => <RegisterForm {...props} loggedUser={loggedUser} storeUser={storeUser} />} />
            <Route path="/login" render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/profile" render={() => loggedUser ? <MyProfile loggedUser={loggedUser} /> : <Redirect to="/login" />} />
            <Route path="/post/:post_id" render={(props) => <PostDetails {...props} />} />
            <Route path="/book/:book_id" render={(props) => <BookDetails {...props} />} />
            {/* <Route path="/profile/:id" render={()=> <ProfileDetails />} /> */}
        </Switch>
    )
}

export default Routes