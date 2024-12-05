import React from "react";
import "./Results.css"; // Create a CSS file for styling the results
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Results = () => {
    const location = useLocation();
    const { kaphaData } = location.state || {}; // Retrieve the data passed via navigation

    return (
        <div className="font">
            <Navbar />
        <div className="results-container">
            <h1 className="results-title">Your Dosha Analysis</h1>
            <div className="results-card-container">
                {/* Card for Vata */}
                <div className="results-card">
                    <img src="/wind (1).png" alt="Vata" className="dosha-icon" />
                    <h3>VATA</h3>
                    <p>
                        Percentage:
                    </p>
                </div>

                {/* Card for Pitta */}
                <div className="results-card">
                    <img src="/fire (1).png" alt="Pitta" className="dosha-icon" />
                    <h3>PITTA</h3>
                    <p>
                    Percentage:
                    </p>
                </div>

                {/* Card for Kapha */}
                <div className="results-card">
                    <img src="/water-drop.png" alt="Kapha" className="dosha-icon" />
                    <h3>KAPHA</h3>
                    <p>
                    Percentage:
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Results;
