import React, { Component } from 'react';

class Home extends Component{
    render() {
        return (
            <React.Fragment>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/gtag/js?id=G-59EHFRRNV4"
                        height="0" width="0" style="display:none;visibility:hidden">
                    </iframe>
                </noscript>

                <div id="preloader">
                    <div className="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div id="welcome" className="welcome-area">
                    <div className="header-text">
                        <div className="container">
                            <div className="row">
                                <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <h4>Hi, I'm <em>Raka Ardiansyah</em></h4>
                                    <h1>UI/UX Designer and <br/> FrontEnd Developer</h1>
                                    <p>I am currently working in an IT company as a Programmer and UI/UX Designer.
                                        certificate up to now I have created Blogs, Android npmApplications, Websites and also UI/UX Design
                                        related to the flow of the program.</p>
                                    <a href="#!" className="main-button-slider">
                                        <i className="fa fa-file-text mr-1"></i> Hire Me</a>

                                    <div className="row">
                                        <div className="credit">
                                            <a className="btn btn-outline-primary btn-square mr-1"
                                                href="https://www.youtube.com/channel/UCrivAuoEkKS7ZudfXUnl74A"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-youtube"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1"
                                                href="https://www.instagram.com/infogtech.id/"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-instagram"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1"
                                                href="https://dribbble.com/rakaardiansyah"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-dribbble"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1"
                                                href="https://www.linkedin.com/in/raka-ardiansyah23/"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-linkedin"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1"
                                                href="https://github.com/rakaardiansyah"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-dark bg-info navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
                    <ul className="navbar-nav nav-justified w-100">
                        <li className="nav-item">
                            <a href="#welcome" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1
                                .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <p className="bottomNav">Home</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#certificate" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
                                </svg>
                                <p className="bottomNav">Portofolio</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://dribbble.com/rakaardiansyah" target="_blank" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-journal-richtext" viewBox="0 0 16 16">
                                    <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.
                                    5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a
                                    .5.5 0 0 1-.5-.5z"/>
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.
                                    5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                </svg>
                                <p className="bottomNav">UIUX</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portofolio" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a
                                    .5.5 0 0 1-.5-.5z"/>
                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                </svg>
                                <p className="bottomNav">Experience</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact-us" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-file-person-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5
                                    1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                                </svg>
                                <p className="bottomNav">Contact</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        );
    }
}

export default Home;
