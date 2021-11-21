import React, {useEffect} from "react";
interface Props {
    data: any;
    hrefs: any;
}
const MainEndContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, hrefs} = props;
    const getHrefsForInfoItems = () => {
        const infoItems = document.querySelectorAll(".end__content_info > .info__text_item > a");
        return infoItems.forEach((infoItem: any, index: number) => infoItem.setAttribute("href", hrefs.endLinks[index]));
    };
    useEffect(() => getHrefsForInfoItems());
    return (
        <section className="main__content_end">
            <div className="main__content_end_wrapper">
                <div className="end__content">
                    <div className="grid-container">
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
                            {data.info.infoItems.map((infoItem: any, index: number) => {
                                return (
                                    <p key={`${index}-${Math.random()}`} className="info__text_item">
                                        {infoItem.map((partOfInfoItem: string, index: number) => {
                                            if (/[a-z]/i.test(partOfInfoItem) === true) {
                                                return (
                                                    <a key={`${index}-${Math.random()}`} className="info__text_item_part" target="_blank">
                                                        {partOfInfoItem}
                                                    </a>
                                                );
                                            } else {
                                                return (
                                                    <span key={`${index}-${Math.random()}`} className="info__text_item_part">
                                                        {partOfInfoItem}
                                                    </span>
                                                );
                                            }
                                        })}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainEndContentSection;
