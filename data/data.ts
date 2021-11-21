export const data = {
    header: {
        navigation: {
            logo: ["Lazer", "Movies"],
            items: ["Главная", "О сайте", "Фильмы"],
            pages: ["home", "about", "movies", "results", "movie"],
        },
    },
    main: {
        home: {
            startContentSection: {
                title: ["Lazer", "Movies ", "– твоё бесплатное и доступное", " кино"],
                subtitle: ["Переходи и смотри свои любимые", " фильмы", " и", " сериалы"],
                startLinkText: "Посмотреть каталог",
                TmdbAPIsection: {
                    apiKey: "a66a7efdef3cea55209bd221e022385f",
                    language: "ru",
                },
                KinopoiskAPIsection: {
                    apiKey: "de986905-c66e-467c-88b6-1efb8e5eb626",
                    urlTemplate: "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=",
                },
            },
            endContentSection: {
                title: ["Главное ", "–", " доступность"],
                subtitle: ["Доступность каталога достигается за счёт порталов", " Kinopoisk", " и ", "TMDB"],
                endLinkText: "Подробнее о доступности",
                items: ["./images/home/tmdb.svg", "./images/home/kinopoisk.svg"],
                pages: ["https://www.themoviedb.org/", "https://www.kinopoisk.ru/"],
            },
        },
        about: {
            startContentSection: {
                title: ["Lazer", "Movies"],
                subtitle: "Основная информация представлена ниже",
            },
            endContentSection: {
                title: ["Подробнее", " о ", "Lazer", "Movies"],
                subtitle: ["Lazer", "Movies", " – ", "бесплатный портал с", " фильмами", " и ", "сериалами"],
                info: {
                    infoItems: [
                        ["Сайт создан благодаря технологиям ", " TypeScript", " и ", "React"],
                        ["Помимо ", "TypeScript", " и ", "React", " сайт динамически подгружает фильмы благодаря ", " KinopoiskAPI", " и ", " TmdbAPI"],
                        ["Создателем сайта является фронт-энд разработчик ", " Илья Смирнов"],
                        ["Интересно? Можешь заценить его ", " GitHub"],
                    ],
                },
            },
        },
        movies: {
            startContentSection: {
                title: ["Топ ", " самых популярных ", " фильмов", " и", " сериалов", " за всё время", " по версии ", " Kinopoisk"],
                subtitle: "Кликни на любой из фильмов или сериалов, переходи и смотри бесплатно в высоком качестве",
                loadButton: "Подгрузить ещё",
                loadStatus: "Все популярные фильмы с Kinopoisk уже загружены",
                error: "Что-то пошло не так...",
                KinopoiskAPIsection: {
                    apiKey: "de986905-c66e-467c-88b6-1efb8e5eb626",
                    urlTemplate: "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=",
                },
            },
            endContentSection: {
                title: ["Найти ", " фильм", " или ", " сериал", " по ", " ключевым словам"],
                subtitle: ["Поиск ", " осуществляется", " благодаря ", " Kinopoisk"],
                searchText: "Введи ключевые слова...",
                foundMoviesLinkText: "Перейти к результатам поиска",
                searchStatusText: "Ничего не найдено",
                emptySearchText: "Пустой поисковой запрос",
                KinopoiskAPIsection: {
                    apiKey: "de986905-c66e-467c-88b6-1efb8e5eb626",
                    urlTemplatePart_1: "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=",
                    urlTemplatePart_2: "&page=",
                },
            },
        },
        searchMovies: {
            startContentSection: {
                title: ["Результаты ", " поиска", ":"],
                error: "Что-то пошло не так...",
                loadButton: "Подгрузить ещё",
                loadStatus: "Kinopoisk больше не обнаружил совпадений",
                KinopoiskAPIsection: {
                    apiKey: "de986905-c66e-467c-88b6-1efb8e5eb626",
                    urlTemplatePart_1: "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=",
                    urlTemplatePart_2: "&page=",
                },
            },
            endContentSection: {
                endLinkText: "Перейти обратно",
            },
        },
        movieItem: {
            startContentSection: {
                error: "Что-то пошло не так...",
                playerError: "Не удалось загрузить плееры, так бывает, когда сервисы с плеерами не могут найти этот фильм/сериал в своём каталоге",
                nameRuEmpty: "Название недоступно",
                descriptionEmpty: "Описание недоступно",
                movieRating: "Рейтинг: ",
                movieRatingMax: " из 10",
                movieRatingEmpty: "недоступно",
                movieYear: "Год: ",
                movieLink: "Подробнее на Kinopoisk",
                movieInformation: [
                    "Если по каким-то причинам один плеер не работает, воспользуйся другим плеером, обозначенным какой-либо цифрой",
                    "P.S. К сожалению, плееры collaps, iframe, videocdn, kodik, hdvb, bazon, alloha, videospider содержат рекламу, реклама позволяет смотреть фильмы/сериалы бесплатно, если установлен AdBlock, то никакой рекламы возникать не должно",
                    "Приятного просмотра",
                ],
                KinopoiskAPIsection: {
                    apiKey: "de986905-c66e-467c-88b6-1efb8e5eb626",
                    urlTemplate: "https://kinopoiskapiunofficial.tech/api/v2.2/films/",
                },
            },
            endContentSection: {
                endLinkText: "Перейти обратно",
            },
        },
    },
    footer: {
        navigation: {
            logo: ["Lazer", "Movies"],
            items: ["Главная", "О сайте", "Фильмы"],
            pages: ["home", "about", "movies", "results"],
        },
    },
    loader: {
        status: "Загрузка LazerMovies",
        statusDot: ".",
    },
    _404: {
        status_1: 404,
        status_2: "Страница не найдена, или вовсе не существует",
        link: "Вернуться на главную",
    },
};
