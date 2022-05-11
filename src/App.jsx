import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './utils/PrivateRoute';
import Auth from './views/Auth';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </UserProvider>
    </>
  );
}
