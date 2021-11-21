export const hrefs = {
    header: {
        navigation: {
            logo: "/home",
            items: ["/home", "/about", "/movies"],
        },
    },
    main: {
        home: {
            startContentSection: {
                startLink: "/movies",
            },
            endContentSection: {
                endLink: "/about",
            },
        },
        about: {
            endContentSection: {
                endLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://www.typescriptlang.org/", "https://reactjs.org/", "https://kinopoiskapiunofficial.tech/", "https://www.themoviedb.org/documentation/api", "https://github.com/RAUH-WRLD"],
            },
        },
        movies: {
            endContentSection: {
                foundMoviesLink: "/results",
            },
        },
        searchMovies: {
            endContentSection: {
                endLink: "/movies",
            },
        },
        movieItem: {
            endContentSection: {
                endLink: "/movies",
            },
        },
    },
    footer: {
        navigation: {
            logo: "/home",
            items: ["/home", "/about", "/movies"],
        },
    },
};
