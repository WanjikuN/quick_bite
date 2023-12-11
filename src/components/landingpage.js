import LeafletMap from "./LaefletMap";
import React, { useState } from 'react';

export default function LandingPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return(
        <div id="landing-page">
            <img src="./pizza2.png" class="pizza2" alt="pizza"/>
                
            <div className="mid-content">
                <h1 className="typing-animation">The quickest way to find the perfect bite.</h1>
                <div class='pin'></div>
                <button onClick={openModal}>Search Delivery address</button>  
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                <div className="modal">
                    {/* Close button */}
                    <button className="close-button" onClick={closeModal}>
                    Close Map
                    </button>
                    <LeafletMap />
                    </div>
                </div>
                )}
        </div> 
    )
}