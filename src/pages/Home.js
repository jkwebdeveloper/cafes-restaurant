import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../assets/images/started_img_n6.jpg'
import started_img_n5 from '../assets/images/started_img_n5.jpg'
import cta_bg from '../assets/images/cta_bg.jpg'
import started_img_n3 from '../assets/images/started_img_n3.jpg'
import category_bg from '../assets/images/category_bg.jpg'
import testimonials_bg2 from '../assets/images/testimonials_bg2.jpeg'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper'
import Herosection from '../components/Home/Herosection'
import ServiceSection from '../components/Home/ServiceSection'
import KFmenu from '../components/Home/KFmenu'
import ChooseUs from '../components/Home/ChooseUs'
import KFGridSlider from '../components/Home/KFGridSlider'
import FeedBack from '../components/Home/FeedBack'
import ClientNumbers from '../components/Home/ClientNumbers'
import Blog from '../components/Home/Blog'
import TableBooking from '../components/Home/TableBooking'
import { Link } from 'react-router-dom'


const Home = () => {
  const [index, setIndex] = useState(null)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
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
          setIndex(e.realIndex)
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
        <SwiperSlide style={{ minWidth: '100%' }}>
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the Kaffen</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The London <br />
                  Coffee House
                </h2>
                <div className="kf-bts">
                  <Link to="/menu-restaurant" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link to="/reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ minWidth: '100%' }}>
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{
                // backgroundImage: `url(${started_img_n5})`,
                backgroundImage: `url(${started_img_n5})`,
              }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to the Kaffen</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  The Paris
                  <br />
                  Coffee House
                </h2>
                <div className="kf-bts">
                  <Link to="/menu-coffee" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link to="/reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ minWidth: '100%' }}>
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
                  <Link to="/menu-coffee" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                  <Link to="/reservation" className="kf-btn dark-btn">
                    <span>get delivery</span>
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
      {/* Section About */}
      <section className="section kf-about section-bg">
        <Herosection />
      </section>
      {/* Section Services */}
      <section className="section kf-services section-bg">
        <ServiceSection />
      </section>
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: `url(${category_bg})` }}
      >
        <KFmenu />
      </section>
      {/* Section Choose */}
      <section className="section kf-choose section-bg">
        <ChooseUs />
      </section>
      {/* Section Grid Carousel */}
      <section className="section kf-grid-carousel">
        <KFGridSlider />
      </section>
      {/* Section Testimonials Carousel */}
      <section
        className="section kf-testimonials kf-testimonials-2 section-bg"
        style={{ backgroundImage: `url(${testimonials_bg2})` }}
      >
        <FeedBack />
      </section>
      {/* Section Numbers */}
      <section className="section kf-numbers">
        <ClientNumbers />
      </section>
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
        <Blog />
      </section>
      {/* Section CTA */}
      <section
      className="section kf-cta kf-parallax"
      style={{ backgroundImage: `url(${cta_bg})` }}
    >
      <TableBooking />
      </section>
    </div>
  )
}

export default Home
