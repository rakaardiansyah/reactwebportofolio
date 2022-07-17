import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">

                    <section id="contact-us" className="section bg-primary text-white">
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
                                            <div className="small text-black-50"><a href="https://mail.google.com/mail?authuser=raka.devproject@gmail.com#all/1567f47dd61869df"  >raka.devproject@gmail.com</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="card py-4 h-100">
                                        <div className="card-body text-center">
                                            <i className="fa fa-mobile text-primary"></i>
                                            <h4 className="text-uppercase m-0">Phone</h4>
                                            <hr className="my-4" />
                                            <div className="small text-black-50"><a href="https://api.whatsapp.com/send/?phone=6283813187473&"  >+62 (838) 1318-7473 (WA)</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </React.Fragment>
        );
    }
}

export default Contact;