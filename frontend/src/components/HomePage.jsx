// HomePage.js
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleNavigate = () => {
    navigate("/main");
  };

  const openModal = (dosha) => {
    console.log('Modal open triggered with:', dosha); // Debugging line
    setModalContent(dosha);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="background-img">
        <div className="overlay_"></div>
        <div className="main-content">
          <h1 className="head">Ayurveda and the Doshas</h1>
          <div className="description-section">
            <p>
            Ayurveda, the ancient Indian system of holistic healing, revolves around the concept of the three doshas: Vata, Pitta, and Kapha. These doshas are biological energies derived from the five elements—air, space, fire, water, and earth—and govern all physical and mental processes in the body. Each individual has a unique combination of these doshas, forming their constitution or Prakriti, which influences their health, personality, and tendencies. Ayurveda emphasizes maintaining the balance of these doshas to achieve optimal well-being and harmony.
            </p>
            
          </div>

          <div className="dosha-container">
            <div className="dosha-card" onClick={() => openModal("Vata")}>
              <img src="/wind (1).png" alt="Vata" className="dosha-icon" />
              <h3>VATA</h3>
            </div>
            <div className="dosha-card" onClick={() => openModal("Pitta")}>
              <img src="/fire (1).png" alt="Pitta" className="dosha-icon" />
              <h3>PITTA</h3>
            </div>
            <div className="dosha-card" onClick={() => openModal("Kapha")}>
              <img src="/water-drop.png" alt="Kapha" className="dosha-icon" />
              <h3>KAPHA</h3>
            </div>
          </div>

          <div className="know-your-dosha">
            <button className="dosha-button" onClick={handleNavigate}>
              Know Your Dosha!
            </button>
          </div>
        </div>
      </div>

      {/* Pop-Up Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent} Dosha</h2>
            {modalContent === "Vata" && (
              <p>
                Vata dosha represents movement and is associated with the elements of air and ether (space). It governs activities like breathing, circulation, and the nervous system. People with a dominant Vata are often creative, energetic, and adaptable, but imbalances can cause dryness, restlessness, and anxiety. To balance Vata, warm, nourishing foods, regular routines, and calming practices like yoga and meditation are recommended. When in harmony, Vata enhances creativity, vitality, and flexibility in both body and mind.
              </p>
            )}
            {modalContent === "Pitta" && (
              <p>
                Pitta dosha symbolizes transformation and is associated with the elements of fire and water. It governs digestion, metabolism, and body temperature. People with a dominant Pitta are often sharp, ambitious, and passionate but may become irritable or prone to inflammation when imbalanced. To maintain harmony, they should avoid excessive heat, spicy foods, and stress. Cooling foods like cucumber, melons, and coconut water, along with calming practices like yoga and meditation, help balance Pitta, enhancing its qualities of clarity, determination, and vitality.
              </p>
            )}
            {modalContent === "Kapha" && (
              <p>
                Kapha dosha represents stability and is connected to the elements of earth and water. It provides strength, immunity, and emotional grounding. Those with a dominant Kapha tend to be nurturing, calm, and resilient, but imbalances can lead to lethargy, weight gain, and congestion. To maintain balance, Kapha types should adopt a warm, light diet, stay active, and avoid heavy or cold foods. By doing so, they can harness Kapha’s gifts of patience, endurance, and a sense of rooted harmony.
              </p>
            )}
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
