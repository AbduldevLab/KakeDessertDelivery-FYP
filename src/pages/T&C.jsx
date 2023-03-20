// Description: Terms & Conditions page
import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection.jsx";// CommonSection is a component that allows you to change the title of the page
import Helmet from "../components/Helmet/Helmet.jsx";// Helmet is a component that allows you to change the title of the page

import "../styles/t&c.css";

// This is the Terms & Conditions page
const Tc = () => {
  // Return the Terms & Conditions page
  return (
    <div id="top3">
    <Helmet title="t&c">
      
        {/* // This is the Terms & Conditions page */}
        <CommonSection title="Terms & Conditions" />
        <section className="content">
          <h2 className="section-title">1. Acceptance of Terms</h2>
          <p className="section-p">
            By accessing our website or using our services, you agree to be
            bound by these Terms. If you do not agree to these Terms, please do
            not use our services.
          </p>

          <h2 className="section-title">2. Ordering Process</h2>
          <ul className="section-list">
            <li>Orders can be placed through our website or by phone.</li>
            <li>
              Orders must be placed within the business hours for pickup or
              delivery time.
            </li>
            <li>Payment must be made in person when placing an order.</li>
          </ul>

          <h2 className="section-title">3. Cancellation and Refunds</h2>
          <ul className="section-list">
            <li>
              Orders can be cancelled up to the dispatch or prepared time.
            </li>
            <li>
              Refunds will not be issued for orders cancelled after the dispatch
              or prepared time.
            </li>
            <li>
              Refunds may be issued in the event of an error on our part, such
              as an incorrect cake or delivery.
            </li>
          </ul>

          <h2 className="section-title">4. Delivery</h2>
          <ul className="section-list">
            <li>
              We offer delivery within a certain radius of our business location
              for an additional fee.
            </li>
            <li>
              Delivery times are estimates and may be affected by traffic,
              weather, or other factors beyond our control.
            </li>
            <li>
              We are not responsible for any damages or loss after delivery has
              been made.
            </li>
          </ul>

          <h2 className="section-title">5. Disclaimer of Warranties</h2>
          <p className="section-p">
            We make no warranties or representations about the accuracy,
            reliability, completeness, or timeliness of the content or services
            provided on our website. We do not warrant that our website will be
            error-free or that our services will meet your expectations.
          </p>

          <h2 className="section-title">6. Limitation of Liability</h2>
          <p className="section-p">
            We shall not be liable for any damages, whether direct, indirect,
            incidental, special, or consequential, arising from the use of our
            website or services, even if we have been advised of the possibility
            of such damages.
          </p>

          <h2 className="section-title">7. Governing Law</h2>
          <p className="section-p">
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction where our business is located, without
            regard to its conflict of law provisions.
          </p>

          <h2 className="section-title">8. Changes to Terms</h2>
          <p className="section-p">
            We reserve the right to modify these Terms at any time without prior
            notice. By continuing to use our website or services after any such
            changes, you agree to be bound by the modified Terms.
          </p>
        </section>
        
    </Helmet>
    </div>
  );
};

export default Tc;
