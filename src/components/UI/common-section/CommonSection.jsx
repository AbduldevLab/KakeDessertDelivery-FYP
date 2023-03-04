// Description: This component is used to display the common section of the page.
import React from "react";
//This is used to import the reactstrap components
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

//This is the CommonSection component
const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        {/* //This is used to display the title */}
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
