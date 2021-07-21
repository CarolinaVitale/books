import { Switch, Route, Redirect } from 'react-router-dom'
import Profile from '../pages/ProfilePage/Profile'

const Routes = () => {

    return (
        <Switch>
            {/* <Route path='/' exact render={() => <HomePage />} /> */}
            <Route path='/' exact render={() => <Profile />} />

        </Switch>
    )
}
export default Routes