import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sub-footer">
                                    <p>Copyright &copy; 2022 RakaArd&nbsp;
                                        <a rel="nofollow" href="#!">Website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;