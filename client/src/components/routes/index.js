import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = () => {

    return (
        <Switch>
            {/* <Route path='/' exact render={() => <HomePage />} /> */}
            <Route path='/' exact render={() => <HomePage />} />

        </Switch>
    )
}
export default Routes