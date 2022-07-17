import React, { Component } from 'react'

export class Header extends Component{
    render() {
        return (
            <React.Fragment>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6PVF8J"
                        height="0" width="0" style="display:none;visibility:hidden">
                    </iframe>
                </noscript>

                <header id="header" className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <a href="#welcome" className="logo">
                                        RAKA
                                    </a>
                                    <ul className="nav">
                                        <li className="scroll-to-section">
                                            <a href="#welcome" className="menu-item">Home</a>
                                        </li>
                                        <li className="scroll-to-section">
                                            <a href="#about" className="menu-item">About Me</a>
                                        </li>
                                        <li className="scroll-to-section">
                                            <a href="#portofolio" className="menu-item">Experience</a>
                                        </li>
                                        <li className="scroll-to-section">
                                            <a href="#contact-us" className="menu-item">Contact</a>
                                        </li>
                                        <li className="scroll-to-section">
                                            <a href="https://infogabut.blogspot.com/" target="_blank">Blog</a>
                                        </li>
                                    </ul>
                                    <a className='menu-trigger'>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;