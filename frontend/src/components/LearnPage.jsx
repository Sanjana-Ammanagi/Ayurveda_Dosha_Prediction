import React from "react";
import "./LearnPage.css";
import Navbar from "./Navbar";

const LearnPage = () => {
  return (
    <div className="font">
      <Navbar />
      <div className="learn-page">
        <h1 className="learn-title">Learn About Ayurvedic Doshas</h1>

        <section className="intro-section">
          <h2>Introduction to Ayurveda</h2>
          <p>
            Ayurveda is an ancient system of medicine originating in India over 5,000 years ago. It focuses on maintaining health through a balance of the body, mind, and spirit.
          </p>
          <p>
            The primary aim of Ayurveda is to prevent disease and maintain wellness by balancing the three doshas—Vata, Pitta, and Kapha.
          </p>
        </section>

        <section className="dosha-section">
          <h2>Overview of the Doshas</h2>
          <p>
            The doshas are energies that influence our physical and mental characteristics. Each person has a unique combination of these three doshas that defines their body-mind type.
          </p>
          <div className="dosha-traits">
            <div className="dosha-card">
              <h3>Vata</h3>
              <p>Traits: Creative, energetic, changeable.</p>
              <p>Symptoms: Dry skin, anxiety, irregular digestion.</p>
            </div>
            <div className="dosha-card">
              <h3>Pitta</h3>
              <p>Traits: Ambitious, focused, intense.</p>
              <p>Symptoms: Heartburn, anger, inflammation.</p>
            </div>
            <div className="dosha-card">
              <h3>Kapha</h3>
              <p>Traits: Calm, steady, nurturing.</p>
              <p>Symptoms: Weight gain, lethargy, congestion.</p>
            </div>
          </div>
        </section>

        <section className="diet-tips-section">
          <h2>Dietary Recommendations</h2>
          <p>
            To maintain a balanced dosha, it is important to choose foods that align with your dosha's characteristics. Here are some tips:
          </p>
          <ul>
            <li><strong>Vata:</strong> Warm, moist, and oily foods.</li>
            <li><strong>Pitta:</strong> Cool, sweet, and bitter foods.</li>
            <li><strong>Kapha:</strong> Light, dry, and spicy foods.</li>
          </ul>
        </section>

        <section className="lifestyle-section">
          <h2>Lifestyle Tips</h2>
          <p>
            Maintaining a daily routine that aligns with your dosha can help you achieve balance and well-being. Here are some tips for each dosha:
          </p>
          <ul>
            <li><strong>Vata:</strong> Follow a regular schedule, stay warm, and practice grounding activities like yoga.</li>
            <li><strong>Pitta:</strong> Practice cooling exercises, stay hydrated, and avoid overly stimulating activities.</li>
            <li><strong>Kapha:</strong> Engage in stimulating activities, maintain a regular exercise routine, and avoid excess sleep.</li>
          </ul>
        </section>

        <section className="herbal-remedies-section">
          <h2>Herbal Remedies</h2>
          <p>
            Herbs play a vital role in Ayurvedic treatments and help to balance the doshas. Some commonly used herbs include:
          </p>
          <ul>
            <li><strong>Vata:</strong> Ashwagandha, ginger, and fennel.</li>
            <li><strong>Pitta:</strong> Turmeric, coriander, and mint.</li>
            <li><strong>Kapha:</strong> Tulsi, ginger, and black pepper.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LearnPage;
