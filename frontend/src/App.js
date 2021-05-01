import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/Home";
import SearchPage from "./components/SearchPage/Search";
import ShowPage from "./components/ShowPage/Show";
import ProfilePage from "./components/ProfilePage/Profile";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/ErrorPage/PageNotFound";
import BookingPage from "./components/BookingPage/Booking";
import { LoginSignupModalProvider } from "./context/LoginSignupModalContext";
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
      <LoginSignupModalProvider>
        <Navbar isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/listings/:id(\d+)">
              <ShowPage />
              <Footer />
            </Route>
            <Route path="/bookings">
              <BookingPage />
              <Footer />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/users/:id(\d+)">
              <ProfilePage />
              <Footer />
            </Route>
            <Route>
              <PageNotFound />
              <Footer />
            </Route>
          </Switch>
        )}
      </LoginSignupModalProvider>
    </>
  );
}

export default App;