import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import Accordion from 'react-bootstrap/Accordion';

function Home() {
    return (
        <>
            <div className="main-banner">
                <Swiper
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="item item-1" style={{
                            backgroundImage:
                                'url("/images/banner-01.jpg")',
                        }}>
                            <div className="header-text">
                                <span className="category">Toronto, <em>Canada</em></span>
                                <h2>Hurry!<br />Get the Best Villa for you</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item item-2" style={{
                            backgroundImage:
                                'url("/images/banner-02.jpg")',
                        }}>
                            <div className="header-text">
                                <span className="category">Melbourne, <em>Australia</em></span>
                                <h2>Be Quick!<br />Get the best villa in town</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item item-3" style={{
                            backgroundImage:
                                'url("/images/banner-03.jpg")',
                        }}>
                            <div className="header-text">
                                <span className="category">Miami, <em>South Florida</em></span>
                                <h2>Act Now!<br />Get the highest level penthouse</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="featured section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-image">
                                <img src="/images/featured.jpg" alt="" />
                                <Link to="/react_websites/urban-acres/property-details"><img src="images/featured-icon.png" alt=""
                                    style={{ maxWidth: "60px", padding: "0px" }} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-heading">
                                <h6>| Featured</h6>
                                <h2>Best Appartment &amp; Sea view</h2>
                            </div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Best useful links ?</Accordion.Header>
                                    <Accordion.Body>
                                        Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business.
                                        TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates"
                                            target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How does this work ?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor
                                        incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Why is Villa Agency the best ?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor
                                        incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-lg-3">
                            <div className="info-table">
                                <ul>
                                    <li>
                                        <img src="/images/info-icon-01.png" alt="" style={{ maxWidth: "52px" }} />
                                        <h4>250 m2<br /><span>Total Flat Space</span></h4>
                                    </li>
                                    <li>
                                        <img src="/images/info-icon-02.png" alt="" style={{ maxWidth: "52px" }} />
                                        <h4>Contract<br /><span>Contract Ready</span></h4>
                                    </li>
                                    <li>
                                        <img src="/images/info-icon-03.png" alt="" style={{ maxWidth: "52px" }} />
                                        <h4>Payment<br /><span>Payment Process</span></h4>
                                    </li>
                                    <li>
                                        <img src="/images/info-icon-04.png" alt="" style={{ maxWidth: "52px" }} />
                                        <h4>Safety<br /><span>24/7 Under Control</span></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video section" style={{
                backgroundImage:
                    'url("/images/video-bg.jpg")',
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Video View</h6>
                                <h2>Get Closer View & Different Feeling</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="video-frame">
                                <img src="/images/video-frame.jpg" alt="" />
                                <a href="https://youtube.com" target="_blank"><i><FontAwesomeIcon icon={faPlay} /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fun-facts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="34" data-speed="1000">34</h2>
                                            <p className="count-text ">Buildings<br />Finished Now</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="12" data-speed="1000">12</h2>
                                            <p className="count-text ">Years<br />Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="counter">
                                            <h2 className="timer count-title count-number" data-to="24" data-speed="1000">24</h2>
                                            <p className="count-text ">Awwards<br />Won 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section best-deal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-heading">
                                <h6>| Best Deal</h6>
                                <h2>Find Your Best Deal Right Now!</h2>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="info-table">
                                                        <ul>
                                                            <li>Total Flat Space <span>185 m2</span></li>
                                                            <li>Floor number <span>26th</span></li>
                                                            <li>Number of rooms <span>4</span></li>
                                                            <li>Parking Available <span>Yes</span></li>
                                                            <li>Payment Process <span>Bank</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src="/images/deal-01.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-3">
                                                    <h4>Extra Info About Property</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut
                                                        labore et dolore magna aliqua quised ipsum suspendisse.
                                                        <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine
                                                        website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
                                                    </p>
                                                    <div className="icon-button">
                                                        <Link to="/react_websites/urban-acres/property-details"><i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="properties section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Properties</h6>
                                <h2>We Provide The Best Property You Like</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <Link to="/react_websites/urban-acres/property-details"><img src="/images/property-01.jpg" alt="" /></Link>
                                <span className="category">Luxury Villa</span>
                                <h6>$2.264.000</h6>
                                <h4><Link to="/react_websites/urban-acres/property-details">18 New Street Miami, OR 97219</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>8</span></li>
                                    <li>Bathrooms: <span>8</span></li>
                                    <li>Area: <span>545m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>6 spots</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/react_websites/urban-acres/property-details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <Link to="/react_websites/urban-acres/property-details"><img src="/images/property-02.jpg" alt="" /></Link>
                                <span className="category">Luxury Villa</span>
                                <h6>$1.180.000</h6>
                                <h4><Link to="/react_websites/urban-acres/property-details">54 Mid Street Florida, OR 27001</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>6</span></li>
                                    <li>Bathrooms: <span>5</span></li>
                                    <li>Area: <span>450m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>8 spots</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/react_websites/urban-acres/property-details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <Link to="/react_websites/urban-acres/property-details"><img src="/images/property-03.jpg" alt="" /></Link>
                                <span className="category">Luxury Villa</span>
                                <h6>$1.460.000</h6>
                                <h4><Link to="/react_websites/urban-acres/property-details">26 Old Street Miami, OR 38540</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>5</span></li>
                                    <li>Bathrooms: <span>4</span></li>
                                    <li>Area: <span>225m2</span></li>
                                    <li>Floor: <span>3</span></li>
                                    <li>Parking: <span>10 spots</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/react_websites/urban-acres/property-details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <Link to="/react_websites/urban-acres/property-details"><img src="/images/property-04.jpg" alt="" /></Link>
                                <span className="category">Apartment</span>
                                <h6>$584.500</h6>
                                <h4><Link to="/react_websites/urban-acres/property-details">12 New Street Miami, OR 12650</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>4</span></li>
                                    <li>Bathrooms: <span>3</span></li>
                                    <li>Area: <span>125m2</span></li>
                                    <li>Floor: <span>25th</span></li>
                                    <li>Parking: <span>2 cars</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/react_websites/urban-acres/property-details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <Link to="/react_websites/urban-acres/property-details"><img src="/images/property-05.jpg" alt="" /></Link>
                                <span className="category">Penthouse</span>
                                <h6>$925.600</h6>
                                <h4><Link to="/react_websites/urban-acres/property-details">34 Beach Street Miami, OR 42680</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>4</span></li>
                                    <li>Bathrooms: <span>4</span></li>
                                    <li>Area: <span>180m2</span></li>
                                    <li>Floor: <span>38th</span></li>
                                    <li>Parking: <span>2 cars</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/react_websites/urban-acres/property-details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item">
                                <Link to="/react_websites/urban-acres/property-details"><img src="/images/property-06.jpg" alt="" /></Link>
                                <span className="category">Modern Condo</span>
                                <h6>$450.000</h6>
                                <h4><Link to="/react_websites/urban-acres/property-details">22 New Street Portland, OR 16540</Link></h4>
                                <ul>
                                    <li>Bedrooms: <span>3</span></li>
                                    <li>Bathrooms: <span>2</span></li>
                                    <li>Area: <span>165m2</span></li>
                                    <li>Floor: <span>26th</span></li>
                                    <li>Parking: <span>3 cars</span></li>
                                </ul>
                                <div className="main-button">
                                    <Link to="/react_websites/urban-acres/property-details">Schedule a visit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact section" style={{
                backgroundImage:
                    'url("/images/contact-bg.jpg")',
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Contact Us</h6>
                                <h2>Get In Touch With Our Agents</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                                    width="100%" height="500px" frameBorder="0"
                                    style={{
                                        border: "0",
                                        borderRadius: "10px",
                                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)"
                                    }}
                                    allowFullScreen=""></iframe>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="item phone">
                                        <img src="/images/phone-icon.png" alt="" style={{ maxWidth: "52px" }} />
                                        <h6>010-020-0340<br /><span>Phone Number</span></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item email">
                                        <img src="/images/email-icon.png" alt="" style={{ maxWidth: "52px" }} />
                                        <h6>info@villa.co<br /><span>Business Email</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <form id="contact-form" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label for="name">Full Name</label>
                                            <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label for="email">Email Address</label>
                                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label for="subject">Subject</label>
                                            <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label for="message">Message</label>
                                            <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
