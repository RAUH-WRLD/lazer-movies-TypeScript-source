import React from "react";
import HeaderNav from "./HeaderNav";
interface Props {
    data: any;
    hrefs: any;
    pageClass: string;
}
export default class Header extends React.Component<Props> {
    render() {
        const {data, hrefs, pageClass} = this.props;
        return (
            <header className="header">
                <div className={`${pageClass}__header`}>
                    <div className="header__wrapper">
                        <div className="grid-container">
                            <div className="header__content">
                                <HeaderNav data={data.navigation} hrefs={hrefs.navigation} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
