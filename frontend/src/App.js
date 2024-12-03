import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Vata from "./components/Vata";
import AboutUs from "./components/AboutUs";
import Pitta from "./components/Pitta";
import Kapha from "./components/Kapha";
import Parent from "./components/Parent";
import Results from "./components/Results";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/main" element={<Parent />}>
                    {/* Nested routes for Vata, Pitta, and Kapha */}
                    <Route path="vata" element={<Vata />} />
                    <Route path="pitta" element={<Pitta />} />
                    <Route path="kapha" element={<Kapha />} />

                </Route>
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
};

export default App;
