import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Vata from "./Vata";
import Pitta from "./Pitta";
import Kapha from "./Kapha";

const Parent = () => {
    const [formData, setFormData] = useState({
        vata: {},
        pitta: {},
        kapha: {},
    });

    const [currentStep, setCurrentStep] = useState(1); // Step 1 = Vata, 2 = Pitta, 3 = Kapha
    const navigate = useNavigate();

    const handleFormSubmit = (dosha, data) => {
        console.log(`Received ${dosha} data:`, data); // Debug log to check
        setFormData((prev) => ({
            ...prev,
            [dosha]: data,
        }));
    };

    const handleNextStep = async () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1); // Move to the next step
        } else {
            // Make the API call only after all steps are completed
            try {
                console.log("Final Form Data to be submitted:", formData);
                const response = await fetch("http://127.0.0.1:8000/predict", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json(); // Parse the JSON response
                console.log("API Response:", result);
                // Navigate to results page with data
                navigate("/results", {
                    state: {
                        predictions: {
                            vata: result.vata_prediction,
                            pitta: result.pitta_prediction,
                            kapha: result.kapha_prediction,
                        },
                    },
                });
            } catch (error) {
                console.error("Error during API call:", error);
            }
        }
    };

    // Effect to trigger API call after formData is updated
    useEffect(() => {
        if (currentStep === 4) {
            handleNextStep(); // Ensure API is called when formData is updated and all steps are complete
        }
    }, [formData]); // Run the effect whenever formData changes

    return (
        <div>
            {currentStep === 1 && (
                <Vata
                    onSubmit={(data) => {
                        handleFormSubmit("vata", data);
                        setCurrentStep(currentStep + 1); // Move to the next step after form submission
                    }}
                />
            )}
            {currentStep === 2 && (
                <Pitta
                    onSubmit={(data) => {
                        handleFormSubmit("pitta", data);
                        setCurrentStep(currentStep + 1); // Move to the next step after form submission
                    }}
                />
            )}
            {currentStep === 3 && (
                <Kapha
                    onSubmit={(data) => {
                        handleFormSubmit("kapha", data);
                        setCurrentStep(currentStep + 1); // Move to the next step after form submission
                    }}
                />
            )}
        </div>
    );
};

export default Parent;
