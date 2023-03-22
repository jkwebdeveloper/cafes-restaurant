import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="kf-footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* logo */}
              <div className="kf-logo">
                <a href="/">
                  <img src={require('../assets/images/logo.png')} alt="" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* hours */}
              <div className="kf-f-hours">
                <h5>Working Hours</h5>
                <ul>
                  <li>
                    Sunday - Thursday
                    <em>08:00 am - 09:00pm</em>
                  </li>
                  <li>
                    Only Friday
                    <em>03:00 pm - 09:00pm</em>
                  </li>
                  <li>
                    <strong>Saturday Close</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* contact */}
              <div className="kf-f-contact">
                <h5>Contact Us</h5>
                <ul>
                  <li>
                    <i className="las la-map-marker" />
                    <em>Location :</em>
                    55 Main Street, New York
                  </li>
                  <li>
                    <i className="las la-envelope-open-text" />
                    <em>Email Address :</em>
                    kaffendev@gmail.com
                  </li>
                  <li>
                    <i className="las la-phone" />
                    <em>Phone Number :</em>
                    +012 (345) 678 99
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* gallery */}
              <div className="kf-f-gallery">
                <h5>Gallery</h5>
                <ul>
                  <li>
                    <a
                      href={require("../assets/images/grid_gal1.jpg")}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={require("../assets/images/grid_gal1.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require("../assets/images/grid_gal2.jpg")}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={require("../assets/images/grid_gal2.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require("../assets/images/grid_gal3.jpg")}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={require("../assets/images/grid_gal3.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require("../assets/images/grid_gal4.jpg")}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={require("../assets/images/grid_gal4.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require("../assets/images/grid_gal5.jpg")}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={require("../assets/images/grid_gal5.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require("../assets/images/grid_gal1.jpg")}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={require("../assets/images/grid_gal1.jpg")} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
              {/* copyright */}
              <div className="kf-copyright">
                Copyright © 2022 Kaffen. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
