import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { jsPDF } from "jspdf";
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

    // Generate PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        
        // Set Title and Style
        doc.setFont("helvetica", "normal");
        doc.setFillColor("#593919");
        doc.setFontSize(20);
        doc.setTextColor(53, 55, 78); // Dark gray for the title
        doc.text("DoshaBloom", 10, 20);
        
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Dosha Analysis Results", 10, 40);
        
        // Add a line separator after title
        doc.setLineWidth(0.5);
        doc.line(10, 42, 200, 42); // Draw a line below the title
        
        // Dosha percentages
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Black text color
        
        doc.text(`Vata: ${predictions.vata.toFixed(2)}%`, 10, 55);
        doc.text(`Pitta: ${predictions.pitta.toFixed(2)}%`, 10, 65);
        doc.text(`Kapha: ${predictions.kapha.toFixed(2)}%`, 10, 75);
        
        // Add Dominant Dosha Section
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Dominant Dosha", 10, 90);

        doc.setLineWidth(0.5);
        doc.line(10, 92, 200, 92);
        
        // Add the dominant dosha result (e.g., Vata, Pitta, Kapha)
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Your dominant dosha is: ${highestDosha.toUpperCase()}`, 10, 100);
        
        // Section for Balancing Rituals
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Balancing Rituals for Your Dominant Prakriti", 10, 120);
        
        // Draw a line separator between sections
        doc.line(10, 122, 200, 122); // Draw a line below this section heading
        
        // Add remedies list with custom bullet points
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        remedies[highestDosha].forEach((remedy, index) => {
            const yPosition = 130 + index * 10;
            doc.text(`${index + 1}. ${remedy}`, 10, yPosition);
        });
        
        // Add footer with a small note
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        doc.text("Thank you for using DoshaBloom! Stay balanced.", 10, doc.internal.pageSize.height - 20);
        
        // Add a page number at the bottom
        doc.setFont("helvetica", "normal");
        doc.text(`Page ${doc.internal.getNumberOfPages()}`, 180, doc.internal.pageSize.height - 10);
        
        // Save the PDF
        doc.save("dosha_analysis_results.pdf");
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

                            {/* Download Icon */}
                            <button
                                className="download-button"
                                onClick={generatePDF}
                                style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "20px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                                
                            >
                                <img
                                    src="/download.png"
                                    alt="Download"
                                    style={{ width: "20px", height: "20px" }}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Results;
