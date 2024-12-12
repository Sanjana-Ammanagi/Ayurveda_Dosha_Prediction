import React, { useState } from "react";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser"; // Import EmailJS library
import "./Consultation.css";

const Consultation = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "", // Added age field
        date: "",
    });

    const timeSlots = {
        Morning: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
        Afternoon: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
        Evening: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
        setSelectedTime("");
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedPeriod || !selectedTime) {
            alert("Please complete all fields ");
            return;
        }

        // Prepare template parameters
        const templateParams = {
            doctor_name: "Dr. Hitesh N B",
            doctor_email: "ruchithama57@gmail.com",
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            user_age: formData.age, // Include age in the template parameters
            appointment_date: formData.date,
            appointment_period: selectedPeriod,
            appointment_time: selectedTime,
        };

        try {
            const response = await emailjs.send(
                "service_sypw8vn", // Your EmailJS Service ID
                "template_hhlih4p", // Your EmailJS Template ID
                templateParams,
                "4Z68S3xGW9TmPjKmz" // Your EmailJS Public Key
            );

            if (response.status === 200) {
                alert("Appointment confirmed and email sent to the doctor!");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            alert("Failed to confirm the appointment. Please try again.");
        }
    };

    return (
        <div className="consultation-page">
            <Navbar />
            <header
                className="hero-section"
                style={{
                    backgroundImage: `url('/cc.png')`,
                    backgroundSize: "cover",
                }}
            >
                <h1>Book a Consultation with an Expert</h1>
                <p>Personalized guidance for your well-being journey.</p>
            </header>

            <section className="appointment-form">
                <h2>Appointment Details</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />

                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                    />

                    <label>Preferred Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />

                    <label>Time Slot</label>
                    <select value={selectedPeriod} onChange={handlePeriodChange} required>
                        <option value="" disabled>
                            Select a Period
                        </option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>

                    {selectedPeriod && (
                        <select value={selectedTime} onChange={handleTimeChange} required>
                            <option value="" disabled>
                                Select a Time
                            </option>
                            {timeSlots[selectedPeriod].map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    )}

                    <button type="submit" className="btn-submit">
                        Confirm Appointment
                    </button>
                </form>
            </section>

            <section className="experts">
                <h2>Meet Our Experts</h2>
                <div className="expert-card">
                    <h3>Dr. Hitesh NB</h3>
                    <p>Ayurvedic Specialist</p>
                    <p>Email: hitesh@gmail.com</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Ayurvedic Consultation</p>
            </footer>
        </div>
    );
};

export default Consultation;
