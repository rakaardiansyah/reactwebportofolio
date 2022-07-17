import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Testimonial extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">

                    <section id="testimonials" className="section" >
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
                                    <OwlCarousel className="owl-carousel owl-theme">
                                        <div className="item service-item">
                                            <div className="author">
                                                <i><img src="assets/images/testimonial-author-1.png" alt="" /></i>
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
                                                <i><img src="assets/images/testimonial-author-1.png" alt="" /></i>
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
                                                <i><img src="assets/images/testimonial-author-1.png" alt="" /></i>
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
                                                <i><img src="assets/images/testimonial-author-1.png" alt="Fourth Author" /></i>
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
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </React.Fragment>
        );
    }
}

export default Testimonial;