import React from "react";
import {Link} from "react-router-dom";
import {data} from "../../data/data";
import "../../assets/styles/sass/components/404.scss";
const NotFound404: React.FunctionComponent = () => {
    return (
        <main className="main">
            <div className="error__main">
                <p className="main__status">{data._404.status_1}</p>
                <p className="main__status">{data._404.status_2}</p>
                <Link to="/">{data._404.link}</Link>
            </div>
        </main>
    );
};
export default NotFound404;
