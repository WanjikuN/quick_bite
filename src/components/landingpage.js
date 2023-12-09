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
                <div id="background">
                
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            <div className="mid-content">
                <h3>The quickest way to find the perfect bite</h3>
                <button onClick={openModal}>Open Map</button>  
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