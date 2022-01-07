import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
