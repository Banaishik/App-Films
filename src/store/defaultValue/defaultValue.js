
export const initialState = {
    indexFilms : {firstIndex : 1, lastIndex : 4},
    keyForRender : 1,
    filmInfo : {title : null, year : null, info : null},
    filmsSearch : [],
    value : null,
    open : {
        request : false,
        confirm : false,
        user : false
    },
    isModal : null,
    favorite : false,
    currentId : null, 
    ids : [],
    favoritFilms : [],
    idDelete : null,
    year : 1970
}


export const Api = {
    apiPopular : 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    apiRating : 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    apiFavorite : 'https://api.themoviedb.org/3/account/20556095/favorite/movies'
}