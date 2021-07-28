import { Switch, Route, Redirect } from 'react-router-dom'

import MyProfile from '../pages/User/MyProfile/MyProfile'
import FriendsProfile from '../pages/FriendsProfile/FriendsProfile'
import HomePage from '../pages/HomePage/HomePage'
import BookDetails from '../pages/Book/BooksDetails/BooksDetails'
import PostDetails from '../pages/Post/PostDetails/PostDetails'
import PostEdit from '../pages/Post/EditPost/EditForm'
import BookEdit from '../pages/Book/EditBook/EditBook'
import ReviewEdit from '../pages/Review/EditReview/EditReview'
import ProfileEdit from '../pages/User/EditUser/EditForm'



const Routes = ({ storeUser, loggedUser, fetchUser }) => {

    return (
        <Switch>
            <Route path='/' exact render={(props) => <HomePage {...props} loggedUser={loggedUser} storeUser={storeUser} />} />
            <Route path="/profile" exact render={(props) => loggedUser ? <MyProfile {...props} loggedUser={loggedUser} storeUser={storeUser} /> : <Redirect to="/login" />} />
            <Route path="/profile/:user_id" exact render={props => <FriendsProfile {...props} fetchUser={fetchUser} loggedUser={loggedUser} storeUser={storeUser} />} />
            <Route path="/profile/edit/:user_id" exact render={props => <ProfileEdit {...props} loggedUser={loggedUser} />} />
            <Route path="/book/details/:book_id" render={(props) => <BookDetails loggedUser={loggedUser} {...props} />} />
            <Route path="/book/:book_id" exact render={(props) => <BookEdit {...props} loggedUser={loggedUser} storeUser={storeUser} />} />
            <Route path="/post/details/:post_id" render={(props) => <PostDetails {...props} />} />
            <Route path="/post/:post_id" exact render={(props) => <PostEdit {...props} loggedUser={loggedUser} storeUser={storeUser} />} />
            <Route path="/review/:review_id" exact render={(props) => <ReviewEdit {...props} loggedUser={loggedUser} storeUser={storeUser} />} />
        </Switch>
    )
}

export default Routes