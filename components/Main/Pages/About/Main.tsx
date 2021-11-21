import React from "react";
import MainStartContentSection from "./MainStartContentSection";
import MainEndContentSection from "./MainEndContentSection";
interface Props {
    data: any;
    hrefs: any;
    pageClass: string;
}
export default class Main extends React.Component<Props> {
    render() {
        const {data, hrefs, pageClass} = this.props;
        return (
            <main className="main">
                <div className={`${pageClass}__main`}>
                    <div className="main__wrapper">
                        <div className="main__content">
                            <MainStartContentSection data={data.startContentSection} />
                            <MainEndContentSection data={data.endContentSection} hrefs={hrefs.endContentSection} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
