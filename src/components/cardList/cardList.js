import React, {useState,  useEffect, useContext } from 'react';
import Context from '../../context/Contex';
import CardItem from '../cardItem/cardItem';
import { Loading } from '../loading/loading';
import {createTheme , ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography : {
      fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
      fontSize: 16,
  }
})

const CardList = ({api}) => {

    const dataContext = useContext(Context)
    const [films, setFilms] = useState(null)
    const [index, setIndex] = useState(dataContext.state.indexFilms)

    const fethcRequest = async (api) => {
      try {
        const response = await fetch( api, {
          method : "GET",
          headers : {
            'accept' : 'application/json',
              'Content-type': "application/json",
              'Authorization' : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVhYzY5MGEzZmMzYzVmNzBhN2UzY2M3NmRjZTZlNCIsInN1YiI6IjY1MjZmZTI0Y2VkYWM0MDBmZjI5NGZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hAyDyRXVdGyp06Q-Mv3IsnULszwbHefq20pxibTyQ7c `
          }
        })
  
        const result = await response.json()

        let filteredMovies = dataContext.filteredMovies(result.results, dataContext.state.year)
        const currentFilms = filteredMovies.slice(index.firstIndex, index.lastIndex)
        setFilms(currentFilms)    
      }
      catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      fethcRequest(api)
    }, [])

    const searchFilm = (id, e) => {
      e.preventDefault()
      let newObject = films.filter(film => film.id === id)
      
      dataContext.setFilmInfo(...newObject)
      dataContext.setCurrentId(id)
    }

    return (
        <>
        <ThemeProvider theme={theme}>
          <div style={{display: "inline-block", margin : "15px"}} >
              { 
                films ? (
                  films.map( film => <CardItem title={film.original_title} url={film.poster_path} id={film.id} searchFilm={searchFilm} />) 
                ) : (
                  <Loading/>
                )
              }               
          </div>          
        </ThemeProvider>

        </>

    )
}

export default CardList