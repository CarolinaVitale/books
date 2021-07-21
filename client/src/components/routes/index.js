import { Switch, Route, Redirect } from 'react-router-dom'
import BookDetails from '../pages/BooksDetails/BooksDetails'
import PostDetails from '../pages/PostDetails/PostDetails'

const Routes = () => {

    return (
        <Switch>
            <Route path="/post/:post_id" render={(props) => <PostDetails {...props} />} />
            <Route path="/book/:book_id" render={(props) => <BookDetails {...props} />} />
        </Switch>
    )
}
export default Routes