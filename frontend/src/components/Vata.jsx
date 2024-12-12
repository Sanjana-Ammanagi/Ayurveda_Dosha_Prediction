import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Vata.css";

const Vata = ({ onSubmit }) => {
    const questions = [
        "Whether your skin remains dry throughout the year in comparison to others?",
        "Is your body undernourished/ emaciated?",
        "Have you got rough, low, broken or obstructed voice?",
        "Does your sleep last less than 6 hours per day? Or can your sleep be disturbed easily?",
        "Do you change walking speed & style from time to time?",
        "Do you keep changing your food habits from time to time?",
        "Do you keep changing your walking / jogging habit from time to time?",
        "Do you keep your joints, eyes, eyebrows, jaw, lips, tongue, head, Shoulder, hands & feet frequently moving?",
        "Are you considered a talkative among your friends?",
        "Do you have prominent veins & tendons all over the body?",
        "Do you generally start the work assigned to you immediately?",
        "Do you get irritated easily? (E.g., when you do not get breakfast on time in your hostel or when the power goes off while watching a cricket match or your favourite movie over television)",
        "Do you get frightened easily?",
        "Do you make friends easily & also lose them easily?",
        "Do you generally learn things quickly? Or Do you have a good grasping power?",
        "Is your long term memory weak? (E.g., you can remember only few names of your friends at your primary school).",
        "Are you more comfortable in summer? Or Do you prefer hot/warm drinks over cold drinks?",
        "Do you generally develop symptoms immediately after exposure to common causative factors?(You are easily caught by diseases like flu, allergy during seasonal changes).",
        "Do you shiver in winter season more than your friends?",
        "Do you often feel stiffness in your body after exercise, travelling?",
        "Are your nails, teeth, hands, feet and hairs on your body and face rough?",
        "Do you have cracks on the body especially on the heels?",
        "Are some crackling sounds produced in your joints during movements?",
    ];

    // Initialize state with all questions and default answers
    const [VataData, setVataData] = useState(
        questions.map((question) => ({ question, answer: null }))
    );

    const scrollToTop = () => {
        const scrollStep = window.scrollY / 20;
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

    const handleInputChange = (index, value) => {
        // Update the specific question's answer while maintaining the order
        setVataData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index].answer = value;
            return updatedData;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(VataData); // Pass the collected data back to the parent
    };

    return (
        <div>
            <Navbar />
            <div className="vata-container">
                <h1 className="vata-title">Vata Prakriti</h1>
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <div className="question-box" key={index}>
                            <p>{question}</p>
                            <div className="radio-options">
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value="1"
                                        checked={VataData[index].answer === 1}
                                        onChange={() => handleInputChange(index, 1)}
                                        required
                                    />
                                    <p>Yes</p>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value="0"
                                        checked={VataData[index].answer === 0}
                                        onChange={() => handleInputChange(index, 0)}
                                        required
                                    />
                                    <p>No</p>
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

export default Vata;
