import React from "react";

import "./DarkMode.css";
import Sun from './Sun.svg?react'
import Moon from './Moon.svg?react'




const DarkMode = () => {

    const SetDarkTheme=()=>{
        document.querySelector("body").setAttribute("data-theme","dark")
        localStorage.setItem('selectedTheme','dark')
    }
    const SetLightTheme=()=>{
        document.querySelector("body").setAttribute("data-theme","light")
        localStorage.setItem('selectedTheme','light')
    }
    
    const selectedTheme=localStorage.getItem('selectedTheme')
    if (selectedTheme==='light'){
        SetLightTheme()
        
    }else{
        SetDarkTheme()
    }


    const toogleTheme=(e)=>{
        if (e.target.checked){
            SetDarkTheme()
        }
        else{
            SetLightTheme()
        }
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toogleTheme}
                defaultChecked={selectedTheme!=='light'}
               
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
