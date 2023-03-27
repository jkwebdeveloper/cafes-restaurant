import React from 'react'
import { Link } from 'react-router-dom'


const ServiceSection = () => {
  return (
    <div className="container">
      <div className="kf-services-items row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="kf-services-item " data-animate="active">
            <div className="image kf-image-hover">
              <Link to="/menu-restaurant">
                <img src={require('../../assets/images/service1.jpg')} alt="" />
              </Link>
            </div>
            <div className="desc">
              <div className="icon">
                <i className="las la-utensils" />
              </div>
              <h5 className="name">Restaurant Menu</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="kf-services-item " data-animate="active">
            <div className="image kf-image-hover">
              <Link to="/menu-coffee">
                <img src={require('../../assets/images/service2.jpg')} alt="" />
              </Link>
            </div>
            <div className="desc">
              <div className="icon">
                <i className="las la-coffee" />
              </div>
              <h5 className="name">Coffee Menu</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="kf-services-item " data-animate="active">
            <div className="image kf-image-hover">
              <Link to="/services">
                <img src={require('../../assets/images/service3.jpg')} alt="" />
              </Link>
            </div>
            <div className="desc">
              <div className="icon">
                <i className="las la-glass-cheers" />
              </div>
              <h5 className="name">Food Services</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
