import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Tmdb} from "movie-api";
interface Props {
    data: any;
    hrefs: any;
    checkLoading: any;
}
const MainStartContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, hrefs, checkLoading} = props;
    const [backgroundMovies, setBackgroundMovies] = useState([]);
    const moviesArr: any = [];
    const moviesTitlesData: any = [];
    const moviesData: any = [];
    let isThereMoviesData: boolean = false;
    function getKinopoiskTitles() {
        const apiKey = data.KinopoiskAPIsection.apiKey;
        const urlTemplate = data.KinopoiskAPIsection.urlTemplate;
        const urlArr: any = [];
        const movies: any = [];
        for (let index = 1; index <= 13; index++) {
            urlArr.push(`${urlTemplate}${index}`);
        }
        async function getMovies(url: string) {
            const movies = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": apiKey,
                },
            });
            return await movies.json();
        }
        async function processUrlArr(arr: any) {
            for (const url of arr) {
                await getMovies(url).then((movie) => {
                    movies.push(movie.films);
                    if (movies.length >= 13) movies.forEach((movieItem: any) => movieItem.forEach((movie: any) => moviesTitlesData.push(movie.nameEn)));
                    else return false;
                });
            }
        }
        processUrlArr(urlArr)
            .then(() => {
                return moviesTitlesData
                    .sort(() => Math.random() - 0.5)
                    .forEach((movieTitle: string, index: number) => {
                        if (movieTitle !== null && movieTitle !== moviesTitlesData[index + 1]) moviesData.push(movieTitle);
                        else return false;
                    });
            })
            .then(() => (isThereMoviesData = true));
    }
    getKinopoiskTitles();
    const checkBackgroundMoviesRender = () => {
        if (backgroundMovies.length >= 205) setTimeout(() => checkLoading(true), 0);
        else return false;
    };
    const processBackgroundMovies = () => {
        if (backgroundMovies.length >= 205)
            setTimeout(() => {
                const backgroundMoviesItems = document.querySelectorAll(".main__content_start_background > .grid-x > .cell > img");
                const backgroundMoviesItemsCells = document.querySelectorAll(".main__content_start_background > .grid-x > .cell");
                return backgroundMoviesItems.forEach((movieItem: any) => {
                    if (movieItem.getAttribute("src") === null) {
                        movieItem.remove();
                        return backgroundMoviesItemsCells.forEach((cell: any) => {
                            if (!cell.firstChild) cell.remove();
                        });
                    }
                });
            }, 0);
        else return false;
    };
    useEffect(() => {
        function getBackgroundMovies(TmdbAPI: any, movieTitle: string) {
            const tmdb = new TmdbAPI({
                apiKey: data.TmdbAPIsection.apiKey,
                language: data.TmdbAPIsection.language,
            });
            const getTmdbMovie = async () => {
                const tmdbMovieId = await tmdb.getMovieId({
                    title: movieTitle,
                });
                const tmdbMovieInfo = await tmdb.getMovieInfo(tmdbMovieId);
                return await tmdbMovieInfo;
            };
            const movie = getTmdbMovie();
            movie
                .then((movieItem) => {
                    moviesArr.push(movieItem.posterUrl);
                    if (moviesArr.length >= 205) window.setTimeout(() => setBackgroundMovies(moviesArr), 100);
                    else return false;
                })
                .catch((error) => false);
        }
        const dataChecker = window.setInterval(() => {
            if (isThereMoviesData) {
                moviesData.forEach((movieTitle: string) => getBackgroundMovies(Tmdb, movieTitle));
                return clearInterval(dataChecker);
            } else return false;
        }, 0);
        return () => setBackgroundMovies([]);
    }, []);
    useEffect(() => {
        checkBackgroundMoviesRender();
        processBackgroundMovies();
    }, [backgroundMovies]);
    return (
        <section className="main__content_start">
            <div className="main__content_start_wrapper">
                <div className="main__content_start_background">
                    <div className="grid-x">
                        {backgroundMovies.length >= 205
                            ? backgroundMovies.map((moviePosterUrl: string) => {
                                  return (
                                      <div className="small-6 medium-4 large-2 cell" key={`${moviePosterUrl}-${Math.random()}`}>
                                          <img src={moviePosterUrl} alt={moviePosterUrl} className="start__background_item" />
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </div>
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
                            <h2 className="start__content_subtitle_item">
                                {data.subtitle.map((partOfSubtitle: string, index: number) => {
                                    return (
                                        <span key={`${index}-${Math.random()}`} className="subtitle__item_part">
                                            {partOfSubtitle}
                                        </span>
                                    );
                                })}
                            </h2>
                        </div>
                        <div className="start__content_info">
                            <div className="start__content_info_link">
                                <Link to={hrefs.startLink} className="info__link_item">
                                    {data.startLinkText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainStartContentSection;
