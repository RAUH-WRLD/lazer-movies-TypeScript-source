import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
interface Props {
    data: any;
    checkLoading: any;
}
const MainStartContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, checkLoading} = props;
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isAllMoviesLoaded, setMoviesStatus] = useState(false);
    async function getMovies(page: number) {
        const apiKey = data.KinopoiskAPIsection.apiKey;
        const urlTemplate = data.KinopoiskAPIsection.urlTemplate;
        const url = `${urlTemplate}${page}`;
        const movies = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": apiKey,
            },
        });
        return await movies.json();
    }
    useEffect(() => {
        const getRandomDelay = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
        const processLoading = () => setTimeout(() => checkLoading(true), getRandomDelay(1000, 2000));
        getMovies(page)
            .then((moviesItems) => {
                const moviesArr: any = [...movies, ...moviesItems.films];
                if (movies.length === 0) setMovies(moviesItems.films);
                else {
                    setMovies(moviesArr);
                    checkLoading(false);
                }
                processLoading();
            })
            .catch(() => setMoviesStatus(true));
    }, [page]);
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
                        <div className="start__content_items">
                            <div className="grid-x">
                                {movies ? (
                                    movies.map((movie: any) => {
                                        return (
                                            <div className="small-7 medium-3 large-2 cell" key={`${movie}-${Math.random()}`}>
                                                <Link to={`movies/${movie.filmId}`} className="movie">
                                                    <div className="movie__item">
                                                        <img src={movie.posterUrl} alt={movie.filmId} className="movie__item_image" />
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="movie__error">{data.error}</p>
                                )}
                            </div>
                        </div>
                        <div className="start__content_load">
                            {!isAllMoviesLoaded ? (
                                <button className="load-button" onClick={() => setPage(page + 1)}>
                                    {data.loadButton}
                                </button>
                            ) : (
                                <p className="load-status">{data.loadStatus}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainStartContentSection;
