import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="hero__section">
      <div className="hero__item mt0">
        <Container>
          <div className="hero__content">
            {/* Image element instead of background image */}
            <img src={require("../../assets/all-images/main-car.jpg")} alt="Main Car" className="hero__image" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
