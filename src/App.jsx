import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import { UserProvider } from './context/UserContext';
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </UserProvider>
    </>
  );
}
