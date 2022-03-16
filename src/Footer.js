import React from "react";
import drivelogo from './assets/images/driven-ecosystem.png'
import polylogo from './assets/images/polygon_logo.png';

function Footer() {
    return (<>
        <div className="container pb-4">
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-between w-75">
                    <div><img src={drivelogo} alt="drive logo" width="70%"></img></div>
                    <div className="d-flex align-items-center"><span className="poweredby">powered by :</span><img src={polylogo} alt="plogo" width="50%"></img></div>
                </div>
            </div>
        </div>
    </>);
}

export default Footer;