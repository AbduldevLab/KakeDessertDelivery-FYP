// This is the page where all the products are displayed
import React, { useState, useRef  } from "react";
// import Decoreleft from "../../assets/images/decore-left.png";
import Helmet from "../components/Helmet/Helmet";
// import Decoreright from "../../assets/images/decore-right.png";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";// This is used to import the reactstrap components

// This is used to import the product data
import menuproducts from "../assets/brand/menuproducts";
// This is used to import the product card
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";// This is used to import the react-paginate

import "../styles/all-desserts.css";
import "../styles/pagination.css";

// This is used to display the all items page
const Allitems = () => {
  const [searchTerm, setSearchTerm] = useState("");// This is used to set the search term
  const searchInputRef = useRef(null);

  const [pageNumber, setPageNumber] = useState(0);// This is used to set the page number
  
  const searchedProduct = menuproducts.filter((item) => {// This is used to filter the products
    if (searchTerm.valueOf === "") {// This is used to check if the search term is empty
      return item;
    }
    // This is used to check if the search term is not empty
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
      // This is used to check if the search term is not empty
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;// This is used to set the number of products per page
  const visitedPage = pageNumber * productPerPage;// This is used to set the visited page
  const displayPage = searchedProduct.slice(// This is used to set the display page
    visitedPage,
    visitedPage + productPerPage
  );

  // This is used to display the products
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // This is used to change the page
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // This is used to display the all items page
  return (
    <Helmet title="All Items">
      <CommonSection title="All Desserts" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                {/* // This is used to search for a product */}
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}// This is used to set the search term
                  ref={searchInputRef} //This is used to set the search input reference
                />
                <span>
                  <i className="ri-search-line" onClick={() => searchInputRef.current.focus()}></i> 
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
            </Col>
              {/* // This is used to display the products */}
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                {/* // This is used to display the product card item*/}
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              {/* // This is used to display the pagination/navigation buttons */}
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
                activeClassName="active"
                onClick={() => window.scrollTo(0, 0)}
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Allitems;
