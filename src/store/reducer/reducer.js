
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SORT" : 
            return {
                ...state,
                sort : action.genre
            }
        case "SET_INDEX_FILM" : 
            return {
                ...state,
                indexFilms : action.indexFilms
            }
        case "SET_KEY_RERENDER" :
            return {
                ...state,
                keyForRender : state.keyForRender + 1
            }
        case "SET_FILM_INFO" :
            return {
                ...state,
                filmInfo : action.filmInfo
            }

        case "SET_FILM_SEARCH" :
            return {
                ...state,
                filmInfo : action.filmSearch
            }
        case "SET_VALUE" :
            return {
                ...state,
                value : action.value
            }   
        case "SET_OPEN" :
            return {
                ...state,
                open : action.open
            }   
        case "SET_IS_MODAL" :
            return {
                ...state,
                isModal : action.isModal
            }
        case "SET_FAVORITE" :
            return {
                ...state,
                favorite : action.favorite
            }         
            
        case "SET_CURRENT_ID" :
            return {
                ...state,
                currentId : action.currentId
            }    

        case "SET_ARRAY_ID" :
            return {
                ...state,
                ids : action.ids
            }    

        case "SET_FAVORITE_FILMS" :
            return {
                ...state,
                favoritFilms : action.favoritFilms
            }    

        case "SET_ID_DELTE" :
            return {
                ...state,
                idDelete : action.idDelete
            }    
        case "SET_RELEASE_YEARS" :
            return {
                ...state,
                year : action.year
            }
            
        default : 
            return state
    }
}

export default reducer