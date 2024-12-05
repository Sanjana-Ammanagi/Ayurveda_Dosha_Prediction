import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Vata.css"; // Reuse the same CSS as the Vata page.


const Pitta = ({ onSubmit }) => {
    const [PittaData, setPittaData] = useState([]);
    const scrollToTop = () => {
        const scrollStep = window.scrollY / 20; // Adjust the divisor for slower or faster scrolling
        const scrollAnimation = () => {
            if (window.scrollY > 0) {
                window.scrollTo(0, window.scrollY - scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        };
        scrollAnimation();
    };
    
    useEffect(() => {
        scrollToTop();
    }, []);

    const questions = [
        "Are you more comfortable in winter than summer?",
        "Among your family members, is your complexion considered fairer?",
        "Does your temperature of oral cavity remain towards upper limit of normal range?",
        "Do you have excessive black moles, freckles, etc., on your skin? Or have you noticed new appearance of black moles often on your skin?",
        "Do you feel excessive hunger & thirst in comparison to others?",
        "Have you experienced premature graying, wrinkling of skin & early baldness?",
        "Do you have soft, scanty, brown hair on your face, body & head?",
        "Do you involve yourself in risky & heroic activities requiring physical strength often?",
        "Do you have the ability to digest large quantities of food easily?",
        "Do you take large quantities of food & drink in comparison to others?",
        "Do you get easily irritated for small/negligible problems in day-to-day life?",
        "Do you consume food more frequently than others? (5-6 times/day)",
        "Do you have soft & loose muscle bulk, especially around the joints?",
        "Do you frequently pass urine & stool in large quantities, and do you perspire more?",
        "Do your friends complain of bad smell being emitted from your body & mouth?",
    ];

    const handleInputChange = (question, value) => {
        // Update the state to include both the question and the corresponding answer
        setPittaData((prevData) => {
            const newData = prevData.filter((item) => item.question !== question);
            return [...newData, { question, answer: value }];
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(PittaData); // Pass collected data back to parent
    };

    return (
        <div>
            <Navbar />
            <div className="vata-container">
                <h1 className="vata-title">Pitta Prakriti</h1>
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <div className="question-box" key={index}>
                            <p>{question}</p>
                            <div className="radio-options">
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value="yes"
                                        onChange={() => handleInputChange(question, 1)}
                                        required
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value="no"
                                        onChange={() => handleInputChange(question, 0)}
                                        required
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    ))}
                    <button type="submit" className="submit-button">
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Pitta;
