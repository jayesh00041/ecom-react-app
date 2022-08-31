import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='container-fluid'>
            
            <footer>
                
                <div className='row align-items-center p-4 m-3 border-top'>
                    <div className='col-md-3 text-center'>
                        <img src='https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png' alt='logo' className='img-fluid pb-4' />
                        <div>COPYRIGHT © 2022 HURST ALL RIGHTS RESERVED</div>
                    </div>
                    <div className='col-md-3'>
                        <div className="list-group border-light">
                            <span className="list-group-item list-group-item-action">About Hurst</span>
                            <span className="list-group-item list-group-item-action">Contact</span>
                            <span className="list-group-item list-group-item-action">T&amp;C</span>
                            <span className="list-group-item list-group-item-action">Account</span>
                            <span className="list-group-item list-group-item-action">Orders</span>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="list-group border-light">
                            <span className="list-group-item list-group-item-action">Wooden</span>
                            <span className="list-group-item list-group-item-action">Articles</span>
                            <span className="list-group-item list-group-item-action">Catagory</span>
                            <span className="list-group-item list-group-item-action">Products</span>
                            <span className="list-group-item list-group-item-action">Top Products</span>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>TO OUR NEWSLETTER</div>
                        <input className='form-control my-3' />
                        <div className='row'>
                            <div className='col-3'><FaInstagram /></div>
                            <div className='col-3'><FaFacebook /></div>
                            <div className='col-3'><FaLinkedin /></div>
                            <div className='col-3'><FaGithub /></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer