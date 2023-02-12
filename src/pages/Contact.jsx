import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

import Helmet from "../components/Helmet/Helmet";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #f3c6a0;
  color: white;
  font-size: 20px;
  padding: 10px 50px;
  border-radius: 5px;
  border: none;
  margin: 10px ;
  cursor: pointer;
}
`;
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return(
    <Helmet title="Contact">
      
    <div class="mapContainer">
        <iframe title = "Kake" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.654606480653!2d-6.4001236833925965!3d53.385229179498026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2acef1370ae922e8!2zNTPCsDIzJzA2LjgiTiA2wrAyMyc1Mi42Ilc!5e0!3m2!1sen!2sie!4v1666559151268!5m2!1sen!2sie" 
                width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a class="direction-link" rel="external" href="//maps.google.com/maps?f=d&amp;daddr=53.385176, -6.397965&amp;hl=en">
        <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Button>Get Directions Here</Button>
        </div>
        </a>
        <div id="map"></div>
    </div>
    
    </Helmet>
);

}
export default Contact;
