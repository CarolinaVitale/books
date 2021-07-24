import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/User/Login/Login'
import MyProfile from '../pages/User/MyProfile/MyProfile'

import HomePage from '../pages/HomePage/HomePage'
import RegisterForm from '../pages/User/Register/RegisterForm'
import BooksForm from '../pages/Book/BooksForm/BooksForm'
import BookDetails from '../pages/Book/BooksDetails/BooksDetails'
import PostsForm from '../pages/Post/PostsForm/PostsForm'
import PostDetails from '../pages/Post/PostDetails/PostDetails'
import ReviewsForm from '../pages/Review/ReviewsForm'
import PostEdit from '../pages/Post/EditPost/EditForm'




const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path='/' exact render={(props) => <HomePage {...props} loggedUser={loggedUser} storeUser={storeUser}/>} />
            <Route path="/register" render={props => <RegisterForm {...props} loggedUser={loggedUser} storeUser={storeUser} />} />
            <Route path="/login" render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/profile" render={() => loggedUser ? <MyProfile loggedUser={loggedUser} storeUser={storeUser} /> : <Redirect to="/login" />} />
            <Route path="/book/create" render={(props) => <BooksForm {...props} />} />
            <Route path="/post/create" render={(props) => <PostsForm {...props} />} />
            <Route path="/review/create" render={(props) => <ReviewsForm {...props} />} />
            <Route path="/post/:post_id" render={(props) => <PostEdit {...props} loggedUser={loggedUser} storeUser={storeUser}/>} />
            <Route path="/post/details/:post_id" render={(props) => <PostDetails {...props} />} />
            <Route path="/book/details/:book_id" render={(props) => <BookDetails {...props} />} />
            {/* <Route path="/profile/:id" render={()=> <ProfileDetails />} /> */}
        </Switch>
    )
}

export default Routes