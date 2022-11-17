
import React from "react";
const Modal = ({open, close}) => {


    return (
       
             <div onClick={(e) => {
                e.stopPropagation()
            }} 
            className="modal-content">
               <div className="flex btw align-center">
                <h1>Connect Wallet:</h1>
                <img src="./images/close.svg" alt="cancel button" />
                </div>
                <hr className="hr" />
                <p>Choose your preferred wallet:</p>
                <div className="wallets">
                    <img src="./images/metamask.png" alt="crypto" />
                </div>
                <div className="wallets">
                    <img src="./images/wallet.png" alt="crypto" />
                </div>
            </div>
            
        )
}

export default Modal