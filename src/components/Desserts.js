import React from 'react'
import menu_logo from '../assets/images/menu_logo.png'
import { Link } from 'react-router-dom'

const Desserts = () => {
  return (
    <section className="section kf-menu kf-menu-tabs">
      <div
        className="kf-menu-items"
        style={{ backgroundImage: `url(${menu_logo})` }}
      >
        <div className="row">
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/desserts/Colonel.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Americano</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$4.9</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/desserts/Dame blanche.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Espresso</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$4.9</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/desserts/la-dame-noire.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Barista Pouring Syrup</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$3.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Desserts
