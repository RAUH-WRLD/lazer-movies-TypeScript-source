import React from "react";
import {Link} from "react-router-dom";
interface Props {
    data: any;
    hrefs: any;
}
export default class HeaderNav extends React.Component<Props> {
    render() {
        const {data, hrefs} = this.props;
        return (
            <nav className="header__navigation">
                <ul className="header__navigation_list">
                    <li className="header__navigation_list_item">
                        <Link to={hrefs.logo} className="list__item_link">
                            {data.logo.map((partOfLogo: string) => {
                                return (
                                    <span className="logo__item_part" key={`${partOfLogo}-${Math.random()}`}>
                                        {partOfLogo}
                                    </span>
                                );
                            })}
                        </Link>
                    </li>
                    {data.items.map((item: string, index: number) => {
                        return (
                            <li className="header__navigation_list_item" key={`${hrefs.items[index]}-${Math.random()}`}>
                                <Link to={hrefs.items[index]} className="list__item_link">
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
