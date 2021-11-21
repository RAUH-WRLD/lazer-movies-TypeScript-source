import React from "react";
import MainStartContentSection from "./MainStartContentSection";
import MainEndContentSection from "./MainEndContentSection";
interface Props {
    data: any;
    hrefs: any;
    pageClass: string;
}
export default class Main extends React.Component<Props> {
    private mainRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props) {
        super(props);
        this.mainRef = React.createRef();
    }
    state = {
        isLoaded: false,
    };
    checkLoading = (status: boolean) => {
        const main = this.mainRef.current;
        this.setState({isLoaded: status});
        if (this.state.isLoaded) {
            main?.classList.add("loaded");
            return document.getElementsByTagName("html")[0].removeAttribute("style");
        } else {
            main?.classList.remove("loaded");
            return (document.getElementsByTagName("html")[0].style.overflowY = "hidden");
        }
    };
    checkCurrentMainState = () => {
        const main = this.mainRef.current;
        if (!main?.classList.contains("loaded")) document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        else return false;
    };
    componentDidMount() {
        this.checkCurrentMainState();
    }
    render() {
        const {data, hrefs, pageClass} = this.props;
        const searchData = data.data;
        const searchResults = data.searchState.data;
        const searchResultsKeywords = data.searchState.keywords;
        return (
            <main className="main">
                <div className={`${pageClass}__main`} ref={this.mainRef}>
                    <div className="main__wrapper">
                        <div className="main__content">
                            <MainStartContentSection data={{searchData: searchData.startContentSection, results: searchResults, keywords: searchResultsKeywords}} checkLoading={this.checkLoading} />
                            <MainEndContentSection data={searchData.endContentSection} hrefs={hrefs.endContentSection} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
