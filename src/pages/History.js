import React from 'react'
import history_inner_bg from '../assets/images/history_inner_bg.jpg'
import quote_line_icon1 from '../assets/images/quote_line_icon1.png'
import quote_line_icon2 from '../assets/images/quote_line_icon2.png'
import cta_bg from '../assets/images/cta_bg.jpg'


const History = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${history_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Our History
            </h1>
          </div>
        </section>
        {/* Section Quote */}
        <section className="section kf-quote">
          <div className="container">
            <div className="kf-parallax-icon pi-4" data-jarallax-element={-60}>
              <div
                className="p-icon"
                style={{ backgroundImage: `url(${quote_line_icon1})` }}
              />
            </div>
            <div className="kf-parallax-icon pi-5" data-jarallax-element={-80}>
              <div
                className="p-icon"
                style={{ backgroundImage: `url(${quote_line_icon2})` }}
              />
            </div>
            <div
              className="kf-quote-box"
              data-animate="active"
            >
              <div className="text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et voluptatem sequi nesciunt
                neque porro quisqe
              </div>
              <div className="info">
                <div className="img">
                  <img src={require("../assets/images/quote_img2.jpg")}  alt="" />
                </div>
                <h5 className="name">Dante J. Castaneda</h5>
                <div className="subname">CEO &amp; Founder</div>
              </div>
            </div>
          </div>
        </section>
        {/* Section History */}
        <section className="section kf-history section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Our Kaffen History
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Something Know About Our History
              </h3>
            </div>
            <div className="kf-history-carousel">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="kf-history-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/history1.jpg")}  alt="" />
                      </div>
                      <div className="desc">
                        <div className="subname">
                          Kaffen restaurant was founded
                        </div>
                        <h5 className="name">
                          Three Front-End Auditing Tools I Discovered Recently
                          Useful Front-End Boilerplates
                        </h5>
                        <div className="kf-text">
                          <p>
                            Sorem ipsum dolor sit am consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendi sultrices
                            gravida. Risus commodo viverra maecenas cumsan lacus
                            vel facilisis.
                          </p>
                        </div>
                      </div>
                      <div className="date">1996</div>
                      <div className="label">25 January 1996</div>
                      <div className="date-value">1996</div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="kf-history-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/history2.jpg")}  alt="" />
                      </div>
                      <div className="desc">
                        <div className="subname">
                          We started cooking for you
                        </div>
                        <h5 className="name">
                          Three Front-End Auditing Tools I Discovered Recently
                          Useful Front-End Boilerplates
                        </h5>
                        <div className="kf-text">
                          <p>
                            Sorem ipsum dolor sit am consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendi sultrices
                            gravida. Risus commodo viverra maecenas cumsan lacus
                            vel facilisis.
                          </p>
                        </div>
                      </div>
                      <div className="date">1998</div>
                      <div className="label">14 December 1998</div>
                      <div className="date-value">1998</div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="kf-history-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/history3.jpg")}  alt="" />
                      </div>
                      <div className="desc">
                        <div className="subname">We got a Michelin star</div>
                        <h5 className="name">
                          Three Front-End Auditing Tools I Discovered Recently
                          Useful Front-End Boilerplates
                        </h5>
                        <div className="kf-text">
                          <p>
                            Sorem ipsum dolor sit am consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendi sultrices
                            gravida. Risus commodo viverra maecenas cumsan lacus
                            vel facilisis.
                          </p>
                        </div>
                      </div>
                      <div className="date">2004</div>
                      <div className="label">10 June 2004</div>
                      <div className="date-value">2004</div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="kf-history-item"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src={require("../assets/images/history4.jpg")}  alt="" />
                      </div>
                      <div className="desc">
                        <div className="subname">
                          A new restaurant was opened in Paris
                        </div>
                        <h5 className="name">
                          Three Front-End Auditing Tools I Discovered Recently
                          Useful Front-End Boilerplates
                        </h5>
                        <div className="kf-text">
                          <p>
                            Sorem ipsum dolor sit am consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendi sultrices
                            gravida. Risus commodo viverra maecenas cumsan lacus
                            vel facilisis.
                          </p>
                        </div>
                      </div>
                      <div className="date">2008</div>
                      <div className="label">15 October 2008</div>
                      <div className="date-value">2008</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
                <div className="swiper-scrollbar" />
                <div className="swiper-button-prev">
                  <i className="fas fa-angle-left" />
                </div>
                <div className="swiper-button-next">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand1.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand2.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand3.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand4.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand5.png")}  alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
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
        {/* Section Latest Blog */}
        <section className="section kf-latest-blog section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Get Every Single Update
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Read Some Latest Blog &amp; News
              </h3>
            </div>
            <div className="kf-blog-grid-items row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-blog-grid-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img src={require("../assets/images/latest_blog1.jpg")}  alt="" />
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
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-blog-grid-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img src={require("../assets/images/latest_blog2.jpg")}  alt="" />
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
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div
                  className="kf-blog-grid-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="blog-single.html">
                      <img src={require("../assets/images/latest_blog3.jpg")}  alt="" />
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
                href="#"
                className="kf-btn"
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
      </div>
    </div>
  )
}

export default History
