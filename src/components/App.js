import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Home";
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;