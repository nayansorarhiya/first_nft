import React from "react";
import logo from './assets/images/cyberknight.png';
import { Button } from 'react-bootstrap';
function Body() {
    return (<>
        <div className="container">
            <div className="d-flex justify-content-center align-items-center ">
                <div className="text-center w-100  justify-content-center">
                    <div>
                        <img src={logo} alt="logo" width="25%"></img>
                    </div>
                    <div className="mt-3">
                        <p className="text-light title_home"> 10,000 unique Cyber<br /> Knights NFTs to protect<br /> the Crypto Realm.</p>
                    </div>
                    {/* <div className="d-flex justify-content-center">
                        <button className="btn1 text-dark me-5">Mink your nft</button>
                        <button className="btn2">View on opensea</button>
                    </div> */}
                    <div className="d-flex justify-content-center gap-5 pt-2 pb-2">
                        <Button className="btn1" >Mint your nft</Button>
                        <Button className="btn2">View on opensea</Button>
                    </div>
                    <div className="pt-5 pb-5">
                        <span className="mint_total">Total Minted</span><br/>
                        <span className="mint_count">5,658</span><br/>
                        <span className="mint_text">of total 10,000</span>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Body;