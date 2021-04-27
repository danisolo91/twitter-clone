import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <PrivateRoute path="/home" component={Dashboard} />
                    <PrivateRoute path="/explore" component={Dashboard} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;