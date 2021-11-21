import React from "react";
import {data} from "../../data/data";
import {hrefs} from "../../data/hrefs";
import App from "./App";
import Main from "../Main/Pages/Movies/Main";
const MoviesApp: React.FunctionComponent = () => <App Main={Main} dataForMainComponent={data.main.movies} hrefsForMainComponent={hrefs.main.movies} pageClass={data.header.navigation.pages[2]} />;
export default MoviesApp;
