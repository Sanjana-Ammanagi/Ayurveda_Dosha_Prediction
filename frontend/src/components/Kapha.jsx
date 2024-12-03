import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";


const Kapha = ({ onSubmit }) => {
    const [kaphaData, setKaphaData] = useState([]);
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const questions = [
        "Whether your skin remains oily throughout the year in comparison to others?",
        "Are your body-hairs & skin shiny, even when no oil or moisturizer is used?",
        "Are you considered attractive among your friends?",
        "Do even mild or trivial injuries on your body make you upset?",
        "Among your family members, is your complexion considered fairer?",
        "Have you got well-built muscles?",
        "Do you change your body posture frequently? (You cannot manage yourself in a stable posture for a long duration.)",
        "Do you have a well-nourished & normally developed body? (You are neither malnourished nor obese.)",
        "Are you lazy and disinterested in activities like morning walk/jogging, swimming, or any type of outdoor games?",
        "Are you slow in consuming the food? (Even after all have left the dining hall, you are still consuming the same amount of food).",
        "When you go to morning walk or college or office, do you walk slowly in comparison to others?",
        "If you are assigned any work, do you take some extra time to start it?",
        "Do you get irritated easily? (For example, when you do not get breakfast on time in your hostel or when the power goes off while watching a cricket match or your favourite movie on television).",
        "Are you late to develop/suffer from symptoms after exposure to common causative factors? (For example, during seasonal changes, when your friends are easily caught up with flu etc., you are still healthy among them).",
        "Does your gait (style of walking) change with respect to speed or manner frequently?",
        "Do you feel hungry more frequently and do you consume more food in comparison to others?",
        "Do you tolerate heat easily?",
        "Do you consume liquids in more quantity and frequency in comparison to others?",
        "Do you perspire less in comparison to others?",
        "Are sounds produced frequently in your joints on movement?",
        "Have you got a good/attractive complexion?",
        "Have you got sweet & pleasant voice?",
    ];

    const handleInputChange = (question, value) => {
        // Update the state to include both the question and the corresponding answer
        setKaphaData((prevData) => {
            const newData = prevData.filter((item) => item.question !== question);
            return [...newData, { question, answer: value }];
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(kaphaData); // Pass collected data back to parent
    };

    return (
        <div className="font">
                <Navbar />
                <div className="vata-container">
                    <h1 className="vata-title">Kapha Dosha Quiz</h1>
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
                Submit
            </button>
        </form>
        </div>
        </div>
    );
};

export default Kapha;
