import React, {useState, useEffect, useReducer} from "react";
import {Link} from "react-router-dom";
interface Props {
    data: any;
    checkLoading: any;
}
const MainStartContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, checkLoading} = props;
    const searchData = data.searchData;
    const searchMovies = data.results;
    const keywords = data.keywords;
    const [page, setPage] = useState(1);
    const [loadMovies, setLoadMovies] = useState([]);
    const [isLoadedMovies, setLoadedMoviesStatus] = useState(false);
    const [loadMoviesLengthPrev, setLoadMoviesLengthPrev] = useState(0);
    const [loadMoviesLengthCurrent, setLoadMoviesLengthCurrent] = useState(0);
    const getRandomDelay = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const processLoading = () => setTimeout(() => checkLoading(true), getRandomDelay(1000, 2000));
    async function findMovieByKeywords(page: number) {
        const keyword = keywords;
        const apiKey = searchData.KinopoiskAPIsection.apiKey;
        const urlTemplatePart_1 = searchData.KinopoiskAPIsection.urlTemplatePart_1;
        const urlTemplatePart_2 = searchData.KinopoiskAPIsection.urlTemplatePart_2;
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
        processLoading();
        if (page > 1)
            findMovieByKeywords(page)
                .then((moviesItems) => {
                    const moviesArr: any = [...loadMovies, ...moviesItems.films];
                    const loadMoviesLengthPrev = loadMovies.length;
                    setLoadMovies(moviesArr);
                    setLoadMoviesLengthPrev(loadMoviesLengthPrev);
                    return checkLoading(false);
                })
                .catch(() => setLoadedMoviesStatus(true))
                .finally(() => processLoading());
    }, [page]);
    useEffect(() => {
        const loadMoviesLengthCurrent = loadMovies.length;
        setLoadMoviesLengthCurrent(loadMoviesLengthCurrent);
    }, [loadMovies]);
    useEffect(() => {
        if (page > 1) if (loadMoviesLengthCurrent === loadMoviesLengthPrev) setLoadedMoviesStatus(true);
    }, [loadMoviesLengthPrev]);
    useEffect(() => {
        if (page > 1) if (loadMovies.length === 0) setLoadedMoviesStatus(true);
    }, [loadMovies]);
    return (
        <section className="main__content_start">
            <div className="main__content_start_wrapper">
                <div className="grid-container">
                    <div className="start__content">
                        <div className="start__content_title">
                            <h1 className="start__content_title_item">
                                {searchData.title.map((partOfTitle: string, index: number) => {
                                    return (
                                        <span key={`${index}-${Math.random()}`} className="title__item_part">
                                            {partOfTitle}
                                        </span>
                                    );
                                })}
                            </h1>
                        </div>
                        <div className="start__content_items">
                            <div className="grid-x">
                                {searchMovies ? (
                                    searchMovies.map((movie: any) => {
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
                                    <p className="movie__error">{searchData.error}</p>
                                )}
                                {loadMovies.length > 0
                                    ? loadMovies.map((movie: any) => {
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
                                    : null}
                            </div>
                        </div>
                        <div className="start__content_load">
                            {!isLoadedMovies ? (
                                <button className="load-button" onClick={() => setPage(page + 1)}>
                                    {searchData.loadButton}
                                </button>
                            ) : (
                                <p className="load-status">{searchData.loadStatus}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainStartContentSection;
