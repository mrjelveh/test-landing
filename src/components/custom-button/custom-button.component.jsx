import React from 'react';
import './custom-button.styles.css'




const CustomButton = ({firstButton, children, btnStyle}) => { 
     
return (
  <button   className={`${btnStyle} First-button`}   onClick={firstButton}>
    {children}
    </button>
)
}
     
 export default CustomButton; 



