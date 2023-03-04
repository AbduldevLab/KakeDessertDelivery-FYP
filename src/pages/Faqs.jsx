// Description: This is the FAQs page
import React, { useEffect } from "react";
// This is the common section component
import CommonSection from "../components/UI/common-section/CommonSection.jsx";
import Helmet from "../components/Helmet/Helmet.jsx";// Helmet is a component that allows you to change the title of the page

import "../styles/faqs.css";

// This is the FAQs page
function Faqs() {
  // This is the useEffect hook that runs when the component mounts
  useEffect(() => {
    var faq = document.getElementsByClassName("faq-page");// This is the FAQ question
    var i;// This is the iterator
    for (i = 0; i < faq.length; i++) {// This is the loop that adds an event listener to each FAQ question
      faq[i].addEventListener("click", function () {// This is the event listener that toggles the FAQ answer
        /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
        this.classList.toggle("active1");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {// This is the if statement that checks if the FAQ answer is displayed
          body.style.display = "none";
        } else {// This is the else statement that displays the FAQ answer
          body.style.display = "block";
        }
      });
    }
  }, []);// This is the empty array that ensures that the useEffect hook only runs once

  // This is the return statement that returns the FAQs page
  return (
    <Helmet title="FAQs">
      <body id="top2">
        <CommonSection title="FAQs" />
        <section>
          <div className="faq-one">
            {/* FAQ question */}
            <h1 className="faq-page">Opening Times</h1>
            {/* FAQ answer */}
            <div className="faq-body">
              <p>
                We are open 5 days a week, we accept pre-orders on business days
                and deliveries begin from 6PM, we usually stop accepting orders
                at 10PM. The shop is open to the public from 6PM for walk-ins
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-two">
            {/* FAQ question */}
            <h1 className="faq-page">Delivery Charge</h1>
            {/* FAQ answer */}
            <div className="faq-body">
              <p>
                Delivery is €3 if the minimum spend is reached. If not, an extra
                delivery charge will be added to reach the minimum spend, which
                is €10.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-three">
            {/* FAQ question */}
            <h1 className="faq-page">What areas do you deliver to?</h1>
            {/* FAQ answer */}
            <div className="faq-body">
              <p>
                We deliver around the Blanchardstown area D15 and also parts of
                Finglas and Cabra.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-four">
            {/* FAQ question */}
            <h1 className="faq-page">Delivery Times</h1>
            {/* FAQ answer */}
            <div className="faq-body">
              <p>
                Contact us with your order number via our social media pages
                which you will find below.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-five">
            {/* FAQ question */}
            <h1 className="faq-page">Are your desserts served hot or cold?</h1>
            {/* FAQ answer */}
            <div className="faq-body">
              <p>
                All bakery items are made fresh daily and left to cool. The only
                items we serve warm are the cookie doughs and the churros. If
                you would like any of our desserts warm, we recommend
                microwaving them for between 15-20 seconds.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-six">
            {/* FAQ question */}
            <h1 className="faq-page">Allergen Advice</h1>
            {/* FAQ answer */}
            <div className="faq-body">
              <p>
                All dishes may contain one or more of the following allergens:
                Wheat, Gluten, Peanuts, Nuts, Sesame Seeds, Celery, Soya, Milk,
                Eggs, Mustard, Lupin, Mollusc, Crustaceans, Sulphur Dioxide.
                Dishes may also contain food additives and/or other substances
                that might not be suitable for pregnant women or people with
                specific dietary needs. For any questions regarding allergens or
                other contents of specific dishes, please contact the store
                directly via our social media platforms, or email us at
                kakedessertdelivery@gmail.com
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-seven">
            {/* faq question */}
            <h1 className="faq-page">Do any of your items contain nuts</h1>
            {/* faq answer */}
            <div className="faq-body">
              <p>
                All of our products may contain traces of nuts. Please contact
                us via our social media platforms if you have any questions
                reagrding this matter.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-eight">
            {/* faq question */}
            <h1 className="faq-page">What payment methods are available</h1>
            {/* faq answer */}
            <div className="faq-body">
              <p>
                You can pay with a credit / debit card, Revolut or with cash in
                person only. Revolut payments can be made beforehand.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-nine">
            {/* faq question */}
            <h1 className="faq-page">
              Adding more items after placing an order
            </h1>
            {/* faq answer */}
            <div className="faq-body">
              <p>
                If you wish to add item/s to your order. Your order needs to
                have been placed less than 10 minutes ago. Simply contact us via
                our social media platforms and supply your Order No. with the
                items and toppings/sauces. If you wish to make multiple changes,
                we will cancel your order and you may place it again.
              </p>
            </div>
          </div>
          <hr className="hr-line" />

          <div className="faq-nine">
            {/* faq question */}
            <h1 className="faq-page">I want to cancel my order</h1>
            {/* faq answer */}
            <div className="faq-body">
              <p>
                We only allow cancellations of an order, if it hasn't been
                prepared or dispatched, as the items are specifically made to
                order, they will go to waste.
              </p>
            </div>
          </div>
        </section>
        </body>
    </Helmet>
  );
}
export default Faqs;
