import React from "react";
import { MdBrightness3 } from "react-icons/md";


const Header = ({ handleToggleDarkMode})=>{
    return(
        <div className="header">
            <h1>My Tasks</h1>
            <>
            
            <button 
            onClick={()=>
                handleToggleDarkMode(
                    (previousDarkMode)=>!previousDarkMode
                )
            }
            className="save toggle"><MdBrightness3 size='1.4rem'/></button>
            </>
        </div>
    );
};
export default Header;