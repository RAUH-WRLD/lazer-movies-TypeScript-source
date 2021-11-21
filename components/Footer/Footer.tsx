import React from "react";
import FooterNav from "./FooterNav";
interface Props {
    data: any;
    hrefs: any;
    pageClass: string;
}
export default class Footer extends React.Component<Props> {
    render() {
        const {data, hrefs, pageClass} = this.props;
        return (
            <footer className="footer">
                <div className={`${pageClass}__footer`}>
                    <div className="footer__wrapper">
                        <div className="grid-container">
                            <div className="footer__content">
                                <FooterNav data={data.navigation} hrefs={hrefs.navigation} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
