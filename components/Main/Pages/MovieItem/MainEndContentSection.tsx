import React from "react";
import {Link} from "react-router-dom";
interface Props {
    data: any;
    hrefs: any;
}
const MainEndContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, hrefs} = props;
    return (
        <section className="main__content_end">
            <div className="main__content_end_wrapper">
                <div className="grid-container">
                    <div className="end__content">
                        <div className="end__content_info">
                            <div className="end__content_info_link">
                                <Link to={hrefs.endLink} className="info__link_item">
                                    {data.endLinkText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainEndContentSection;
