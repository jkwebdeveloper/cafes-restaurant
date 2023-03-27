import React from 'react'
import team_inner_bg from '../assets/images/team_inner_bg.jpg'
import cta_bg from '../assets/images/cta_bg.jpg'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'
import Brands from '../components/About/Brands'
import TableBooking from '../components/Home/TableBooking'
import FeedBack from '../components/Home/FeedBack'
import { Link } from 'react-router-dom'


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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
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
          <TableBooking/>
        </section>
        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials_bg2})` }}
        >
          <FeedBack/>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <Brands/>
        </div>
      </div>
    </div>
  )
}

export default Team
