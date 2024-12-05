import React from "react";
import "./AboutUs.css"; // CSS for custom styling
import Navbar from "./Navbar";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img 
          src="/background.png" 
          alt="Background" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
            backgroundSize: "cover",
          }} 
        />
      <Navbar />
      <div className="background-image">
        {/* Background image */}
        
        {/* Semi-transparent overlay for readability */}
        <div className="overlay"></div>

        {/* Content Container */}
        <div className="content-container">
          {/* Header Section */}
          <header className="header">
            <h1>About Us</h1>
            <p>
              At Ayurved Dosha Prediction, we aim to connect ancient Ayurvedic wisdom with modern technology to bring personalized wellness to everyone.
            </p>
          </header>

          {/* Mission Section */}
          <section className="mission-section">
            <div className="mission-text">
              <h2>Our Mission: Empowering People Through Personalized Ayurvedic Insights</h2>
              <p>
                Our mission is to help individuals discover their unique dosha and understand its implications for their health and lifestyle, using reliable and accessible tools.
              </p>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="story-section">
            <h2>Our Story</h2>
            <div className="story-content">
              <img src="/main_image1.jpg" alt="Our Team" />
              <p>
                We were inspired to create Ayurved Dosha Prediction after witnessing the power of Ayurveda in improving well-being. Since our inception, we've worked tirelessly to make Ayurvedic knowledge more interactive and personalized.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

