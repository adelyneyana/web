import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/services.css";

const Services = () => {
  return (
    <Helmet title="Services">
      <CommonSection title="Services" />
      <section>
        <Container>
            <img src={require("../assets/all-images/pic.jpg")} alt="Main Car" className="hero__image" />                  
        </Container>
      </section>
    </Helmet>
  );
};

export default Services;
