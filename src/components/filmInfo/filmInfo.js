import React, {useState, useEffect, useContext} from "react"
import Context from "../../context/Contex";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./filmInfo.css"

const theme = createTheme({
    typography : {
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
        fontSize: 16,
    }
})

const FilmInfo = () => {

    const dataContext = useContext(Context)
    let currentId = dataContext.state.currentId 
    let favorite = dataContext.state.ids

    const [data, setData] = useState([])
    const [actors, setActors] = useState([])
    const [isFavorite, setIsFavorite] = useState()
    let options = ['Вариант 1', 'Вариант 2', 'Вариант 3'];

    const getDetailsFilms = async (id) => {
        try {
            const response = await fetch (`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                method : "GET", 
                headers : {
                    'Authorization' : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVhYzY5MGEzZmMzYzVmNzBhN2UzY2M3NmRjZTZlNCIsInN1YiI6IjY1MjZmZTI0Y2VkYWM0MDBmZjI5NGZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hAyDyRXVdGyp06Q-Mv3IsnULszwbHefq20pxibTyQ7c `,
                    'Content-Type' : 'application/json'
                }
            })

            const result = await response.json()
            setData(result)            
        }
        catch (error) {
            console.log(error);
        }

    }

    const getActorsFilms = async (id) => {
        try {
            const response = await fetch (`https://api.themoviedb.org/3/movie/${id}/credits`, {
                method : "GET", 
                headers : {
                    'Authorization' : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVhYzY5MGEzZmMzYzVmNzBhN2UzY2M3NmRjZTZlNCIsInN1YiI6IjY1MjZmZTI0Y2VkYWM0MDBmZjI5NGZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hAyDyRXVdGyp06Q-Mv3IsnULszwbHefq20pxibTyQ7c `,
                    'Content-Type' : 'application/json'
                }
            })
            const result = await response.json()

            if (result.cast === undefined) {
                alert('error')
            } else {
                const mainActors = result.cast.slice(0, 4)
                setActors(mainActors)      
            }            
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleFavorite = (id) => {
        dataContext.addFavoriteFilm(id)

        if (favorite.indexOf(currentId) === -1) {
            setIsFavorite(isFavorite)
        } else {
            setIsFavorite(!isFavorite)
        }
    }

    useEffect(() => {
        try {
            getDetailsFilms(currentId)
            getActorsFilms(currentId)                 
        }
        catch (error) {
            console.log(`error with fetch request ${error}`);
        }
    }, [])

    useEffect(() => {
        try {
            if (favorite.indexOf(currentId) === -1) {
                setIsFavorite(isFavorite)
            } else {
                setIsFavorite(!isFavorite)
            }
        }
        catch(error) {
            console.log(error);
        }
    }, [favorite, currentId])


    return (
        <>
            <ThemeProvider theme={theme}>
                <div style={{marginBottom : "350px"}}>
                    <h1>
                        <ArrowBackIcon  
                            sx={{
                                cursor: "pointer", marginRight : "20px",
                                margin : "0 20px",
                                transition: "transform 0.2s ease-in-out", 
                                "&:hover": {
                                transform: "scale(1.2)", 
                                },
                            }} 
                            onClick={dataContext.goBack} 
                        />
                        <spam style={{marginRight : "20px"}}>{data.title } </spam>
                        {
                            isFavorite ? (
                                <div className="icons_favorite" onClick={() => handleFavorite(currentId)}>
                                    <img src="https://cdn.icon-icons.com/icons2/3997/PNG/512/archive_bookmark_save_appreciation_support_appreciate_icon_254064.png" />
                                </div>                 
                            ) : (
                                <div className="icons_favorite" onClick={() => handleFavorite(currentId)}>
                                    <img src="https://cdn.icon-icons.com/icons2/3997/PNG/512/archive_bookmark_save_appreciation_support_appreciate_icon_254080.png" />
                                </div>    
                            )
                        }
                    </h1>                
                    <div  style={{display: 'inline-block'}}>

                        <div className="Details" style={{margin : '65px'}} >
                            <h1 sx={{ font : "16px roboto, sans-serif"}}>Details</h1>
                            <div><span className="static_info">Year :  </span>   <span className="static_result">{data.release_date}</span>     </div>                 
                            <div><span className="static_info">Time :  </span>   <span className="static_result">{data.runtime} minutes</span>  </div>                
                            <div><span className="static_info">Budget :</span>   <span className="static_result">{data.budget}</span>           </div>              
                        </div>
                         
                        <div className="Details" style={{margin : '65px'}} >
                            <h1 sx={{ font : "16px roboto, sans-serif"}}>Actors</h1>
                            {
                                actors.map(actor => <div  className="static_info">{actor.name}</div>)
                            }                
                        </div>
                        
                    </div>
                    <div  style={{display: 'inline-block', margin : "0 0 0 220px"}}> 
                        <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}  alt="myImage film" />
                    </div>    
                </div>
            </ThemeProvider>
        </>
    )
}


export default FilmInfo