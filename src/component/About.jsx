import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">

                    <section id="about" className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                    <div className="section-experience left-text-content">
                                        <div className="section-heading">
                                            <h1>3+</h1>
                                        </div>
                                        <h3>Years <br />Working <br />Experience</h3>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
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
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img src="assets/images/Untitled-3.png" alt="" />
                                            <h4>UI/UX Design</h4>
                                            <p>Portofolio UI/UX and Design yang telah di buat</p>
                                            <a href="/pages/Uiuxdesign.jsx" className="main-button"
                                                target="_blank" rel="noopener noreferrer">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img src="assets/images/Untitled-1.png" alt="" />
                                            <h4>Portofolio</h4>
                                            <p>Portofolio Program yang telah dibuat</p>
                                            <a href="/pages/Portofolio.jsx" className="main-button"
                                                target="_blank" rel="noopener noreferrer">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
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