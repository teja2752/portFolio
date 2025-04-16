import React from "react";
import { FaCalendarAlt, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-title">Certifications</h1>
      <div className="underline"></div>

      {/* Certificate Cards */}
      <div className="certificates-cards">
        <div className="certificate-card">
          <FaCertificate className="certificate-icon" />
          <h2>JavaScript (Basic)</h2>
          <p className="issuer">Geekster</p>
          <p className="date"><FaCalendarAlt /> Octomber 2024</p>
          <a
            href="https://certifications.geekster.in/63HWkNKNSwPaPAFgH6c3N-geekster.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            <FaExternalLinkAlt /> View Certificate
          </a>
        </div>

        <div className="certificate-card">
          <FaCertificate className="certificate-icon" />
          <h2>SQL (Basic)</h2>
          <p className="issuer">HackerRank</p>
          <p className="date"><FaCalendarAlt /> March 2025</p>
          <a
            href="https://www.hackerrank.com/certificates/7973df973237"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-link"
          >
            <FaExternalLinkAlt /> View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
