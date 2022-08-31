import React from 'react'
import { Link } from 'react-router-dom'


const slider = [
    {
        title: "Man's Clothing",
        description: 'Upto 60% off',
        url: "/products/men's clothing",
        image: 'https://www.realmenrealstyle.com/wp-content/uploads/2021/07/1-20.jpg'
    },
    {
        title: "Women's Wear",
        description: 'upto 70% off',
        url: "/products/women's clothing",
        image: 'https://wallpaperaccess.com/full/334040.jpg'
    },

]

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ maxHeight: '85vh' }}>
                <div className="carousel-inner">
                    {
                        slider.map((slide, index) => {
                            return (
                                <div key={index} className={"carousel-item " + (index === 0 ? "active" : "")}>
                                    <Link to={slide.url}>
                                        <div className='d-flex justify-content-center'>
                                            <img className="d-block" src={slide.image} alt="{slide.title}" style={{ maxHeight: '85vh', width: 'auto' }} />
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>)
}

export default Slider