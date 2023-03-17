import React from 'react'

const MenuCoffee = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: 'url(images/service3.jpg)' }}
          />
          <div className="container">
            <h1
              className="kf-h-title text-anim-1 scroll-animate"
              data-splitting="chars"
              data-animate="active"
            >
              Coffee Menu
            </h1>
          </div>
        </section>
        {/* Section Menu */}
        <section className="section kf-menu kf-menu-tabs">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle element-anim-1 scroll-animate"
                data-animate="active"
              >
                Choose Best of
              </div>
              <h3
                className="kf-title element-anim-1 scroll-animate"
                data-animate="active"
              >
                Kaffen Coffee Menu
              </h3>
            </div>
            <div
              className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="#" data-href=".all" className="active">
                All
              </a>
              <a href="#" data-href=".fast-food">
                Fast food
              </a>
              <a href="#" data-href=".hot-coffee">
                Hot coffee
              </a>
              <a href="#" data-href=".dessert">
                Dessert
              </a>
            </div>
            <div
              className="kf-menu-items"
              style={{ backgroundImage: 'url(images/menu_logo.png)' }}
            >
              <div className="row">
                <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu1.jpg" className="has-popup-image">
                        <img src="images/menu1.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu2.jpg" className="has-popup-image">
                        <img src="images/menu2.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu3.jpg" className="has-popup-image">
                        <img src="images/menu3.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu4.jpg" className="has-popup-image">
                        <img src="images/menu4.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu5.jpg" className="has-popup-image">
                        <img src="images/menu5.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu6.jpg" className="has-popup-image">
                        <img src="images/menu6.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/ins_gal1.jpg" className="has-popup-image">
                        <img src="images/ins_gal1.jpg" alt="" />
                      </a>
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
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/ins_gal3.jpg" className="has-popup-image">
                        <img src="images/ins_gal3.jpg" alt="" />
                      </a>
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
            <div
              className="kf-reservation-form element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div
                className="image-left"
                style={{ backgroundImage: 'url(images/reservation5.jpg)' }}
              />
              <div
                className="image-right"
                style={{ backgroundImage: 'url(images/reservation6.jpg)' }}
              />
              <div className="kf-titles align-center">
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
                        href="#"
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
              </div>
            </div>
          </div>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuCoffee
