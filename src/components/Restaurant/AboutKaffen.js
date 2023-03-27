import React from 'react'
import { Link } from 'react-router-dom'


const AboutKaffen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
          <div className="kf-titles">
            <div className="kf-subtitle" data-animate="active">
              About Kaffen
            </div>
            <h3 className="kf-title" data-animate="active">
              Have Nice &amp; Enjoyable <br />
              Time With Our Foods
            </h3>
          </div>
          <div className="kf-text" data-animate="active">
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
          <Link to="/about" className="kf-btn" data-animate="active">
            <span>explore more us</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1 align-self-center">
          <div className="kf-services-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-services-item-2" data-animate="active">
                <div className="image">
                  <img
                    src={require('../../assets/images/service_icon1.png')}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h5 className="name">Birthday Cakes</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-services-item-2" data-animate="active">
                <div className="image">
                  <img
                    src={require('../../assets/images/service_icon2.png')}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h5 className="name">Fresh Foods</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-services-item-2" data-animate="active">
                <div className="image">
                  <img
                    src={require('../../assets/images/service_icon3.png')}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h5 className="name">Skills Chefs</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-services-item-2" data-animate="active">
                <div className="image">
                  <img
                    src={require('../../assets/images/service_icon4.png')}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h5 className="name">Organic Juice</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutKaffen
