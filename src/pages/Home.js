import React from 'react'
import img from '../assets/images/started_img_n6.jpg'
import started_img_n5 from '../assets/images/started_img_n5.jpg'
import started_img_n3 from '../assets/images/started_img_n3.jpg'
import category_bg from '../assets/images/category_bg.jpg'
import menu_logo from '../assets/images/menu_logo.png'
import parallax_icon1 from '../assets/images/parallax_icon1.png'
import parallax_icon2 from '../assets/images/parallax_icon2.png'
import parallax_icon3 from '../assets/images/parallax_icon3.png'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'
import cta_bg from '../assets/images/cta_bg.jpg'

const Home = () => {
  return (
    <>
      <div className="wrapper">
        {/* Section Started Slider */}
        <section className="section kf-started-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{
                      backgroundImage: `url(${img})`,
                    }}
                  />
                  <div className="container">
                    <div className="description align-left">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        The London <br />
                        Coffee House
                      </h2>
                      <div className="kf-bts">
                        <a href="menu-restaurant.html" className="kf-btn">
                          <span>explore more</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                        <a href="reservation.html" className="kf-btn dark-btn">
                          <span>get delivery</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{
                      // backgroundImage: `url(${started_img_n5})`,
                      backgroundImage: `url(${started_img_n5})`,
                    }}
                  />
                  <div className="container">
                    <div className="description align-left">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        The Paris
                        <br />
                        Coffee House
                      </h2>
                      <div className="kf-bts">
                        <a href="menu-coffee.html" className="kf-btn">
                          <span>explore more</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                        <a href="reservation.html" className="kf-btn dark-btn">
                          <span>get delivery</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{
                      backgroundImage: `url(${started_img_n3})`,
                    }}
                  />
                  <div className="container">
                    <div className="description align-left">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Great Coffee <br />
                        Good Vibes
                      </h2>
                      <div className="kf-bts">
                        <a href="menu-coffee.html" className="kf-btn">
                          <span>explore more</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                        <a href="reservation.html" className="kf-btn dark-btn">
                          <span>get delivery</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </section>
        {/* Section About */}
        <section className="section kf-about section-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle "
                    // data-animate="active"
                  >
                    About Us
                  </div>
                  <h3 className="kf-title " data-animate="active">
                    Organic &amp; Fresh Coffee <br />
                    Provider Center
                  </h3>
                </div>
                <div className="kf-text " data-animate="active">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem
                    quia voluptas sit aspernatur aut odit aut fugit sed quia
                    consequuntur magni dolores eos qui ratione
                  </p>
                </div>
                <div className="kf-about-quote " data-animate="active">
                  <img src={require('../assets/images/quote_img.png')} alt="" />
                  <div>
                    Quis autem vel eum iure reprehenderit in ealuptate velit
                    esse molestiae
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
                <div className="kf-about-image " data-animate="active">
                  <img src={require('../assets/images/about_img.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Services */}
        <section className="section kf-services section-bg">
          <div className="container">
            <div className="kf-services-items row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-services-item " data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="menu-restaurant.html">
                      <img
                        src={require('../assets/images/service1.jpg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className="las la-utensils" />
                    </div>
                    <h5 className="name">Restaurant Menu</h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-services-item " data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="menu-coffee.html">
                      <img
                        src={require('../assets/images/service2.jpg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className="las la-coffee" />
                    </div>
                    <h5 className="name">Coffee Menu</h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-services-item " data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="services.html">
                      <img
                        src={require('../assets/images/service3.jpg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className="las la-glass-cheers" />
                    </div>
                    <h5 className="name">Food Services</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Menu */}
        <section
          className="section kf-menu kf-parallax"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
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
                      <a href="images/menu1.jpg" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu1.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Americano Coffee</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$4.9</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="kf-menu-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a href="images/menu2.jpg" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu2.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Espresso Coffee</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$4.9</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="kf-menu-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a href="images/menu3.jpg" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu3.jpg')}
                          alt=""
                        />
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="kf-menu-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a href="images/menu4.jpg" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu4.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Cold - Coffee</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$6.0</div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="kf-menu-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a href="images/menu5.jpg" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu5.jpg')}
                          alt=""
                        />
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                  <div className="kf-menu-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a href="images/menu6.jpg" className="has-popup-image">
                        <img
                          src={require('../assets/images/menu6.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Milk Cream Coffee</h5>
                      <div className="subname">
                        2/3 espresso, 1/3 streamed milk
                      </div>
                      <div className="price">$7.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Choose */}
        <section className="section kf-choose section-bg">
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
                  <img
                    src={require('../assets/images/choose_img.jpg')}
                    alt=""
                  />
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
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis
                  </p>
                </div>
                <div className="kf-choose-list">
                  <ul>
                    <li className="" data-animate="active">
                      <div className="icon">
                        <img
                          src={require('../assets/images/choose_icon1.png')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <h5 className="name">Natural Coffee Beans</h5>
                        <div className="subname">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptate accusantium doloremque
                        </div>
                      </div>
                    </li>
                    <li className="" data-animate="active">
                      <div className="icon">
                        <img
                          src={require('../assets/images/choose_icon2.png')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <h5 className="name">100% ISO Certification</h5>
                        <div className="subname">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptate accusantium doloremque
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a href="about.html" className="kf-btn " data-animate="active">
                  <span>explore more</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section Grid Carousel */}
        <section className="section kf-grid-carousel">
          <div className="container">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal2.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal2.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Latte</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal3.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal3.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Cappuccino</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal4.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal4.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Iced Coffee</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal5.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal5.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Espresso</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal1.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal1.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Black Coffee</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal2.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal2.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Latte</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal3.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal3.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Cappuccino</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal4.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal4.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Iced Coffee</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal5.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal5.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Espresso</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-item " data-animate="active">
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal1.jpg"
                        className="has-popup-image"
                      >
                        <img
                          src={require('../assets/images/grid_gal1.jpg')}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">Black Coffee</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials_bg2})` }}
        >
          <div className="container">
            <div className="kf-titles align-center">
              <div className="kf-subtitle " data-animate="active">
                Customer Feedback
              </div>
              <h3 className="kf-title " data-animate="active">
                What Our Clients Say
              </h3>
            </div>
            <div className="kf-testimonials-carousel">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slide-item " data-animate="active">
                      <div className="image">
                        <img
                          src={require('../assets/images/rev1.jpg')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Frederick S. France <em>Web Deigner</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-item " data-animate="active">
                      <div className="image">
                        <img
                          src={require('../assets/images/rev2.jpg')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          James M. London <em>Lawyer</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-item " data-animate="active">
                      <div className="image">
                        <img
                          src={require('../assets/images/rev3.jpg')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Olivia D. New York <em>Dentist</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-item " data-animate="active">
                      <div className="image">
                        <img
                          src={require('../assets/images/rev1.jpg')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Frederick S. France <em>Web Deigner</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-item " data-animate="active">
                      <div className="image">
                        <img
                          src={require('../assets/images/rev2.jpg')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          James M. London <em>Lawyer</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-item " data-animate="active">
                      <div className="image">
                        <img
                          src={require('../assets/images/rev3.jpg')}
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <div className="stars">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="kf-text">
                          Sed ut perspiciatis unde omnis natus error luptatem
                          accusantium doloremque laudantium totam remriam eaque
                          quae abillo
                        </div>
                        <h5 className="name">
                          Olivia D. New York <em>Dentist</em>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </section>
        {/* Section Numbers */}
        <section className="section kf-numbers">
          <div className="container">
            <div className="kf-numbers-items row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="kf-numbers-item">
                  <div className="num">256+</div>
                  <div className="desc">
                    <h5 className="name">Premium Clients</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="kf-numbers-item">
                  <div className="num">362+</div>
                  <div className="desc">
                    <h5 className="name">Expert Members</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="kf-numbers-item">
                  <div className="num">753+</div>
                  <div className="desc">
                    <h5 className="name">Winning Awards</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Latest Blog */}
        <section className="section kf-latest-blog section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div className="kf-subtitle " data-animate="active">
                Get Every Single Update
              </div>
              <h3 className="kf-title " data-animate="active">
                Read Some Latest Blog &amp; News
              </h3>
            </div>
            <div className="kf-blog-grid-items row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-blog-grid-item " data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img
                        src={require('../assets/images/latest_blog1.jpg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">
                      SWR React Hooks With Next Increm Ental Static Regeneration
                    </h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      25 Sep 2021
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" />
                      Comments (7)
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-blog-grid-item " data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img
                        src={require('../assets/images/latest_blog2.jpg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">
                      Decisions For Building Flexible Components DevTools
                      Browser
                    </h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      25 Sep 2021
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" />
                      Comments (7)
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-blog-grid-item " data-animate="active">
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img
                        src={require('../assets/images/latest_blog3.jpg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">
                      SWR React Hooks With Next Increm Ental Static Regeneration
                    </h5>
                    <div className="kf-date">
                      <i className="far fa-calendar-alt" />
                      25 Sep 2021
                    </div>
                    <div className="kf-comm">
                      <i className="far fa-comments" />
                      Comments (7)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="align-center">
              <a
                href="blog-grid.html"
                className="kf-btn "
                data-animate="active"
              >
                <span>view all</span>
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </section>
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-titles">
                  <div className="kf-subtitle " data-animate="active">
                    Need a Table On Coffee House
                  </div>
                  <h3 className="kf-title " data-animate="active">
                    Booking Table For Your &amp; Family Members
                  </h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
                <a
                  href="reservation.html"
                  className="kf-btn "
                  data-animate="active"
                >
                  <span>booking table</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
