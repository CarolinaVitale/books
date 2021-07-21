import { Switch, Route } from 'react-router-dom'
import SplashPhotos from '../pages/Unsplash/UnsplashPhotos'

const Routes = () => {

    return (
        <Switch>
            <Route path='/' exact render={() => <SplashPhotos />} />
            {/* <Route path='/' exact render={() => <Profile />} /> */}

        </Switch>
    )
}
export default Routes