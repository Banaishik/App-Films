import React, { useState, useContext } from 'react';
import Context from '../../context/Contex';
import "./modalWindow.css"

const ModalWindow = () => {

    const [check, setChek] = useState(false)
    const dataContext = useContext(Context)
    const [nameEntry, setNameEntry] = useState(null)
    const [gmailEntry, setGmailEntry] = useState(null)
    const [phoneEntry, setPhoneEntry] = useState(null)
    const [etnryNull, setEntryNull] = useState(0)

    const handleCheck = () => {
        setChek(true)
    }

    const handleNameEntry = (e) => {
        setNameEntry(e.target.value)
    }
    const handleGmailEntry = (e) => {
        setGmailEntry(e.target.value)
    }
    const handlePhoneEntry = (e) => {
        setPhoneEntry(Number(e.target.value) )
        console.log(typeof(e.target.value))
    }

    const checkInputs = () => {
        if (nameEntry === null) {
            setEntryNull(1)
        } else if (gmailEntry === null) {
            setEntryNull(2)
        } else if (phoneEntry === null | isNaN(phoneEntry)) {
            setEntryNull(3)
        } else {
            handleCheck()
        }
    }
    
    return (
        <>
    <div className='wrapper_modal_main'>
        
        <div className='wrapper_modal'>
                {
                    check ?(
                        <div>
                            <div className='success'>
                                <div>
                                    <img src='https://static.tildacdn.com/tild6566-6462-4934-b837-366632346562/tild6535-6634-4131-b.png' alt='200' />   
                                </div>
                                <div><h3>account created successfully</h3></div>
                                
                            </div>

                            <button className='next' onClick={() => {
                                dataContext.goBack()         
                            }}>Next</button> 
                        </div>
                    )  : (
                        <div>
                            <div className='title'>
                                Personal info
                            </div>
                            <div className='description'>
                                you need to enter your personal information to register
                            </div>

                            <span>name</span>
                            <div className="input-container">
                                <input onChange={handleNameEntry} className={`${etnryNull === 1 ? "input_error" : "input_normal"}`} placeholder='first and last name' />
                            </div>

                            <span>Gmail</span>
                            <div className="input-container">
                                <input onChange={handleGmailEntry} className={`${etnryNull === 2 ? "input_error" : "input_normal"}`} placeholder='Gmail'/>
                            </div>
                            
                            <span>Phone number</span>
                            <div className="input-container">
                                <input onChange={handlePhoneEntry} className={`${etnryNull === 3 ? "input_error" : "input_normal"}`} placeholder='+1234567890'/>
                            </div>

                            <button className='next' onClick={() => {
                                checkInputs()
                            }}>Next</button> 

                        </div>
                    )
                }
                               
            </div>

        </div>

        </>
    )
}

export default ModalWindow

