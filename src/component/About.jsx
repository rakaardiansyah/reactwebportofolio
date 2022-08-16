import React, { Component } from 'react';
import { Slide } from 'react-reveal';
import { Link } from "react-router-dom";


class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">

                    <section id="about" className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate">
                                    <Slide left>
                                        <div className="section-experience left-text-content">
                                            <div className="section-heading">
                                                <h1>3+</h1>
                                            </div>
                                            <h3>Years <br />Working <br />Experience</h3>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate">
                                    <Slide bottom>
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img src="assets/images/Untitled-2.png" alt="" />
                                                <h4>LinkedIn</h4>
                                                <p>Info Lebih Lanjut? Connect ke LinkedIn</p>
                                                <a href="https://www.linkedin.com/in/raka-ardiansyah23/" className="main-button">
                                                    Connect
                                                </a>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate">
                                    <Slide right>
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img src="assets/images/Untitled-3.png" alt="" />
                                                <h4>UI/UX Design</h4>
                                                <p>Portofolio UI/UX and Design yang telah di buat</p>
                                                <Link to="/Uiuxdesign" className="main-button" target="blank" rel="noopener noreferrer">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate">
                                    <Slide right>
                                        <div className="features-item">
                                            <div className="features-icon">
                                                <img src="assets/images/Untitled-1.png" alt="" />
                                                <h4>Portofolio</h4>
                                                <p>Portofolio Program yang telah dibuat</p>
                                                <Link to="/Portofolio" className="main-button" target="blank" rel="noopener noreferrer">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="features-education">
                                <div className="row form-group">
                                    <div className="col-8 col-md-4">
                                        <div className="title-educations">
                                            <h3 className="mb-3"><strong>Education</strong></h3>
                                            <label className="control-label mb-1">School history that has been passed</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <h1 className="mb-2"><strong>2011 – 2014</strong></h1>
                                            <h5 className="mb-4">SMK YUPPENTEK 7 (MULTIMEDIA)</h5>
                                        </div>
                                        <div className="form-group">
                                            <h1 className="mb-2"><strong>2014 – 2018</strong></h1>
                                            <h5>UNIVERSITAS BUDI LUHUR (TEKNIK INFORMATIKA)</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="left-image-decor"></div>

                </main>
            </React.Fragment>
        );
    }
}

export default About;