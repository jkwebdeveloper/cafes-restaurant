import React from 'react'

const Reservation = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{
              backgroundImage: 'url(images/menu_reservation_inner_bg2.jpg)',
            }}
          />
          <div className="container">
            <h1
              className="kf-h-title text-anim-1 scroll-animate"
              data-splitting="chars"
              data-animate="active"
            >
              Reservation
            </h1>
          </div>
        </section>
        {/* Section Reservation */}
        <section className="section kf-reservation">
          <div className="container">
            <div
              className="kf-reservation-form element-anim-1 scroll-animate"
              data-animate="active"
            >
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
        {/* Section Insta Carousel */}
        <div
          className="section kf-insta-carousel element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal1.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal2.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal3.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal4.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal5.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal6.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal1.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal2.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal3.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal4.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal5.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src="images/ins_gal6.jpg" alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Brands */}
        <div className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
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

export default Reservation
