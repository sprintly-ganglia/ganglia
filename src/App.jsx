import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Techvrse from "./components/Techvrse";

const Home = () => {
  return (
    <>
      <div>
        <div
          className="mx-auto"
          style={{ maxWidth: "65%", fontFamily: "'Helvetica', sans-serif" }}
        >
          <h1 className="display-3 fw-bold mb-4">An Overview of Us</h1>
          <p className="fs-5">
            Ganglia Technologies Private Limited is an innovative tech company
            headquartered in Manipal, Karnataka, India. Operating across two
            synergistic verticals, Ganglia is committed to delivering
            cutting-edge solutions that drive progress and efficiency.
          </p>
          <p className="fs-5 mt-3">
            <strong>Biomedical Devices:</strong> Dedicated to advancing
            healthcare, Ganglia has secured a prestigious Seed Grant from the
            Government of Karnataka for developing its pioneering smart
            VideoLaryngoscope. This state-of-the-art device, with 16 approved
            patents, is designed to enhance the safety and effectiveness of
            airway management in critical care settings. Currently, the company
            is in the final stages of developing its third prototype, bringing
            this groundbreaking innovation closer to market readiness.
          </p>
          <p className="fs-5 mt-3">
            <strong>Software and Business Solutions:</strong> Ganglia offers a
            comprehensive suite of services, including custom software
            development, AI-powered solutions, and website development. By
            leveraging deep industry knowledge and technological expertise,
            Ganglia helps organizations accelerate innovation, increase
            productivity, reduce costs, and optimize asset utilization. The
            company’s approach ensures that clients can quickly process
            information, make intelligent decisions, and respond to market
            dynamics in real-time.
          </p>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techvrse" element={<Techvrse />} />
      </Routes>
    </Router>
  );
};

export default App;
