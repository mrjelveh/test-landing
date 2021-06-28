import React from "react";
import './Box.css';
import { ReactComponent as Curve } from "../../assets/img/section-highlight.svg";
import { ReactComponent as Logo } from "../../assets/img/web-logo.svg";
import { ReactComponent as Picture } from "../../assets/img/picture.svg";
import CustomButton from "../custom-button/custom-button.component";

const Columns = () => {
    return   <div>
      <div className='section-header'>
        <Curve className="curve-style" />
        <Logo  className="logo-style"/>
        </div>
        <div className='flex-container'>
     {/* Left column Start */}
    <div style={{marginLeft: "130px"}}>
    <h1>Provide You best Best Ui Service</h1>
    <p> Mobile App Design and Development Studio. You can hire us</p>
    <CustomButton btnStyle="box"><span>Wave Me</span></CustomButton>
   </div>
    {/* Right column Start */}
    <div>
    <Picture/>
    </div>
       </div>
       </div>
};
// export default Bodi;
export default Columns;