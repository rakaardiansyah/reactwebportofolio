import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Uiuxdesign extends Component{
    render() {
        return (
            <React.Fragment>
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
                                <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                    <h4>Hi, I'm <em>Raka Ardiansyah</em></h4>
                                    <h1>UI/UX Designer and <br/> FrontEnd Developer</h1>
                                    <p>I am currently working in an IT company as a Programmer and UI/UX Designer.
                                        certificate up to now I have created Blogs, Android Applications, Websites and also UI/UX Design
                                        related to the flow of the program.</p>
                                    <a href="#about" className="main-button-slider"><i className="fa fa-file-text mr-1"></i> Hire Me</a>

                                    <div className="row">
                                        <div className="credit">
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://www.youtube.com/channel/UCrivAuoEkKS7ZudfXUnl74A" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://www.instagram.com/infogtech.id/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://dribbble.com/rakaardiansyah" target="_blank" rel="noreferrer"><i className="fa fa-dribbble"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://www.linkedin.com/in/raka-ardiansyah23/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://github.com/rakaardiansyah" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="left-image-decor"></div>

                <section id="certificate" className="section">
                    <div className="container">
                        <div className="certificate-item" id="certificate">
                            <div className="center-heading">
                                <h2>UI/UX Design</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui1.jpg" className="image-popup" title="Logo Blog Info Gabut">
                                                <img src="assets/images/uiuxdesign/ui1.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Logo Blog Info Gabut</h4>
                                                    <p className="desc-certificate">Berikut adalah logo blog info gabut</p>
                                                    <a href="https://infogabut.blogspot.com/" style="color: #33b960; font-size: 12px;"
                                                        target="_blank" rel="noreferrer noopener" size>infogabut.blogspot.com</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui2.jpg" className="image-popup" title="UI Daftar and Reset Password">
                                                <img src="assets/images/uiuxdesign/ui2.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI Daftar and Reset Password</h4>
                                                    <p className="desc-certificate">Berikut adalah User Interface Daftar and Reset Password untuk Android dan Website </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui3.jpg" className="image-popup" title="New Kopkar BSM Ver 0.1">
                                                <img src="assets/images/uiuxdesign/ui3.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">New Kopkar BSM Ver 0.1</h4>
                                                    <p className="desc-certificate">Aplikasi untuk anggota Kopkar BSM Versi 0.1(beta)</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui4.jpg" className="image-popup" title="UI On Boarding Apps">
                                                <img src="assets/images/uiuxdesign/ui4.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI On Boarding Apps</h4>
                                                    <p className="desc-certificate">UI On Boarding Aplikasi Android Infogabut Blogspot</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui5.jpg" className="image-popup" title="Logo DnC">
                                                <img src="assets/images/uiuxdesign/ui5.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Logo DnC</h4>
                                                    <p className="desc-certificate">Berikut adalah logo DnC Online Shop</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui6.jpg" className="image-popup" title="Logo Website rakaardiansyah">
                                                <img src="assets/images/uiuxdesign/ui6.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Logo Website Personal</h4>
                                                    <p className="desc-certificate">Berikut beberapa opsi Logo Website Raka Ardiansyah </p><a href="rakaardiansyah.my.id" style="color: #33b960; font-size: 12px;" target="_blank" rel="noreferrer noopener" size>rakaardiansyah.my.id</a>
                                                    <p className="desc-certificate"></p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui7.jpg" className="image-popup" title="UI Workout">
                                                <img src="assets/images/uiuxdesign/ui7.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI Workout</h4>
                                                    <p className="desc-certificate">Berikut adalah Sketsa UI Aplikasi Workout</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui8.jpg" className="image-popup" title="UI ComPro Kopkar BSM Opsi 1">
                                                <img src="assets/images/uiuxdesign/ui8.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI ComPro Kopkar BSM Opsi 1</h4>
                                                    <p className="desc-certificate">Berikut adalah UI Company Profile Kopkar BSM Opsi 1</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui9.jpg" className="image-popup" title="UI ComPro Kopkar BSM Opsi 2">
                                                <img src="assets/images/uiuxdesign/ui9.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI ComPro Kopkar BSM Opsi 2</h4>
                                                    <p className="desc-certificate">Berikut adalah UI Company Profile Kopkar BSM Opsi 2</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui11.jpg" className="image-popup" title="Icon Category Apps Mobile ESS">
                                                <img src="assets/images/uiuxdesign/ui11.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Icon Category Apps Mobile ESS</h4>
                                                    <p className="desc-certificate">Berikut adalah Icon Category Pack untuk Aplikasi Android Mobile ESS</p><a href="https://play.google.com/store/apps/details?id=com.kti.kopkar" style="color: #33b960; font-size: 12px;" target="_blank" rel="noreferrer noopener" size>Apps Mobile ESS</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui12.jpg" className="image-popup" title="Icon Category Apps Laznas">
                                                <img src="assets/images/uiuxdesign/ui12.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Icon Category Apps Laznas</h4>
                                                    <p className="desc-certificate">Berikut adalah Icon Category Pack untuk Aplikasi Android Laznas Donation</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui13.jpg" className="image-popup" title="UI Apps Film Anime">
                                                <img src="assets/images/uiuxdesign/ui13.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI Apps Film Anime</h4>
                                                    <p className="desc-certificate">Berikut adalah UI Apps Film Anime</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui14.jpg" className="image-popup" title="Web Landing Page Downlod Apps">
                                                <img src="assets/images/uiuxdesign/ui14.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Web Landing Page Downlod Apps</h4>
                                                    <p className="desc-certificate">Berikut adalah Tampilan Web Landing Page2 di Gunakan untuk download Apps New Kopkar BSM.</p>
                                                    <a href="https://download.kopkarbsm.co.id/" style="color: #33b960; font-size: 12px;" target="_blank" rel="noreferrer noopener" size>download.kopkarbsm.co.id</a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui15.jpg" className="image-popup" title="Image Apps Playstore">
                                                <img src="assets/images/uiuxdesign/ui15.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Image Apps Playstore</h4>
                                                    <p className="desc-certificate">Berikut adalah Beberapa Opsi Image Apps New Kopkar BSM di Playstore</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui16.jpg" className="image-popup" title="UI Apps Laznas Donation">
                                                <img src="assets/images/uiuxdesign/ui16.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">UI Apps Laznas Donation</h4>
                                                    <p className="desc-certificate">Berikut adalah UI Aplikasi Laznas Donation</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/uiuxdesign/ui17.jpg" className="image-popup" title="Apps E-Commerce">
                                                <img src="assets/images/uiuxdesign/ui17.jpg" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Apps E-Commerce</h4>
                                                    <p className="desc-certificate">Berikut adalah UI/UX Aplikasi Ecommerce Marketplace yang di buat</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <nav className="navbar navbar-dark bg-info navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
                    <ul className="navbar-nav nav-justified w-100">
                        <li className="nav-item">
                            <a href="/home" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <p className="bottomNav">Home</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Portofolio" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
                                </svg>
                                <p className="bottomNav">Portofolio</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/Uiuxdesign" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-journal-richtext" viewBox="0 0 16 16">
                                    <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                </svg>
                                <p className="bottomNav">UIUX</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portofolio" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                                </svg>
                                <p className="bottomNav">Experience</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact-us" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-file-person-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
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

export default Uiuxdesign;