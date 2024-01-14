const actionSetSort = (argumentOne, argumentTwo) => {
    return (
        {
            type : "SET_SORT",
            sort : {
                popular : argumentOne,
                rating : argumentTwo
            }
        }        
    )
}

const actionSetIndexFilms = (index) => {
    return (
        {
            type : "SET_INDEX_FILM",
            indexFilms :  {
                firstIndex : index*3-3,
                lastIndex : index*3
            }
        }
    )
}

const actionSetRerenderKey = () => {
    return (
      {type : "SET_KEY_RERENDER"}
    ) 
}

const actionSetFilmInfo = (array) => {
    return (
        {
          type : "SET_FILM_INFO",
          filmInfo : {
              title : array.original_title,
              year : array.release_date,
              info : array.overview
          }
        }      
    ) 
}

const actionSetFilmSearch = (film) => {
    return (
        {
            type : "SET_FILM_SEARCH",
            filmSearch : film
        }
      )
}

const actionSetValue = (value) => {
    return (
        {
          type : "SET_VALUE",
          value : value
        }
    ) 
}

const actionSetOpen = (openArray) => {
    return (
        {
            type : "SET_OPEN",
            open : {
                request : !openArray.request,
                confirm : false,
                user : false
            }
        }
      ) 
}

const actionSetFavorite = (favorite) => ({
    type : "SET_FAVORITE", 
    favorite : favorite
}) 

const actionSetCurrentId = (id) => {
    return (
        {
          type : 'SET_CURRENT_ID',
          currentId : id
        }   
    ) 
}

const actionSetArrayIds = (currentIds) => {
    return (
        {
            type : 'SET_ARRAY_ID',
            ids : [...currentIds]
        }
    ) 
}

const actionSetFavoriteFilms = (array) => {
    return (
        {
            type : 'SET_FAVORITE_FILMS',
            favoritFilms :  array
        }
    ) 
}

const actionSetIdDelete = (id) => {
    return (
      {
          type : 'SET_ID_DELTE',
          idDelete : id
      }
    )
}

const actionSetIsModal = (body) => {
    return ({
        type : "SET_IS_MODAL",
        isModal : body
    })
}

const actionSetReleaseYears = (year) => {
    return ({
        type : "SET_RELEASE_YEARS",
        year : year
    })
}

export { 
    actionSetSort,
    actionSetIndexFilms,
    actionSetRerenderKey,
    actionSetFilmInfo,
    actionSetFilmSearch,
    actionSetValue,
    actionSetOpen,
    actionSetFavorite,
    actionSetCurrentId,
    actionSetArrayIds,
    actionSetFavoriteFilms,
    actionSetIdDelete,
    actionSetIsModal,
    actionSetReleaseYears
}