import React from "react";
import { Route, Switch } from 'react-router-dom';
import Main from "./../Main/Main";
import Movies from "./../Movies/Movies";
import SavedMovies from "./../SavedMovies/SavedMovies";
import Profile from "./../Profile/Profile";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import Error404 from "./../Errors/Error404/Error404";

function App() {
 
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
        <Register>
          
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
