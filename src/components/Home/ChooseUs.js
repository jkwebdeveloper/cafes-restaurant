import React from 'react'
import parallax_icon1 from '../../assets/images/parallax_icon1.png'
import parallax_icon2 from '../../assets/images/parallax_icon2.png'
import parallax_icon3 from '../../assets/images/parallax_icon3.png'
import { Link } from 'react-router-dom'


const ChooseUs = () => {
  return (
    <div className="container">
      <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
        <div
          className="p-icon"
          style={{ backgroundImage: `url(${parallax_icon1})` }}
        />
      </div>
      <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
        <div
          className="p-icon"
          style={{ backgroundImage: `url(${parallax_icon2})` }}
        />
      </div>
      <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
        <div
          className="p-icon"
          style={{ backgroundImage: `url(${parallax_icon3})` }}
        />
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="kf-choose-image " data-animate="active">
            <img src={require('../../assets/images/choose_img.jpg')} alt="" />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
          <div className="kf-titles">
            <div className="kf-subtitle " data-animate="active">
              Why Choose Us
            </div>
            <h3 className="kf-title " data-animate="active">
              New London Coffee Founded For Extraordinary Test
            </h3>
          </div>
          <div className="kf-text " data-animate="active">
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
          <Link to="/about" className="kf-btn " data-animate="active">
            <span>explore more</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
