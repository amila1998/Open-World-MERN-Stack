import React, { Component } from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module




export default class ImageSlider extends Component {
  render() {
    return (
        

                    <div className="container">
                            <div
                    id="carouselBasicExample"
                    className="carousel slide carousel-fade"
                    data-mdb-ride="carousel"
                    >
                    
                    <div className="carousel-indicators">
                        <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                        ></button>
                        <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                        ></button>
                    </div>

                    
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block" >      

                        <div className="col-lg-3 mt-2 mb-2"  id="slide">
                                        <input
                                        className="form-control"
                                        type="search"
                                        placeholder="search"
                                        name="searchQuery"
                                        onChange={this.handleSearchArea}/>
                                </div>


                            <h1 id="openworld" >Open World</h1>

                            <p>
                            To change lives.
                            </p>
                        </div>
                        </div>

                    
                        <div className="carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">   




                            
                        <div className="col-lg-3 mt-2 mb-2"  id="slide">
                                        <input
                                        className="form-control"
                                        type="search"
                                        placeholder="search"
                                        name="searchQuery"
                                        onChange={this.handleSearchArea}/>
                                </div>
                            <h1 id="openworld" >Open World</h1>                       

                            <p>
                            To change lives.
                            </p>
                        </div>
                        </div>

                        
                        <div className="carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">

                        <div className="col-lg-3 mt-2 mb-2"  id="slide">
                                        <input
                                        className="form-control"
                                        type="search"
                                        placeholder="search"
                                        name="searchQuery"
                                        onChange={this.handleSearchArea}/>
                                </div>

                                <h1 id="openworld" >Open World</h1>

                            <p>
                            To change lives.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                    



                    
<div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  
  
  <div class="carousel-inner py-4">
    
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/181.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </div>
  
</div>




</div>

                    


                        
                        
                        
        
    );

    
  }
}
