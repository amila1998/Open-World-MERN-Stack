import React from 'react'
import img1 from './../logo.png'


export default function AboutUsScreen() {

    return (
        <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            <h1 class="font-weight-light"><b>About Us</b></h1>
                <p>“Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Open World’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent encounters for a considerable length of time through our cutting edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy with the stunning magnificence of America and far off terrains. We need you to observe sensational scenes that are a long ways past your creative ability.</p>
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={img1}
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <p>‘Open World’ Online Travel Management System is a web application that travellers and service providers can use to cover all aspects of the tourism industry.This system will give tourists the best experience and value for their travels. Therefore, the Tourism Management System provides a superior service to facilitate travellers' travel needs and instantly share the best experience. Instead, this system offers value and trusted offers to customers who connect through this system at the best prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
 