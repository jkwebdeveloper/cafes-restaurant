import React from 'react'
import menu_logo from '../../assets/images/menu_logo.png'
import { Link } from 'react-router-dom'


const KFmenu = () => {
  return (
    <div className="container">
      <div className="kf-titles align-center">
        <div className="kf-subtitle " data-animate="active">
          Choose Best Coffee
        </div>
        <h3 className="kf-title " data-animate="active">
          Kaffen Popular Coffee Menu
        </h3>
      </div>
      <div
        className="kf-menu-items"
        style={{ backgroundImage: `url(${menu_logo})` }}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-menu-item " data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../../assets/images/menu1.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Americano Coffee</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$4.9</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-menu-item " data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../../assets/images/menu2.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Espresso Coffee</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$4.9</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-menu-item " data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../../assets/images/menu3.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Barista Pouring Syrup</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$3.5</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-menu-item " data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../../assets/images/menu4.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Cold - Coffee</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$6.0</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-menu-item " data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../../assets/images/menu5.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino Arabica</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$2.8</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-menu-item " data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../../assets/images/menu6.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Milk Cream Coffee</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$7.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KFmenu
