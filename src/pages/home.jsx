import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

class Home extends React.Component{
    render() {
        return (
            <div>
                <div id="preloader">
                    <div className="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <a href="#" className="logo">
                                        RAKA
                                    </a>
                                    <ul className="nav">
                                        <li className="scroll-to-section"><a href="#welcome" className="menu-item">Home</a></li>
                                        <li className="scroll-to-section"><a href="#about" className="menu-item">About Me</a></li>
                                        <li className="scroll-to-section"><a href="#portofolio" className="menu-item">Experience</a></li>
                                        <li className="scroll-to-section"><a href="#contact-us" className="menu-item">Contact</a></li>
                                        <li className="scroll-to-section"><a href="https://infogabut.blogspot.com/" target="_blank">Blog</a></li>
                                    </ul>
                                    <a class='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="welcome-area" id="welcome">
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
                                    <a href="#!" className="main-button-slider"><i className="fa fa-file-text mr-1"></i> Hire Me</a>

                                    <div className="row">
                                        <div className="credit">
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://www.youtube.com/channel/UCrivAuoEkKS7ZudfXUnl74A" target="_blank"><i className="fa fa-youtube"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://www.instagram.com/infogtech.id/" target="_blank"><i className="fa fa-instagram"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://dribbble.com/rakaardiansyah" target="_blank"><i className="fa fa-dribbble"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://www.linkedin.com/in/raka-ardiansyah23/" target="_blank"><i className="fa fa-linkedin"></i></a>
                                            <a className="btn btn-outline-primary btn-square mr-1" href="https://github.com/rakaardiansyah" target="_blank"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <div className="section-experience left-text-content">
                                    <div className="section-heading">
                                        <h1>3+</h1>
                                    </div>
                                    <h3>Years <br/>Working <br/>Experience</h3>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                                <div className="features-item">
                                    <div className="features-icon">
                                        <img src="assets/images/Untitled-2.png" alt=""/>
                                        <h4>LinkedIn</h4>
                                        <p>Info Lebih Lanjut? Connect ke LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/raka-ardiansyah23/" target="_blank" className="main-button">
                                            Connect
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                <div className="features-item">
                                    <div className="features-icon">
                                        <img src="assets/images/Untitled-3.png" alt=""/>
                                        <h4>UI/UX Design</h4>
                                        <p>Portofolio UI/UX and Design yang telah di buat</p>
                                        <a href="https://dribbble.com/rakaardiansyah" target="_blank" className="main-button">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 aos-init aos-animate"
                                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                <div className="features-item">
                                    <div className="features-icon">
                                        <img src="assets/images/Untitled-1.png" alt=""/>
                                        <h4>Portofolio</h4>
                                        <p>Portofolio Program yang telah dibuat</p>
                                        <a href="/portofolio.html" className="main-button">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="left-image-decor"></div>

                <section className="section" id="">
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

                <section className="section" id="portofolio">
                    <div className="container">
                        <div className="center-heading" id="portofolio">
                            <h2>Experience</h2>
                        </div>
                        <div className="features-portofolio">
                            <div className="right-text mobile-bottom-fix">
                                <ul>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.2s">
                                        <img src="assets/images/comprokti.png" alt=""/>
                                        <div className="text">
                                            <h4>Company Profile PT. Khazanah Teknologi Indonesia</h4>
                                            <p>Membuat Company Profile terkait alasan menjual produk atau layanan yang ditawarkan juga berisi visi-misi,
                                                serta memberi tahu kepada pengunjung pada website PT Khazanah Teknologi Indonesia.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                        <img src="assets/images/mobileess.png" alt=""/>
                                        <div className="text">
                                            <h4>UI/UX Kopkar BSM Mobile ESS</h4>
                                            <p>Membuat UI/UX Aplikasi Absensi Mobile ESS untuk Absensi Karyawan Kopkar BSM yang di gunakan untuk keadaan
                                                WFH/WFO dalam Bekerja serta dapat mengisi Daily Activity.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                                        <img src="assets/images/webevoting.png" alt=""/>
                                        <div className="text">
                                            <h4>Web E-Voting Koperasi Karyawan Kopkar BSM</h4>
                                            <p>Membuat FrontEnd Web E-Voting Kopkar BSM untuk perhitungan pemilihan kandidat Pengurus dan Pengawas Koperasi Karyawan BSM
                                                Periode 2021-2024. Proses perhitungan suara tidak perlu ditulis manual karena proses input voting, perhitungan suara,
                                                hingga hasil voting akan ditampilkan otomatis oleh sistem aplikasi yang telah mengolahnya menjadi informasi dalam bentuk
                                                digital.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.8s">
                                        <img src="assets/images/rumahindonesia.png" alt=""/>
                                        <div className="text">
                                            <h4>FrontEnd Admin Rumah Indonesia</h4>
                                            <p>Membuat FrontEnd Admin Rumah Indonesia yang di gunakan untuk situs belanja online yang dapat menawarkan berbagai macam
                                                jenis produk jadi orang bisa buka toko dan menjual produk dagangannya pada Website Rumah Indonesia.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.10s">
                                        <img src="assets/images/laznasindonesia.png" alt=""/>
                                        <div className="text">
                                            <h4>UI/UX and FrontEnd Laznas Donation</h4>
                                            <p>Membuat UI/UX and FrontEnd Laznas Donation yang di gunakan untuk kegiatan Donasi, Pembayaran Zakat, Pembayaran
                                                Infaq, Maupun Pembayaran Wakaf.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.12s">
                                        <img src="assets/images/image-blank.png" alt=""/>
                                        <div className="text">
                                            <h4>Company Profile PT Hiyokuna Agro Lestari</h4>
                                            <p>Membuat Logo Website, UI/UX and FrontEnd PT Hiyokuna Agro Lestari menyediakan perkebunan bebagai jenis ubi dengan
                                                berbagai kualitas untuk di Export ke berbagai Negara.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.14s">
                                        <img src="assets/images/comprokopkarbsm.png" alt=""/>
                                        <div className="text">
                                            <h4>Company Profile Kopkar BSM</h4>
                                            <p>Membuat Company Profile terkait alasan menjual produk atau layanan yang ditawarkan juga berisi visi-misi,
                                                serta memberi tahu kepada pengunjung pada website PT Koprasi Karyawan Bank Syariah Mandiri.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.16s">
                                        <img src="assets/images/referralhaji.png" alt=""/>
                                        <div className="text">
                                            <h4>FrontEnd Referral Haji Bank Syariah Indonesia</h4>
                                            <p>Membuat FrontEnd di gunakan untuk pendaftaran Kegiatan Haji dan Kegiatan Umrah untuk Internal Karyawan Bank Syariah Indonesia
                                                yang di publikasikan pada divisi FHG.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="toolsatwork">
                    <div className="container">
                        <div className="tools-atwork">
                            <div className="row form-group">
                                <div className="col-8 col-md-4">
                                    <div className="title-tools" id="toolsatwork">
                                        <h3 className="mb-3"><strong>Tools at Work</strong></h3>
                                        <label className="control-label mb-1">Tools yang digunakan dalam tahap development</label>
                                    </div>
                                </div>
                                <div className="col-lg-8 row">
                                    <div className="row portfolio-container">
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="100" >
                                        <div className="tools-item">
                                            <div className="position-relative mb-2">
                                                <img className="img-fluid w-75" src="assets/images/tools-icon/html-5.png" alt=""/>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="200" >
                                        <div className="tools-item">
                                            <div className="position-relative mb-2">
                                                <img className="img-fluid w-75" src="assets/images/tools-icon/css.png" alt=""/>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="300" >
                                        <div className="tools-item">
                                            <div className="position-relative mb-2">
                                                <img className="img-fluid w-75" src="assets/images/tools-icon/javascript.png" alt=""/>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400" >
                                        <div className="tools-item">
                                            <div className="position-relative mb-2">
                                                <img className="img-fluid w-75" src="assets/images/tools-icon/java.png" alt=""/>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400" >
                                            <div className="tools-item">
                                            <div className="position-relative mb-2">
                                                <img className="img-fluid w-75" src="assets/images/tools-icon/php.png" alt=""/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/bootstrap.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/vue-js.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/mysql.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/sql-lite.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/firebase.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/laravel.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/filezilla.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/visual-studio.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/git.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/blogger.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/uxiu.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/wireframe.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/balsamiq-mockup.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/xd.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/photoshop.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/coreldraw.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="400">
                                            <div className="tools-item">
                                                <div className="position-relative mb-2">
                                                    <img className="img-fluid w-75" src="assets/images/tools-icon/figma.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="certificate">
                    <div className="container">
                        <div className="certificate-item" id="certificate">
                            <div className="center-heading">
                                <h2>Certificate Gallery</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/certificate/E-Certificate Quality Assurance Mindset - Raka Ardiansyah Pratama (1)-1.png"
                                                className="image-popup"
                                                title="Quality Assurance Mindset">
                                                <img src="assets/images/certificate/E-Certificate Quality Assurance Mindset - Raka Ardiansyah Pratama (1)-1.png"
                                                    className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Quality Assurance Mindset</h4>
                                                    <p className="desc-certificate">Rangkaian workshop yang menerangkan terkait pekerjaan yang biasa dilakukan oleh QA di beberapa perusahaan.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/certificate/Baparekraf-Developer-Day-2020.png" className="image-popup" title="Baparekraf 2020">
                                                <img src="assets/images/certificate/Baparekraf-Developer-Day-2020.png" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Baparekraf 2020</h4>
                                                    <p className="desc-certificate">Rangkaian event untuk meningkatkan kapasitas pelaku kreatif khususnya untuk subsektor aplikasi dan games.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/certificate/Baparekraf-Developer-Day 2021.png" className="image-popup" title="Baparekraf 2021">
                                                <img src="assets/images/certificate/Baparekraf-Developer-Day 2021.png" className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Baparekraf 2021</h4>
                                                    <p className="desc-certificate">Rangkaian event untuk meningkatkan kapasitas pelaku kreatif khususnya untuk subsektor aplikasi dan games.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/certificate/Cara-Cepat-Membangun-UI_UX-dengan-Memanfaatkan-Fitur-pada-Figma.png"
                                                className="image-popup" title="Pijar Mahir-UI/UX">
                                                <img src="assets/images/certificate/Cara-Cepat-Membangun-UI_UX-dengan-Memanfaatkan-Fitur-pada-Figma.png"
                                                    className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Pijar Mahir-UI/UX</h4>
                                                    <p className="desc-certificate">Cara cepat emmbangun UI/UX dengan memanfaatkan Fitur pada Figma.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/certificate/Pijar_mahir--raka ardiansyah--Be The Most Wanted UX Researcher-1.jpg"
                                                className="image-popup"
                                                title="Pijar Mahir-UX Researcher">
                                                <img src="assets/images/certificate/Pijar_mahir--raka ardiansyah--Be The Most Wanted UX Researcher-1.jpg"
                                                    className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Pijar Mahir-UX Researcher</h4>
                                                    <p className="desc-certificate">Mencari informasi dari target pengguna(user) seputar perilaku dan kebutuhan yang kemudian dianalisis untuk menghasilkan desain yang sesuai kebutuhan pengguna.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="tm-special-img-container">
                                        <div className="certificate-item">
                                            <a href="assets/images/certificate/Pijar_mahir--raka ardiansyah--UI Design Live Class _ Designing Outstanding Product-1.jpg"
                                                className="image-popup" title="Pijar Mahir-UI Design">
                                                <img src="assets/images/certificate/Pijar_mahir--raka ardiansyah--UI Design Live Class _ Designing Outstanding Product-1.jpg"
                                                    className="tm-special-img img-responsive" alt=""/>
                                                <div className="tm-special-description">
                                                    <h4 className="title-certificate">Pijar Mahir-UI Design</h4>
                                                    <p className="desc-certificate">Mempelajari Design yang baik dan menarik untuk dapat di terapkan kedalam bentuk sebuah Aplikasi.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-primary text-white" id="contact-us">
                    <div className="container text-center">
                        <h2 className="mb-4">Ingin info lebih lanjut?</h2>
                        <a href="#portfolio" className="btn btn-xl btn-light mr-4">Look at Me!</a>
                        <a href="https://api.whatsapp.com/send/?phone=6283813187473" className="btn btn-xl btn-dark">WhatsApp</a>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-map-marker text-primary"></i>
                                        <h4 className="text-uppercase m-0">Address</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">Kuta Baru, Kab. Tangerang, Indonesia</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-envelope text-primary"></i>
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50"><a href="https://mail.google.com/mail?authuser=raka.devproject@gmail.com#all/1567f47dd61869df" target="_blank">raka.devproject@gmail.com</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-100">
                                    <div className="card-body text-center">
                                        <i className="fa fa-mobile text-primary"></i>
                                        <h4 className="text-uppercase m-0">Phone</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50"><a href="https://api.whatsapp.com/send/?phone=6283813187473&" target="_blank">+62 (838) 1318-7473 (WA)</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="testimonials">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="center-heading" id="testimonials">
                                    <h2>Apa Kata Klien <em>Kami</em></h2>
                                    <p>Berikut adalah testimonial dari client kami</p>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <div className="owl-carousel owl-theme">
                                    <div className="item service-item">
                                        <div className="author">
                                            <i><img src="assets/images/testimonial-author-1.png" alt=""/></i>
                                        </div>
                                        <div className="testimonial-content">
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Anonim</h4>
                                            <p>“sangat terpercaya, respon sangat cepat dan memuaskan, jangan ragu bikin jasa website.”</p>
                                            <span>Pengusaha</span>
                                        </div>
                                    </div>
                                    <div className="item service-item">
                                        <div className="author">
                                            <i><img src="assets/images/testimonial-author-1.png" alt=""/></i>
                                        </div>
                                        <div className="testimonial-content">
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Anonim</h4>
                                            <p>“kebanyakan pemesan web adalah toko online, saya khawatir apa web fotografi saya bisa terlaksana,
                                                tp pas ketemu rakaardiansyah web, akhirnya web fotografi saya langsung jadi dan hasilnya memuaskan.”</p>
                                            <span>Photographer</span>
                                        </div>
                                    </div>
                                    <div className="item service-item">
                                        <div className="author">
                                            <i><img src="assets/images/testimonial-author-1.png" alt=""/></i>
                                        </div>
                                        <div className="testimonial-content">
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Anonim</h4>
                                            <p>“untuk saya yg berjualan furnitur sangat susah apabila gak pake jasa web,
                                                pas searching ketemu jasa pembuatan web rakaardiansyah, saya lihat sepertinya bagus dan terpercaya,
                                                lalu saya langsung pesan, dan hasilnya memuaskan.”</p>
                                            <span>Penjual Online</span>
                                        </div>
                                    </div>
                                    <div className="item service-item">
                                        <div className="author">
                                            <i><img src="assets/images/testimonial-author-1.png" alt="Fourth Author"/></i>
                                        </div>
                                        <div className="testimonial-content">
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Anonim</h4>
                                            <p>"sebagai penjual online saya sangat terbantu sekali dengan website yang di buat oleh jasa pembuatan web rakaardiansyah."</p>
                                            <span>Penjual Online</span>
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
                            <a href="/" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1
                                .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <p className="bottomNav">Home</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/portofolio" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5
                                    1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
                                </svg>
                                <p className="bottomNav">Portofolio</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/uiuxdesign" className="nav-link">
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

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sub-footer">
                                    <p>Copyright &copy; 2022 RakaArd
                                    <a rel="nofollow" href="#">Website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* <script src="assets/js/jquery-2.1.0.min.js"></script>

                <script src="assets/js/popper.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>

                <script src="assets/js/jquery.magnific-popup.min.js"></script>
                <script src="assets/js/jquery.backtotop.js"></script>
                <script src="assets/js/owl-carousel.js"></script>
                <script src="assets/js/scrollreveal.min.js"></script>
                <script src="assets/js/waypoints.min.js"></script>
                <script src="assets/js/jquery.counterup.min.js"></script>
                <script src="assets/js/imgfix.min.js"></script>

                <script src="assets/js/custom.js"></script> */}

            </div>
        );
    }
}

export default Home;
