import React from 'react'
import menu_rest_inner_bg from '../assets/images/menu_rest_inner_bg.jpg'
import menu_r_l1 from '../assets/images/menu_r_l1.jpg'
import menu_r_l2 from '../assets/images/menu_r_l2.jpg'
import cta_bg3 from '../assets/images/cta_bg3.jpg'
import menu_r_l3 from '../assets/images/menu_r_l3.jpg'
import menu_r_l4 from '../assets/images/menu_r_l4.jpg'



const MenuRestaurant = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${menu_rest_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Restaurant Menu
            </h1>
          </div>
        </section>
        {/* Section Menu-2 */}
        <section className="section kf-menu">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Choose Best of
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Kaffen Lunch Menu
              </h3>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-items-2">
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r1.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r1.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Chicken</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$4.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r2.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r2.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Salad Bowl</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$199</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r3.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r3.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Smoothie</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$55.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r4.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r4.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Gin Trifles</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$37.5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-image-2 left"
                  data-animate="active"
                  style={{ backgroundImage: `url(${menu_r_l1})` }}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-image-2 right"
                  data-animate="active"
                  style={{ backgroundImage: `url(${menu_r_l2})` }}
                />
                <div className="kf-menu-items-2">
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r5.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r5.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Quesadillas</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$4.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r6.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r6.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Sea Fish</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$79.0</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r7.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r7.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Okonomiyaki</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$99.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r8.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r8.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Benedict</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$68.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg3})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle"
                    data-animate="active"
                  >
                    Need a Table On Coffee House
                  </div>
                  <h3
                    className="kf-title"
                    data-animate="active"
                  >
                    Booking Table For Your &amp; Family Members
                  </h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
                <a
                  href="reservation.html"
                  className="kf-btn"
                  data-animate="active"
                >
                  <span>booking table</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section Menu-2 */}
        <section className="section kf-menu">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Choose Best of
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Kaffen Dinner Menu
              </h3>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="kf-menu-items-2">
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r1.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r1.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Chicken</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$4.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r2.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r2.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Salad Bowl</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$199</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r3.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r3.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Smoothie</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$55.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r4.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r4.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Gin Trifles</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$37.5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-image-2 left"
                  data-animate="active"
                  style={{ backgroundImage: `url(${menu_r_l3})` }}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-image-2 right"
                  data-animate="active"
                  style={{ backgroundImage: `url(${menu_r_l4})` }}
                />
                <div className="kf-menu-items-2">
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r5.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r5.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Quesadillas</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$4.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r6.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r6.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Sea Fish</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$79.0</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r7.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r7.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Okonomiyaki</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$99.9</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="kf-menu-item-2"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu_r8.jpg" className="has-popup-image">
                        <img src={require("../assets/images/menu_r8.jpg")} alt="" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Benedict</h5>
                      <div className="subname">Sed ut perspiciatis unde</div>
                      <div className="price">
                        <span>$68.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Insta Carousel */}
        <div
          className="section kf-insta-carousel"
          data-animate="active"
        >
          <div className="container">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal1.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal2.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal3.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal4.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal5.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal6.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal1.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal2.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal3.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal4.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal5.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item">
                    <div className="image kf-image-hover">
                      <a href="instagram.com" target="blank">
                        <img src={require("../assets/images/ins_gal6.jpg")} alt="" />
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
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

export default MenuRestaurant
