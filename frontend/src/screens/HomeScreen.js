import react from 'react'
import img1 from './../logo.png'
import Slider from "../components/HomeSlider";

export default function HomeScreen(){
    return(
        
        
        <div>
          <div className="row"><Slider></Slider></div>
        <div class="col-lg-5">
        <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={img1}
                alt=""
              />
            </div>
        <h1 class="font-weight-light"><b>Home</b></h1>
        <p>
        Although many of us have been “tourists” at some point in our lives, defining what tourism actually is can be difficult. Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.
Tourism is a dynamic and competitive industry that requires the ability to adapt constantly to customers’ changing needs and desires, as the customer’s satisfaction, safety and enjoyment are particularly the focus of tourism businesses.
        </p>

        <p>TOURISM ENCOMPASSES:</p>

       <p> Outbound Tourism</p>
       <p>Outbound tourism is what you may be most familiar with. It involves the people going from British Columbia to other provinces, territories or countries. For example, going to Hawaii for a holiday is considered outbound tourism.</p>

       <p>Inbound Tourism</p>
       <p>The tourists coming to BC from other places are called inbound tourists. BC competes in a global market to attract tourists from the United States, Japan, Germany and many other countries. The industry also implements marketing campaigns aimed at attracting travellers from other parts of Canada, as well as from within British Columbia.

</p>
      </div>
      </div>
    );
}




