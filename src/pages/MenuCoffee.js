import React from 'react'
// import service3 from '../assets/images/service3.jpg'
import menu_logo from '../assets/images/menu_logo.png'
import reservation5 from '../assets/images/reservation5.jpg'
import reservation6 from '../assets/images/reservation6.jpg'
import { Link } from 'react-router-dom'
import Brands from '../components/About/Brands'
import MakeYourTable from '../components/Restaurant/MakeYourTable'

const MenuCoffee = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        {/* <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${service3})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Coffee Menu
            </h1>
          </div>
        </section> */}
        {/* Section Menu */}
        <section className="section kf-menu kf-menu-tabs">
          <div className="container">
            <div className="kf-titles align-center">
              <div className="kf-subtitle" data-animate="active">
                Choisissez le meilleur menu
              </div>
              <h3 className="kf-title" data-animate="active">
                Choisissez le meilleur menu
              </h3>
            </div>
            <div className="kf-filter kf-filter-menu" data-animate="active">
              {/* <Link to="#" data-href=".all" className="active">
                All
              </Link> */}
              <Link to="#">Entrées</Link>
              <Link to="#" data-href=".hot-coffee">
                Plats
              </Link>
              <Link to="#" data-href=".hot-coffee">
                Boissons
              </Link>
              <Link to="#" data-href=".dessert">
                Desserts
              </Link>
              <Link to="#" data-href=".dessert">
                Salades
              </Link>
            </div>
            <div
              className="kf-menu-items"
              style={{ backgroundImage: `url(${menu_logo})` }}
            >
              <div className="row">
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu1.jpg')}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">Americano</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$4.9</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu2.jpg')}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">Espresso</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$4.9</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu3.jpg')}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">Barista Pouring Syrup</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$3.5</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu4.jpg')}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">Late</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$6.0</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu5.jpg')}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">Cappuccino Arabica</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$2.8</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu6.jpg')}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">Milk Cream</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$7.5</div>
                    </div>
                  </div>
                </div>
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img
                          src={require('../assets/images/ins_gal1.jpg')}
                          alt=""
                        />
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
                        <img
                          src={require('../assets/images/ins_gal3.jpg')}
                          alt=""
                        />
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
          </div>
        </section>
        {/* Section Reservation */}
        <section className="section kf-reservation kf-section-no-margin">
          <div className="container">
            <div className="kf-reservation-form" data-animate="active">
              <div
                className="image-left"
                style={{ backgroundImage: `url(${reservation5})` }}
              />
              <div
                className="image-right"
                style={{ backgroundImage: `url(${reservation6})` }}
              />
              <MakeYourTable />
              {/* <div className="kf-titles align-center">
                <div className="kf-subtitle">Booking Table</div>
                <h3 className="kf-title">Make Your Reservation</h3>
              </div>
              <form id="rform" method="post">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="text" name="name" placeholder="Full Name" />
                      <i className="far fa-user" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                      <i className="fas fa-at" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="tel" name="tel" placeholder="Phone Number" />
                      <i className="fas fa-mobile-alt" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <select name="persons">
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="date" name="date" />
                      <i className="far fa-calendar-alt" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="kf-field">
                      <input type="text" name="time" placeholder="Time" />
                      <i className="far fa-clock" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="kf-bts">
                      <a
                        href="/"
                        className="kf-btn"
                        onclick="$('#rform').submit(); return false;"
                      >
                        <span>booking table</span>
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <div className="alert-success" style={{ display: 'none' }}>
                <p>Thanks, your message is sent successfully.</p>
              </div> */}
            </div>
          </div>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <Brands />
        </div>
      </div>
    </div>
  )
}

export default MenuCoffee
