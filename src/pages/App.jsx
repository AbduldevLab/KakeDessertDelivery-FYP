import React from 'react';
import CommonSection from "../components/UI/common-section/CommonSection.jsx";// CommonSection is a component that allows you to change the title of the page
import Helmet from "../components/Helmet/Helmet.jsx";// Helmet is a component that allows you to change the title of the page

import "../styles/app.css"

import step1 from "../assets/images/App Mockup/Step1.PNG";
import step2 from "../assets/images/App Mockup/Step2.PNG";
import step3 from "../assets/images/App Mockup/Step3.PNG";
import step4 from "../assets/images/App Mockup/Step4.PNG";
import step5 from "../assets/images/App Mockup/Step5.PNG";

function App() {
  return (
    <div id="top4">
    <Helmet title="App">
      
        {/* // This is the App page */}
        <CommonSection title="App icon" />
        <section className="content">
      <ol className="step-grid">
        <li>
          <img 
          src={step1}
          alt="Step 1: Open the website in Safari." 
          // style={{ width: '200px', height: '400px' }}
          className="step-img"
          />
        </li>
        <li>
          <img 
          src={step2}
          alt="Step 2: Tap the Share button." 
          // style={{ width: '200px', height: '400px' }}
          className="step-img"
          />
        </li>
        <li>
          <img 
          src={step3}
          alt="Step 3: Tap the Add to Home Screen button." 
          // style={{ width: '200px', height: '400px' }}
          className="step-img"
          />
        </li>
        <li>
          <img 
          src={step4}
          alt="Step 4: Tap Add." 
          // style={{ width: '200px', height: '400px' }}
          className="step-img"
          />
        </li>
        <li>
          <img 
          src={step5}
          alt="Step 5: Now the icon should be on your home screen." 
          // style={{ width: '200px', height: '400px' }}
          className="step-img"
          />
        </li>
      </ol>
      </section>
        
    </Helmet>
    </div>
  );
}

export default App;
