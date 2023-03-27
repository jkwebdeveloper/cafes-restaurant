import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
          <div className="kf-titles">
            <div
              className="kf-subtitle"
              // data-animate="active"
            >
              About Kaffen
            </div>
            <h3
              className="kf-title"
              // data-animate="active"
            >
              New London Coffee Founded For Extraordinary Test
            </h3>
          </div>
          <div
            className="kf-text "
            // data-animate="active"
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo inventore veritatis
            </p>
          </div>
          <div className="kf-choose-list">
            <ul>
              <li className="" data-animate="active">
                <div className="icon">
                  <img
                    src={require('../../assets/images/choose_icon1.png')}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h5 className="name">Natural Coffee Beans</h5>
                  <div className="subname">
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque
                  </div>
                </div>
              </li>
              <li className="" data-animate="active">
                <div className="icon">
                  <img
                    src={require('../../assets/images/choose_icon2.png')}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h5 className="name">100% ISO Certification</h5>
                  <div className="subname">
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <Link to="/menu-coffee" className="kf-btn" data-animate="active">
            <span>our menu</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
          <div className="kf-choose-image" data-animate="active">
            <img src={require('../../assets/images/about_img2.jpg')} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
