import React from "react";
import {data} from "../../data/data";
import {hrefs} from "../../data/hrefs";
import App from "./App";
import Main from "../Main/Pages/SearchMovies/Main";
import {useLocation, Redirect} from "react-router-dom";
const SearchMoviesApp: React.FunctionComponent = () => {
    const {state} = useLocation();
    return <React.Fragment>{state === undefined ? <Redirect to={hrefs.main.searchMovies.endContentSection.endLink} /> : <App Main={Main} dataForMainComponent={{data: data.main.searchMovies, searchState: state}} hrefsForMainComponent={hrefs.main.searchMovies} pageClass={data.header.navigation.pages[3]} />}</React.Fragment>;
};
export default SearchMoviesApp;
