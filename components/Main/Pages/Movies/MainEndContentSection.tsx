import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
interface Props {
    data: any;
    hrefs: any;
}
const MainEndContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, hrefs} = props;
    const searchInputRef: any = useRef(null);
    const searchButtonRef: any = useRef(null);
    const [foundMovies, setFoundMovies] = useState([0]);
    const [searchMovieKeywords, setSearchMovieKeywords] = useState("");
    const checkSearchInputValue = () => {
        const input = searchInputRef.current;
        const button = searchButtonRef.current;
        if (input.value !== "") return button.removeAttribute("disabled");
        else return button.setAttribute("disabled", true);
    };
    async function findMovieByKeywords(page: number) {
        const input = searchInputRef.current;
        const keyword = encodeURIComponent(input.value);
        const apiKey = data.KinopoiskAPIsection.apiKey;
        const urlTemplatePart_1 = data.KinopoiskAPIsection.urlTemplatePart_1;
        const urlTemplatePart_2 = data.KinopoiskAPIsection.urlTemplatePart_2;
        const url = `${urlTemplatePart_1}${keyword}${urlTemplatePart_2}${page}`;
        const movies = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": apiKey,
            },
        });
        return await movies.json();
    }
    useEffect(() => {
        return () => setFoundMovies([0]);
    }, []);
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
                        <div className="end__content_search">
                            <form
                                action=""
                                method="GET"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    return findMovieByKeywords(1).then((movies) => {
                                        const input = searchInputRef.current;
                                        const keyword = encodeURIComponent(input.value);
                                        setSearchMovieKeywords(keyword);
                                        return setFoundMovies(movies.films);
                                    });
                                }}
                            >
                                <input type="search" placeholder={data.searchText} ref={searchInputRef} onChange={() => checkSearchInputValue()} />
                                <button type="submit" disabled={true} ref={searchButtonRef}>
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                        {foundMovies.length > 0 && foundMovies[0] !== 0 ? (
                            <div className="end__content_search-status">
                                <Link
                                    to={{
                                        pathname: hrefs.foundMoviesLink,
                                        state: {
                                            data: foundMovies,
                                            keywords: searchMovieKeywords,
                                        },
                                    }}
                                    className="search-status"
                                >
                                    {data.foundMoviesLinkText}
                                </Link>
                            </div>
                        ) : null}
                        {foundMovies[0] !== 0 && foundMovies.length === 0 ? (
                            <div className="end__content_search-status">
                                <p className="search-status">{data.searchStatusText}</p>
                            </div>
                        ) : null}
                        {foundMovies[0] === 0 ? (
                            <div className="end__content_search-status">
                                <p className="search-status empty-search">{data.emptySearchText}</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainEndContentSection;
