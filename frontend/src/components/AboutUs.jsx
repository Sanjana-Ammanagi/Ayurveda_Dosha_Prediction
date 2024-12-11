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
              <img src="/main_image.jpg" alt="Our Team" />
              <p>
              We were inspired to create Ayurvedic Dosha Prediction after witnessing the transformative impact of Ayurveda on holistic health. Our mission is to make this ancient science accessible and relevant to modern-day individuals seeking balance in their lives. With a deep commitment to promoting well-being, we've worked tirelessly to integrate personalized insights into the core of Ayurveda. By leveraging technology, we aim to help people better understand their unique constitution and the natural rhythms of their body. Through interactive tools and actionable remedies, we empower individuals to take proactive steps towards health and harmony. Our goal is to inspire a greater connection with nature, mind, and body. We continue to evolve and refine our approach, ensuring that our platform offers valuable and scientifically-grounded insights to guide users on their wellness journey. With Ayurveda at the heart of our work, we are excited to bring ancient wisdom into the future.              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;