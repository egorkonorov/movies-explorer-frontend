import React, {useState} from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import SavedMovies from "./../SavedMovies/SavedMovies";
import Profile from "./../Profile/Profile";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import Error404 from "./../Errors/Error404/Error404";
import * as Auth from './../../utils/Auth';

function App() {
  const [registrationPassed, setRegistrationPassed] = useState(false)
  const history = useHistory()

  function handleRegister (password, email) {
    Auth.register(password, email)
        .then((res) => {
                setRegistrationPassed(true)
                history.push('/sign-in')

        })
        .catch((err) => {
          console.log(err)
          setRegistrationPassed(false)
      })
  }

 
  return (
    <>
  <Switch>
      <Route path="/movies">
      <Movies>

      </Movies>
      </Route >

      <Route path="/saved-movies">
      <SavedMovies>

      </SavedMovies>
      </Route >

      <Route exact path="/">
      <Main>

      </Main>
      </Route >

      <Route path="/profile">
        <Profile>

        </Profile>
      </Route >

      <Route path="/register">
        <Register handleRegister={handleRegister}>
          
        </Register>
      </Route >

      <Route path="/login">
        <Login>

        </Login>
      </Route >

      <Route path="*">
        <Error404>

        </Error404>
      </Route >

    </Switch>

  </>
  );
}

export default App;
