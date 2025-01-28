import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import React from "react";

const Techvrse = () => {
  return (
    <div
      className=""
      style={{ fontFamily: "'Helvetica', sans-serif" }}
    >
      <div className="row align-items-center">
        {/* Left Column: Text Content */}
        <div className="col-md-6">
          <h1 className="display-4 fw-bold mb-3">Smart Video Laryngoscope</h1>
          <p className="fs-5">
            The <b>Smart Video Laryngoscope</b> by Ganglia Technologies is a
            cutting-edge medical device designed to revolutionize airway
            management in critical care settings. Backed by a prestigious{" "}
            <b>Seed Grant from the Government of Karnataka</b> and featuring{" "}
            <b>16 approved patents</b>, this innovative tool enhances safety and
            effectiveness for healthcare professionals. Currently in its{" "}
            <b>third prototype</b> stage, the device integrates advanced
            technology to provide clear visualization and precise control,
            ensuring better patient outcomes and redefining standards in
            critical care procedures.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="col-md-6 text-center">
          <img
            src="src\assets\laryngoscope-with-infographic.png"
            alt="Smart Video Laryngoscope"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Techvrse;
