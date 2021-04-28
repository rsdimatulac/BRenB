import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import Navbar from "./components/Navbar/Navbar";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage/Home";
import SearchPage from "./components/SearchPage/Search";
import ShowPage from "./components/ShowPage/Show";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer/Footer";
import * as sessionActions from "./store/session";
import './reset.css';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navbar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/listings/:id">
            <ShowPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/users/:id">
            <ProfilePage />
          </Route>
          {/* <Route path="/page-not-found">
            <h2>Page Not Found (style me)</h2>
          </Route> */}
          <Route>
            <h2>Page Not Found (style me)</h2>
          </Route>
        </Switch>
      )}
      <Footer /> 
    </>
  );
}

export default App;