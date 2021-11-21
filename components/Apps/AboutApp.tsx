import React from "react";
import {data} from "../../data/data";
import {hrefs} from "../../data/hrefs";
import App from "./App";
import Main from "../Main/Pages/About/Main";
const AboutApp: React.FunctionComponent = () => <App Main={Main} dataForMainComponent={data.main.about} hrefsForMainComponent={hrefs.main.about} pageClass={data.header.navigation.pages[1]} />;
export default AboutApp;
