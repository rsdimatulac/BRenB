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
          <Route exact path="/">
            {/* <Navbar isLoaded={isLoaded} /> */}
            <HomePage />
          </Route>
          <Route path="/listings/:id(\d+)">
            {/* <Navbar isLoaded={isLoaded} /> */}
            <ShowPage />
          </Route>
          <Route path="/bookings">
            {/* <Navbar isLoaded={isLoaded} /> */}
            <BookingPage />
          </Route>
          <Route path="/search">
            {/* <Navbar isLoaded={isLoaded} /> */}
            <SearchPage />
          </Route>
          <Route path="/users/:id(\d+)">
            {/* <Navbar isLoaded={isLoaded} /> */}
            <ProfilePage />
          </Route>
          <Route>
            {/* <Navbar isLoaded={isLoaded} /> */}
            <PageNotFound />
          </Route>
        </Switch>
      )}
      <Footer /> 
    </>
  );
}

export default App;