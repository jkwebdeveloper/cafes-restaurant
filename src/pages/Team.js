import React from 'react'
import team_inner_bg from '../assets/images/team_inner_bg.jpg'
import cta_bg from '../assets/images/cta_bg.jpg'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'

const Team = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${team_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Our Chefs
            </h1>
          </div>
        </section>
        {/* Section Team */}
        <section className="section kf-team section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Experience Team Member
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Meet Our Professional Chefs
              </h3>
            </div>
            <div className="kf-team-items row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Anthony J. Bowman</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team1.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">bowmankf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Kenny V. Gonzalez</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team2.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">gonzalezkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Joseph M. Lawrence</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team3.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">lawrencekf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Charles K. Smith</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team4.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">smithkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Richard A. White</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team5.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">whitekf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">David M. Seward</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team6.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">sewardkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Julio N. Williams</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team7.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">williamskf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-team-item"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">Christopher K. Dixon</h5>
                    <div className="subname">Senior Chefs</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/team8.jpg")}  alt="" />
                    <div className="info">
                      <div className="label">dixonkf@gmail.com</div>
                      <div className="label">+012 (345) 678 99</div>
                    </div>
                    <div className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
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
          style={{ backgroundImage: `url(${cta_bg})` }}
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
        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials_bg2})` }}
        >
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Customer Feedback
              </div>
              <h3
                className="kf-title"
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
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev1.jpg")}  alt="" />
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
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev2.jpg")}  alt="" />
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
                      className="slide-item element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev3.jpg")}  alt="" />
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
                      className="slide-item element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev1.jpg")}  alt="" />
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
                      className="slide-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev2.jpg")}  alt="" />
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
                      className="slide-item element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/rev3.jpg")}  alt="" />
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
        {/* Section Brands */}
        <div className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand1.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand2.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand3.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand4.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand5.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand6.png")}  alt="" />
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

export default Team
