import React from "react";
import HomeApp from "./Apps/HomeApp";
import AboutApp from "./Apps/AboutApp";
import MoviesApp from "./Apps/MoviesApp";
import MovieItemApp from "./Apps/MovieItemApp";
import NotFound404 from "./404/404";
import SearchMoviesApp from "./Apps/SearchMoviesApp";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
const Router: React.FunctionComponent = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={() => <Redirect to="/home" />} />
                <Route exact path="/home" component={HomeApp} />
                <Route exact path="/about" component={AboutApp} />
                <Route exact path="/movies" component={MoviesApp} />
                <Route exact path="/movies/:movieId" component={MovieItemApp} />
                <Route exact path="/results" component={SearchMoviesApp} />
                <Route component={NotFound404} />
            </Switch>
        </HashRouter>
    );
};
export default Router;
