import React, {useState, useEffect} from "react";
import "../../assets/styles/sass/components/_loader.scss";
interface Props {
    data: any;
}
const Loader: React.FunctionComponent<Props> = (props) => {
    const {data} = props;
    const [statusDots, updateStatusDots] = useState([]);
    useEffect(() => {
        const update = (arr: any) => updateStatusDots(arr);
        const processUpdate = setTimeout(() => {
            for (let index = 0; index < 3; index++) {
                if (statusDots.length === index) update([...statusDots, index]);
                if (statusDots.length === 3) update([]);
            }
        }, 150);
        return () => clearTimeout(processUpdate);
    }, [statusDots]);
    return (
        <main className="main">
            <div className="loading__main">
                <p className="main__status">
                    {data.status}
                    {statusDots.length > 0
                        ? statusDots.map((index: any) => {
                              return (
                                  <span className="main__status_dot" key={`${index}-${Math.random()}`}>
                                      {data.statusDot}
                                  </span>
                              );
                          })
                        : null}
                </p>
            </div>
        </main>
    );
};
export default Loader;
