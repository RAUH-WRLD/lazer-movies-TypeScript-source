import React, {useState, useEffect} from "react";
import {data} from "../../data/data";
import {hrefs} from "../../data/hrefs";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
interface Props {
    Main: any;
    dataForMainComponent: any;
    hrefsForMainComponent: any;
    pageClass: any;
}
const App: React.FunctionComponent<Props> = (props) => {
    const {Main, dataForMainComponent, hrefsForMainComponent, pageClass} = props;
    const getRandomDelay = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const [isLoaded, updateLoading] = useState(false);
    useEffect(() => {
        const update = () => updateLoading(true);
        const processUpdate = setTimeout(() => update(), getRandomDelay(500, 1200));
        return () => clearTimeout(processUpdate);
    }, [isLoaded]);
    return (
        <React.Fragment>
            {isLoaded ? (
                <React.Fragment>
                    <Header data={data.header} hrefs={hrefs.header} pageClass={pageClass} />
                    <Main data={dataForMainComponent} hrefs={hrefsForMainComponent} pageClass={pageClass} />
                    <Footer data={data.footer} hrefs={hrefs.footer} pageClass={pageClass} />
                </React.Fragment>
            ) : (
                <Loader data={data.loader} />
            )}
        </React.Fragment>
    );
};
export default App;
