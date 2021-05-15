import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarWhite from "./components/Navbar/NavbarWhite";
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
        {isLoaded && (
          <Switch>
            <Route exact path="/">
            <Navbar isLoaded={isLoaded} />
              <HomePage />
              <Footer />
            </Route>
            <Route path="/listings/:id(\d+)">
              <NavbarWhite isLoaded={isLoaded} />
              <ShowPage />
              <Footer />
            </Route>
            <Route path="/bookings">
              <NavbarWhite isLoaded={isLoaded} />
              <BookingPage />
              <Footer />
            </Route>
            <Route exact path="/search">
              <NavbarWhite isLoaded={isLoaded} />
              <SearchPage />
            </Route>
            <Route path="/search/:category">
              <NavbarWhite isLoaded={isLoaded} />
              <SearchPage />
            </Route>
            <Route path="/users/:id(\d+)">
              <NavbarWhite isLoaded={isLoaded} />
              <ProfilePage />
              <Footer />
            </Route>
            <Route>
              <NavbarWhite isLoaded={isLoaded} />
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