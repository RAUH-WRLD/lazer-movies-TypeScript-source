import React, {useState, useEffect} from "react";
interface Props {
    data: any;
    checkLoading: any;
}
const MainStartContentSection: React.FunctionComponent<Props> = (props) => {
    const {data, checkLoading} = props;
    const movieId = data.movieId;
    const movieData = data.data;
    const [movieInfoArr, setMovieInfoArr] = useState([]);
    async function getMovieInfo(movieId: number) {
        const apiKey = movieData.KinopoiskAPIsection.apiKey;
        const urlTemplate = movieData.KinopoiskAPIsection.urlTemplate;
        const url = `${urlTemplate}${movieId}`;
        const movies = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": apiKey,
            },
        });
        return await movies.json();
    }
    const loadClassName = (moviePlayer: any) => {
        moviePlayer?.classList.remove("movie__player_loading");
        return moviePlayer?.classList.add("movie__player_loaded");
    };
    const removeAd = (player: any) => {
        const moviePlayer = document.querySelector(".movie__player");
        const url = player.getAttribute("src");
        player.setAttribute("src", `${url}?noads=1`);
        return setTimeout(() => {
            player.classList.add("movie_loaded");
            return loadClassName(moviePlayer);
        }, 500);
    };
    const checkPlayerSrc = (player: any, playerOuter: any, moviePlayer: any) => {
        if (player?.hasAttribute("src")) removeAd(player);
        if (!player?.hasAttribute("src")) {
            player?.remove();
            const playerError = document.createElement("p");
            playerError.classList.add("player__error");
            playerError.innerHTML = `${movieData.playerError}`;
            playerOuter?.append(playerError);
            return setTimeout(() => loadClassName(moviePlayer), 100);
        } else return false;
    };
    const processVideoPlayerButtons = () => {
        const playerButtons = document.querySelectorAll("#yohoho-buttons > div");
        const player = document.querySelector("#yohoho-iframe");
        const playerOuter = document.querySelector("#yohoho");
        const moviePlayer = document.querySelector(".movie__player");
        if (playerButtons.length > 0)
            return playerButtons.forEach((button: any) => {
                button.addEventListener("click", () => {
                    moviePlayer?.classList.remove("movie__player_loaded");
                    moviePlayer?.classList.add("movie__player_loading");
                    return checkPlayerSrc(player, playerOuter, playerButtons);
                });
            });
        else return false;
    };
    const videoPlayer = () => {
        const script = document.createElement("script");
        script.src = "//yohoho.cc/yo.js";
        script.async = true;
        script.defer = true;
        return document.body.append(script);
    };
    const checkPlayer = () =>
        setTimeout(() => {
            const player = document.querySelector("#yohoho-iframe");
            const playerOuter = document.querySelector("#yohoho");
            const moviePlayer = document.querySelector(".movie__player");
            return checkPlayerSrc(player, playerOuter, moviePlayer);
        }, 4000);
    useEffect(() => {
        getMovieInfo(movieId).then((movieInfo) => {
            const movieInfoArr: any = [movieInfo];
            return setMovieInfoArr(movieInfoArr);
        });
        videoPlayer();
        const getRandomDelay = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
        const processLoading = () => setTimeout(() => checkLoading(true), getRandomDelay(1000, 2000));
        processLoading();
        checkPlayer();
    }, []);
    useEffect(() => {
        processVideoPlayerButtons();
    });
    return (
        <section className="main__content_start">
            <div className="main__content_start_wrapper">
                <div className="grid-container">
                    <div className="start__content">
                        <div className="start__content_movie">
                            {movieInfoArr.length > 0 ? (
                                <div className="movie__info">
                                    <div className="grid-x">
                                        <div className="small-12 medium-12 large-6 cell">
                                            <div className="movie__info_image">
                                                {movieInfoArr.map((movieInfo: any) => {
                                                    return <img src={movieInfo.posterUrl} alt={movieInfo.nameOriginal} key={`${movieInfo}-${Math.random()}`} className="image__item" />;
                                                })}
                                            </div>
                                        </div>
                                        <div className="small-12 medium-12 large-6 cell">
                                            <div className="movie__info_text">
                                                <div className="movie__info_text_title">
                                                    {movieInfoArr.map((movieInfo: any) => {
                                                        return <React.Fragment key={`${movieInfo}-${Math.random()}`}>{movieInfo.nameRu ? <h3 className="title__item">{movieInfo.nameRu}</h3> : <h3 className="title__item">{movieData.nameRuEmpty}</h3>}</React.Fragment>;
                                                    })}
                                                </div>
                                                <div className="movie__info_text_item">
                                                    {movieInfoArr.map((movieInfo: any) => {
                                                        return (
                                                            <React.Fragment key={`${movieInfo}-${Math.random()}`}>
                                                                {movieInfo.description ? <p className="text__item">{movieInfo.description}</p> : <p className="text__item">{movieData.descriptionEmpty}</p>}
                                                                <p className="text__item">
                                                                    <span className="text__item_part">{movieData.movieRating}</span>
                                                                    {movieInfo.ratingKinopoisk ? (
                                                                        <span className="text__item_part">
                                                                            {movieInfo.ratingKinopoisk}
                                                                            {movieData.movieRatingMax}
                                                                        </span>
                                                                    ) : (
                                                                        <span className="text__item_part">{movieData.movieRatingEmpty}</span>
                                                                    )}
                                                                </p>
                                                                <p className="text__item">
                                                                    <span className="text__item_part">{movieData.movieYear}</span>
                                                                    <span className="text__item_part">{movieInfo.year}</span>
                                                                </p>
                                                                <a href={movieInfo.webUrl} target="_blank" className="text__item_link">
                                                                    {movieData.movieLink}
                                                                </a>
                                                            </React.Fragment>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p className="movie__error">{movieData.error}</p>
                            )}
                            <div className="movie__player movie__player_loading">
                                <div id="yohoho" data-kinopoisk={movieId} data-resize="1" data-separator="," data-player="collaps,iframe,videocdn,kodik,hdvb,bazon,alloha,videospider" data-bg="#0f0f0f" data-loading={false}></div>
                            </div>
                            <div className="movie__information">
                                {movieData.movieInformation.map((partOfInformation: string, index: number) => {
                                    return (
                                        <p key={`${index}-${Math.random()}`} className="information__item_part">
                                            {partOfInformation}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainStartContentSection;
