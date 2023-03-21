import React from 'react'
import started_img7 from '../assets/images/started_img7.jpg'
import started_img5 from '../assets/images/started_img5.jpg'
import started_img6 from '../assets/images/started_img6.jpg'
import category_bg from '../assets/images/category_bg.jpg'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'
import cta_bg from '../assets/images/cta_bg.jpg'
import HeroSection from '../components/Restaurant/HeroSection'
import FoodMenu from '../components/Restaurant/FoodMenu'
import TeamMember from '../components/About/TeamMember'
import Reservation from '../components/Restaurant/Reservation'
import AboutKaffen from '../components/Restaurant/AboutKaffen'
import FeedBack from '../components/Home/FeedBack'
import Video from '../components/Restaurant/Video'
import Numbers from '../components/About/Numbers'
import TableBooking from '../components/Home/TableBooking'
import Blog from '../components/Home/Blog'
import ImagesSlider from '../components/Restaurant/ImagesSlider'




const Restaurant = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Slider */}
        <section className="section kf-started-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="kf-started-item">
                  <div
                    className="slide js-parallax"
                    style={{ backgroundImage: `url(${started_img7})` }}
                  />
                  <div className="container">
                    <div className="description">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Reserve Your <br />
                        Table Today
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
                    style={{ backgroundImage: `url(${started_img5})` }}
                  />
                  <div className="container">
                    <div className="description">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Explore The <br />
                        Lobsters
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
                    style={{ backgroundImage: `url(${started_img6})` }}
                  />
                  <div className="container">
                    <div className="description">
                      <div className="subtitles">Welcome to the Kaffen</div>
                      <h2 className="name text-anim-1" data-splitting="chars">
                        Premium <br />
                        Meat Kaffen
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
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </section>

        {/* Section Category */}
        <section
          className="section kf-category"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
          <HeroSection/>
        </section>

        {/* Section Menu */}
        <section className="section kf-menu-classic section-bg">
          <FoodMenu/>
        </section>

        {/* Section Team */}
        <section className="section kf-team kf-section-transparent">
          <TeamMember/>
        </section>

        {/* Section Reservation */}
        <section className="section kf-reservation kf-section-no-margin">
          <Reservation/>
        </section>

        {/* Section About-2 */}
        <section
          className="section kf-about-2"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
          <AboutKaffen/>
        </section>

        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials_bg2})` }}
        >
          <FeedBack/>
        </section>

        {/* Section Video */}
        <div className="section kf-video kf-video-full">
          <Video/>
        </div>

        {/* Section Numbers-2 */}
        <section className="section kf-numbers-2 section-bg">
          <Numbers/>
        </section>

        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg})` }}
        >
          <TableBooking/>
        </section>

        {/* Section Latest Blog */}
        <section className="section kf-latest-blog section-bg">
          <Blog/>
        </section>

        {/* Section Insta Carousel */}
        <div
          className="section kf-insta-carousel"
          data-animate="active"
        >
          <ImagesSlider/>
        </div>

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
                    <img src={require("../assets/images/brand1.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand2.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand3.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand4.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand5.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand6.png")} alt="" />
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

export default Restaurant
