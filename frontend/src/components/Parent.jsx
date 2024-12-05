import React, { useState } from "react";
import Vata from "./Vata";
import Pitta from "./Pitta";
import Kapha from "./Kapha";

const Parent = () => {
    const [formData, setFormData] = useState({
        vata: {},
        pitta: {},
        kapha: {}
    });

    const [currentStep, setCurrentStep] = useState(1); // Track current quiz step (1 for Vata, 2 for Pitta, 3 for Kapha)

    const handleFormSubmit = (dosha, data) => {
        setFormData((prevState) => ({
            ...prevState,
            [dosha]: data,

        }));
        
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1); // Move to next quiz step
    };

    const handleFinalSubmit = () => {
        console.log("Final Form Data to be submitted:", formData);
        // Send `formData` to the backend
        fetch("http://your-backend-url.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Model Prediction Result:", result);
            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div>
            {currentStep === 1 && (
                <Vata onSubmit={(data) => {
                    handleFormSubmit("vata", data);
                    handleNextStep(); // Go to next step (Pitta)
                }} />
            )}
            {currentStep === 2 && (
                <Pitta onSubmit={(data) => {
                    handleFormSubmit("pitta", data);
                    handleNextStep(); // Go to next step (Kapha)
                }} />
            )}
            {currentStep === 3 && (
                <Kapha onSubmit={(data) => {
                    handleFormSubmit("kapha", data);
                    handleFinalSubmit(); // Submit all data after Kapha
                }} />
            )}

            {/* Show Submit All button after Kapha quiz is completed */}
            {/* {currentStep >=3 && (
                <button onClick={handleFinalSubmit}>Submit All</button>
            )} */}
        </div>
    );
};

export default Parent;
