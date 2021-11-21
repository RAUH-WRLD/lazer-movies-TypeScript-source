import React from "react";
import {data} from "../../data/data";
import {hrefs} from "../../data/hrefs";
import App from "./App";
import Main from "../Main/Pages/Home/Main";
const HomeApp: React.FunctionComponent = () => <App Main={Main} dataForMainComponent={data.main.home} hrefsForMainComponent={hrefs.main.home} pageClass={data.header.navigation.pages[0]} />;
export default HomeApp;
