import React from 'react'
import history_inner_bg from '../assets/images/history_inner_bg.jpg'
import video_bg from '../assets/images/video_bg.jpg'
import testimonials from '../assets/images/testimonials_bg2.jpeg'
import cta_bg from '../assets/images/cta_bg.jpg'

const About = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${history_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title "
              data-splitting="chars"
              // data-animate="active"
            >
              About Us
            </h1>
          </div>
        </section>
        {/* Section About-2 */}
        <section className="section kf-choose kf-choose-2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle"
                    // data-animate="active"
                  >
                    About Kaffen
                  </div>
                  <h3
                    className="kf-title"
                    // data-animate="active"
                  >
                    New London Coffee Founded For Extraordinary Test
                  </h3>
                </div>
                <div
                  className="kf-text "
                  // data-animate="active"
                >
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptate
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis
                  </p>
                </div>
                <div className="kf-choose-list">
                  <ul>
                    <li
                      className=""
                      data-animate="active"
                    >
                      <div className="icon">
                        <img src={require("../assets/images/choose_icon1.png")} alt="" />
                      </div>
                      <div className="desc">
                        <h5 className="name">Natural Coffee Beans</h5>
                        <div className="subname">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptate accusantium doloremque
                        </div>
                      </div>
                    </li>
                    <li
                      className=""
                      data-animate="active"
                    >
                      <div className="icon">
                        <img src={require("../assets/images/choose_icon2.png")} alt="" />
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
                <a
                  href="menu-coffee.html"
                  className="kf-btn"
                  data-animate="active"
                >
                  <span>our menu</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
                <div
                  className="kf-choose-image"
                  data-animate="active"
                >
                  <img src={require("../assets/images/about_img2.jpg")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Numbers-2 */}
        <section className="section kf-numbers-2 section-bg">
          <div className="container">
            <div className="kf-numbers-items-2 row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2 "
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-gem" />
                  </div>
                  <div className="num">256+</div>
                  <div className="desc">
                    <h5 className="name">Premium Clients</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-user-tie" />
                  </div>
                  <div className="num">36+</div>
                  <div className="desc">
                    <h5 className="name">Professional Chefs</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-trophy" />
                  </div>
                  <div className="num">753+</div>
                  <div className="desc">
                    <h5 className="name">Winning Awards</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-numbers-item-2 "
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="lar la-grin-stars" />
                  </div>
                  <div className="num">100+</div>
                  <div className="desc">
                    <h5 className="name">5 Star Reviews</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Video */}
        <section className="section kf-video">
          <div className="container">
            <div
              className="kf-video-item kf-image-hover"
              style={{ backgroundImage: `url(${video_bg})` }}
              data-animate="active"
            >
              <iframe
                className="js-video-iframe"
                data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
              />
              <div className="play">
                <i className="fas fa-play" />
              </div>
            </div>
          </div>
        </section>
        {/* Section Services-2 */}
        <section className="section kf-services">
          <div className="container">
            <div className="kf-services-items-2 row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon1.png")} />
                  </div>
                  <div className="desc">
                    <h5 className="name">Birthday Cakes</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2 "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon2.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Fresh Foods</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2 "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon3.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Skills Chefs</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2 "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon4.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Organic Juice</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Team */}
        <section className="section kf-team section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle "
                data-animate="active"
              >
                Experience Team Member
              </div>
              <h3
                className="kf-title "
                data-animate="active"
              >
                Meet Our Professional Chefs
              </h3>
            </div>
            <div className="kf-team-items row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item "
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Anthony J. Bowman</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team1.jpg")} alt="" />
                    <div className="info">
                      <div className="label">bowmankf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="/">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item "
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Kenny V. Gonzalez</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team2.jpg")} alt="" />
                    <div className="info">
                      <div className="label">gonzalezkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="/">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item "
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Joseph M. Lawrence</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team3.jpg")} alt="" />
                    <div className="info">
                      <div className="label">lawrencekf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="/">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item "
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Charles K. Smith</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team4.jpg")} alt="" />
                    <div className="info">
                      <div className="label">smithkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="/">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Brands */}
        <section className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand1.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand2.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand3.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand4.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand5.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item "
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand6.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials})` }}
        >
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle "
                data-animate="active"
              >
                Customer Feedback
              </div>
              <h3
                className="kf-title "
                data-animate="active"
              >
                What Our Clients Say
              </h3>
            </div>
            <div className="kf-testimonials-carousel">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="slide-item "
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev1.jpg")} alt="" />
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
                    <div
                      className="slide-item "
                      data-animate="active"
                    >
                      <div className="image">
                        {/* <img src={require("../assetsimages/rev2.jpg")} alt="" /> */}
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
                    <div
                      className="slide-item "
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev1.jpg")} alt="" />
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
                    <div
                      className="slide-item "
                      data-animate="active"
                    >
                      <div className="image">
                      <img src={require("../assets/images/rev2.jpg")} alt="" />
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
                    <div
                      className="slide-item "
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev3.jpg")} alt="" />
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
                    <div
                      className="slide-item "
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="images/rev3.jpg" alt="" />
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
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle "
                    data-animate="active"
                  >
                    Need a Table On Coffee House
                  </div>
                  <h3
                    className="kf-title "
                    data-animate="active"
                  >
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
    </div>
  )
}

export default About
