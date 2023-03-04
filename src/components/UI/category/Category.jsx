// Description: Category component
import React from "react";

//This is used to import the reactstrap components
import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

//This is the category data
const categoryData = [
  {
    display: "Desserts",
    imgUrl: categoryImg01,
  },
  {
    display: "Cold Drinks",
    imgUrl: categoryImg02,
  },

  {
    display: "Hot Drinks",
    imgUrl: categoryImg03,
  },

  {
    display: "Snacks",
    imgUrl: categoryImg04,
  },
];

//This is the Category component
const Category = () => {
  return (
    <Container>
      <Row>
        {/* //This is used to display the category items */}
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                {/* //This is used to display the category items */}
                <img src={item.imgUrl} alt="category__item" />
              </div>
              {/* //This is used to display the category items */}
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
