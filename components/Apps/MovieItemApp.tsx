import React from "react";
import {useParams} from "react-router-dom";
import {data} from "../../data/data";
import {hrefs} from "../../data/hrefs";
import App from "./App";
import Main from "../Main/Pages/MovieItem/Main";
const MovieItemApp: React.FunctionComponent = () => {
    const {movieId} = useParams<{movieId: string}>();
    return <App Main={Main} dataForMainComponent={{data: data.main.movieItem, movieId: movieId}} hrefsForMainComponent={hrefs.main.movieItem} pageClass={data.header.navigation.pages[4]} />;
};
export default MovieItemApp;
