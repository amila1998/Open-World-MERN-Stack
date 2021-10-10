import React, { Component } from 'react'



export default class componentName extends Component {

    render() {

        return (

            <div>
                <br/>
<div class="container">
                        <ul class="list-group mb-3">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <center>
                        <div class="carousel-inner" >
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../uploads/p1.jpg" alt="abc" class="d-block w-100" id="bigimg" />
                                <div class="carousel-caption d-none d-md-block">
                            </div>
                            </div>
                            
                                <div class="carousel-item" data-bs-interval="2000">
                                <img src="../uploads/p6.jpg" alt="abc" class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block">  
                                </div>
                                
                            </div>
                                <div class="carousel-item">
                                <img src="../uploads/p3.jpg"  alt="abc" class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../uploads/p7.jpg"  alt="abc" class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../uploads/p5.png"  alt="abc" class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../uploads/p8.jpg"  alt="abc" class="d-block w-100" id="bigimg"/>
                                <div class="carousel-caption d-none d-md-block"> 
                                </div>
                            </div>
                            </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                                </center>
                        </div>
                        </ul>
</div> 
                

            </div>

        )

    }

}