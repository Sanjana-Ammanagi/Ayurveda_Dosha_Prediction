import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Results.css";

const Results = () => {
    const location = useLocation();
    const { predictions } = location.state || {};

    const [showModal, setShowModal] = useState(false);

    if (!predictions) {
        return <div>No data available</div>;
    }

    // Determine which dosha is the highest
    const doshas = {
        vata: predictions.vata,
        pitta: predictions.pitta,
        kapha: predictions.kapha,
    };

    const highestDosha = Object.keys(doshas).reduce((a, b) => (doshas[a] > doshas[b] ? a : b));

    // Define remedies for each dosha
    const remedies = {
        vata: [
            "Practice yoga and meditation to calm the mind.",
            "Eat warm, cooked meals and avoid cold or raw food.",
            "Keep a regular routine for sleep and eating.",
        ],
        pitta: [
            "Avoid excessive heat, and stay cool during hot weather.",
            "Opt for calming foods like cucumbers and dairy products.",
            "Practice relaxation techniques like deep breathing.",
        ],
        kapha: [
            "Engage in regular physical activity to stay active.",
            "Avoid overeating and focus on light, healthy meals.",
            "Try to wake up early and avoid long naps during the day.",
        ],
    };

    return (
        <div className={`font ${showModal ? "blurBackground" : ""}`}>
            <Navbar />
            <div className="results-container">
                <h1 className="results-title">Your Dosha Analysis...</h1>

                <div className="results-card-container">
                    <div className="results-card">
                        <img src="/wind.png" alt="Vata" className="dosha-icon" />
                        <h3>VATA</h3>
                        <h2 style={{ color: "#593919" }}>
                            {predictions?.vata ? predictions.vata.toFixed(2) + "%" : "N/A"}
                        </h2>
                    </div>
                    <div className="results-card">
                        <img src="/fire.png" alt="Pitta" className="dosha-icon" />
                        <h3>PITTA</h3>
                        <h2 style={{ color: "#593919" }}>
                            {predictions?.pitta ? predictions.pitta.toFixed(2) + "%" : "N/A"}
                        </h2>
                    </div>
                    <div className="results-card">
                        <img src="/water-drop.png" alt="Kapha" className="dosha-icon" />
                        <h3>KAPHA</h3>
                        <h2 style={{ color: "#593919" }}>
                            {predictions?.kapha ? predictions.kapha.toFixed(2) + "%" : "N/A"}
                        </h2>
                    </div>
                </div>

                {/* Button to show modal */}
                <button
                    className="show-remedies-button"
                    onClick={() => setShowModal(true)}
                >
                    Show Balancing Rituals
                </button>

                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button
                                className="close-modal-button"
                                onClick={() => setShowModal(false)}
                            >
                                ×
                            </button>
                            <h2>Your Dominant Prakriti: {highestDosha.toUpperCase()}</h2>
                            <h3>Balancing Rituals</h3>
                            <ul>
                                {remedies[highestDosha].map((remedy, index) => (
                                    <li key={index}>{remedy}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;
