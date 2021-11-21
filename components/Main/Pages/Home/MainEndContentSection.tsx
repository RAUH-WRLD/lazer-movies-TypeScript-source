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
                        <div className="end__content_title">
                            <h2 className="end__content_title_item">
                                {data.title.map((partOfTitle: string, index: number) => {
                                    return (
                                        <span key={`${index}-${Math.random()}`} className="title__item_part">
                                            {partOfTitle}
                                        </span>
                                    );
                                })}
                            </h2>
                        </div>
                        <div className="end__content_subtitle">
                            <h3 className="end__content_subtitle_item">
                                {data.subtitle.map((partOfSubtitle: string, index: number) => {
                                    return (
                                        <span key={`${index}-${Math.random()}`} className="subtitle__item_part">
                                            {partOfSubtitle}
                                        </span>
                                    );
                                })}
                            </h3>
                        </div>
                        <div className="end__content_info">
                            <div className="end__content_info_items">
                                {data.pages.map((href: string, index: number) => {
                                    return (
                                        <a href={href} target="_blank" key={`${index}-${Math.random()}`} className="info__link_item">
                                            <img src={data.items[index]} alt={href} className="logo" />
                                        </a>
                                    );
                                })}
                            </div>
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
