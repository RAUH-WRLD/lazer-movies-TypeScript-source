import React from "react";
interface Props {
    data: any;
}
const MainStartContentSection: React.FunctionComponent<Props> = (props) => {
    const {data} = props;
    return (
        <section className="main__content_start">
            <div className="main__content_start_wrapper">
                <div className="grid-container">
                    <div className="start__content">
                        <div className="start__content_title">
                            <h1 className="start__content_title_item">
                                {data.title.map((partOfTitle: string, index: number) => {
                                    return (
                                        <span key={`${index}-${Math.random()}`} className="title__item_part">
                                            {partOfTitle}
                                        </span>
                                    );
                                })}
                            </h1>
                        </div>
                        <div className="start__content_subtitle">
                            <h2 className="start__content_subtitle_item">{data.subtitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainStartContentSection;
