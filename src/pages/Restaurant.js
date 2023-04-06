// import React from 'react'
import React, { useRef, useState } from 'react'
import started_img7 from '../assets/images/started_img7.jpg'
import started_img5 from '../assets/images/started_img5.jpg'
import started_img6 from '../assets/images/started_img6.jpg'
import category_bg from '../assets/images/category_bg.jpg'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'
import cta_bg from '../assets/images/cta_bg.jpg'
import HeroSection from '../components/Restaurant/HeroSection'
import FoodMenu from '../components/Restaurant/FoodMenu'
import TeamMember from '../components/About/TeamMember'
// import MakeYourTable from '../components/Restaurant/MakeYourTable'
import AboutKaffen from '../components/Restaurant/AboutKaffen'
import FeedBack from '../components/Home/FeedBack'
import Video from '../components/Restaurant/Video'
import Numbers from '../components/About/Numbers'
import TableBooking from '../components/Home/TableBooking'
import ImagesSlider from '../components/Restaurant/ImagesSlider'
import Brands from '../components/About/Brands'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  const [] = useState(null)

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <div>
      <div className="wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          onSlideChange={(e) => {
            // setIndex(e.realIndex)
          }}
          direction={'horizontal'}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
        >
          <SwiperSlide style={{ minWidth: '100%', cursor: 'pointer' }}>
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: `url(${started_img7})` }}
              />
              <div className="container">
                <div className="description">
                  <div className="subtitles">Bienvenue Chez Diallo</div>
                  <h2 className="name text-anim-1" data-splitting="chars">
                    Tele jazz <br />
                    Restaurant
                  </h2>
                  <div className="kf-bts">
                    <Link to="menu-restaurant" className="kf-btn">
                      <span>explore more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                    <Link to="/reservation" className="kf-btn dark-btn">
                      <span>Réservez une table</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ minWidth: '100%', cursor: 'pointer' }}>
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: `url(${started_img5})` }}
              />
              <div className="container">
                <div className="description">
                  <div className="subtitles">Bienvenue Chez Diallo</div>
                  <h2 className="name text-anim-1" data-splitting="chars">
                    Tele jazz <br />
                    Restaurant
                  </h2>
                  <div className="kf-bts">
                    <Link to="/menu-restaurant" className="kf-btn">
                      <span>Explorez</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                    <Link to="/reservation" className="kf-btn dark-btn">
                      <span>Réservez une table</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ minWidth: '100%', cursor: 'pointer' }}>
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: `url(${started_img6})` }}
              />
              <div className="container">
                <div className="description">
                  <div className="subtitles">Bienvenue Chez Diallo</div>
                  <h2 className="name text-anim-1" data-splitting="chars">
                    Tele jazz <br />
                    Restaurant
                  </h2>
                  <div className="kf-bts">
                    <Link to="/menu-restaurant" className="kf-btn">
                      <span>Explorez</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                    <Link to="/reservation" className="kf-btn dark-btn">
                      <span>Réservez une table</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div
            ref={prevRef}
            className="swiper-button-prev"
            style={{ width: '2.7rem', height: '6rem', left: 0 }}
          />
          <div
            ref={nextRef}
            className="swiper-button-next"
            style={{ width: '2.7rem', height: '6rem', right: 0 }}
          />
        </Swiper>

        {/* Section Category */}
        <section
          className="section kf-category"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
          <HeroSection />
        </section>

        {/* Section Menu */}
        <section className="section kf-menu-classic section-bg">
          <FoodMenu />
        </section>

        {/* Section Team */}
        <section className="section kf-team kf-section-transparent">
          <TeamMember />
        </section>

        {/* Section Reservation */}
        {/* <section className="section kf-reservation kf-section-no-margin">
          <MakeYourTable />
        </section> */}

        {/* Section About-2 */}
        <section
          className="section kf-about-2"
          style={{ backgroundImage: `url(${category_bg})` }}
        >
          <AboutKaffen />
        </section>

        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials_bg2})` }}
        >
          <FeedBack />
        </section>

        {/* Section Video */}
        <div className="section kf-video kf-video-full">
          <Video />
        </div>

        {/* Section Numbers-2 */}
        <section className="section kf-numbers-2 section-bg">
          <Numbers />
        </section>

        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg})` }}
        >
          <TableBooking />
        </section>

        {/* Section Latest Blog */}
        {/* <section className="section kf-latest-blog section-bg">
          <Blog />
        </section> */}

        {/* Section Insta Carousel */}
        <div className="section kf-insta-carousel" data-animate="active">
          <ImagesSlider />
        </div>

        {/* Section Brands */}
        <div className="section kf-brands">
          <Brands />
        </div>
      </div>
    </div>
  )
}

export default Restaurant
