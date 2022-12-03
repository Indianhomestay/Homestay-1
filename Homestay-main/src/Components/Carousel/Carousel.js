import React from 'react';
import './Carousel.css';
import carousel1 from '../../Assets/carousel1.jpg';
import carousel2 from '../../Assets/carousel2.jpg';
import carousel3 from '../../Assets/carousel3.jpg';
import 'animate.css';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={carousel3} className="d-block w-100 anim" alt="..." />
                        <div className="carousel-caption d-none d-md-block caro">
                            <p>Best Choice For Family</p>
                            <p>Come as a guest, leave as a friend</p>
                            <div>
                                <button className='btn'>Explore More &#8594;</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item animate__animated animate__backInDown" data-bs-interval="2000">
                        <img src={carousel2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caro">
                            <p>Best Choice For Family</p>
                            <p>Best vacation experience ever</p>
                            <div>
                                <button className='btn'>Explore More &#8594;</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item anim2">
                        <img src={carousel1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block caro">
                            <p>Best Choice For Family</p>
                            <p>Stay with us feel at home</p>
                            <div>
                                <button className='btn'>Explore More &#8594;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
