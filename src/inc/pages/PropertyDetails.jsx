import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';
function PropertyDetails() {
    return (
        <>
            <div class="page-heading header-text" style={{
                backgroundImage:
                    'url("/images/page-heading-bg.jpg")',
            }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <span class="breadcrumb"><Link to="/react_websites/urban-acres/">Home</Link>  /  Single Property</span>
                            <h3>Single Property</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single-property section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="main-image">
                                <img src="/images/single-property.jpg" alt=""/>
                            </div>
                            <div class="main-content">
                                <span class="category">Apparment</span>
                                <h4>24 New Street Miami, OR 24560</h4>
                                <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.

                                    <br/><br/>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
                                    </div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Best useful links ?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How does this work ?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Why is Villa the best ?</Accordion.Header>
                                    <Accordion.Body>
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </div>
                            <div class="col-lg-4">
                                <div class="info-table">
                                    <ul>
                                        <li>
                                        <img src="/images/info-icon-01.png" alt="" style={{ maxWidth: "52px" }} />
                                                <h4>450 m2<br/><span>Total Flat Space</span></h4>
                                        </li>
                                        <li>
                                        <img src="/images/info-icon-02.png" alt="" style={{ maxWidth: "52px" }} />
                                                <h4>Contract<br/><span>Contract Ready</span></h4>
                                        </li>
                                        <li>
                                        <img src="/images/info-icon-03.png" alt="" style={{ maxWidth: "52px" }} />
                                                <h4>Payment<br/><span>Payment Process</span></h4>
                                        </li>
                                        <li>
                                        <img src="/images/info-icon-04.png" alt="" style={{ maxWidth: "52px" }} />
                                                <h4>Safety<br/><span>24/7 Under Control</span></h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section best-deal">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="section-heading">
                                    <h6>| Best Deal</h6>
                                    <h2>Find Your Best Deal Right Now!</h2>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="tabs-content">
                                    <div class="row">
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                                <div class="row">
                                                    <div class="col-lg-3">
                                                        <div class="info-table">
                                                            <ul>
                                                                <li>Total Flat Space <span>540 m2</span></li>
                                                                <li>Floor number <span>3</span></li>
                                                                <li>Number of rooms <span>8</span></li>
                                                                <li>Parking Available <span>Yes</span></li>
                                                                <li>Payment Process <span>Bank</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                    <img src="/images/deal-01.jpg" alt=""/>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <h4>All Info About Apartment</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br/><br/>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                                                            <div class="icon-button">
                                                        <Link to="/react_websites/urban-acres/contact"><i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit</Link>
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
        </>
    );
}

export default PropertyDetails;
