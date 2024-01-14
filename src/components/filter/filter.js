import React from "react";
import { useState, useContext } from "react";
import Context from "../../context/Contex";
import MyPagination from "../pagination/pagination";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';

import './filter.css'


const Filter = () => {

    const dataContext = useContext(Context)    
    const [value, setValue] = useState(1970);
    const [valueInput, setValueInput] = useState('')
    const [currentButton, setCurrentButton] = useState(1)
 
    const handleChange = (event) => {
      setValue(event.target.value);
      dataContext.setReleaseYear(value)
    };

    const handleChangeValue = () => {
        if (valueInput) {
            dataContext.setValue(valueInput)
            dataContext.rerenderFilms()            
        } else {
            console.log('ничего нет');
        }
    }

    return (
        <>
            <div className="filter">
                    <div className="header_filter">Filter</div>

                    <div>
                        <TextField 
                            label="Enter your favourite film"
                            variant="outlined"
                            sx={{marginTop : 1}}
                            onChange={(e) => setValueInput(e.target.value)}
                        />                  
                        <Link to='/searchFilms'>
                            <button className="search_films_button" onClick={handleChangeValue}>search</button>
                        </Link>
                    </div>

                    <div className="links">
                        <Link to='/popular'>
                            <button onClick={() => {
                              dataContext.rerenderFilms()
                              setCurrentButton(1)  
                            }} className={`${currentButton === 1 ? 'filter_button active' : "filter_button" }`}>Popular</button>
                        </Link>       
                        <Link to='/rating'>
                            <button onClick={() => {
                              dataContext.rerenderFilms()
                              setCurrentButton(2)  
                            }}  className={`${currentButton === 2 ? 'filter_button active' : "filter_button" }`}>Rating</button>
                        </Link>       
                        <Link to='/favorites'>
                            <button onClick={() => {
                              dataContext.rerenderFilms()
                              setCurrentButton(3)  
                            }}  className={`${currentButton === 3 ? 'filter_button active' : "filter_button" }`}>Favorites</button>
                        </Link>   
                        <Link to='/popular'>
                            <button onClick={() => {
                              dataContext.rerenderFilms()
                              setCurrentButton(4)  
                            }}  className={`${currentButton === 4 ? 'filter_button active' : "filter_button" }`}>Home</button>
                        </Link>         
                    </div>
    
                    <Box >
                        <span className="text_plus">Year of release</span>

                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            onMouseUp={() => dataContext.rerenderFilms()}
                            min={1970}
                            max={2023}
                            defaultValue={dataContext.state.year}
                        />
                    </Box>

                    <MyPagination />
                </div>
        </>
    );
}

export default Filter

