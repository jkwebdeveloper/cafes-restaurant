import React from 'react'
import menu_logo from '../assets/images/menu_logo.png'
import { Link } from 'react-router-dom'


const Plats = () => {
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
                  <img src={require('../assets/images/plat/Ailes de poulet au four.jpg')} alt="" />
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
                  <img src={require('../assets/images/plat/Bouellete de baracuda provençale.jpeg')} alt="" />
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
                  <img src={require('../assets/images/menu3.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Barista Pouring Syrup</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$3.5</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/menu4.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Late</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$6.0</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/menu5.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino Arabica</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$2.8</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/menu6.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Milk Cream</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$7.5</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/ins_gal1.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Italian Burger</h5>
                <div className="subname">
                  Tomatoes, italian sausage, ground, onions, cheese
                </div>
                <div className="price">$12.8</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
            <div className="kf-menu-item" data-animate="active">
              <div className="image kf-image-hover">
                <Link to="#" className="has-popup-image">
                  <img src={require('../assets/images/ins_gal3.jpg')} alt="" />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Chicken Burger</h5>
                <div className="subname">
                  Ground chicken breast, mustard, paprika, onion
                </div>
                <div className="price">$17.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plats
