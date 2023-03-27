import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'


const KFGridSlider = () => {
  return (
    <section className="section kf-grid-carousel col-sm-12" style={{paddingTop:"0px", paddingBottom:"0px"}}>
      <div className="container">
        <Swiper
          aria-live="polite"
          style={{
            transform: 'translate3d(0px, 0px, 0px)',
            transitionDuration: '0ms',
          }}
          loop={true}
          modules={[Navigation, ]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          direction={'horizontal'}
        >
          <SwiperSlide
            className="swiper-slide swiper-slide-visible swiper-slide-active"
            data-swiper-slide-index={7}
            role="group"
            aria-label="8 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal4.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal4.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Iced Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible swiper-slide-active"
            data-swiper-slide-index={8}
            role="group"
            aria-label="9 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal5.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal5.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Espresso</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible swiper-slide-active"
            data-swiper-slide-index={9}
            role="group"
            aria-label="10 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal1.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal1.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Black Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible swiper-slide-active"
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal2.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal2.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Latte</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible "
            data-swiper-slide-index={1}
            role="group"
            aria-label="2 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal3.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal3.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={2}
            role="group"
            aria-label="3 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal4.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal4.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Iced Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={3}
            role="group"
            aria-label="4 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal5.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal5.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Espresso</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={4}
            role="group"
            aria-label="5 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal1.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal1.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Black Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={5}
            role="group"
            aria-label="6 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal2.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal2.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Latte</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={6}
            role="group"
            aria-label="7 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal3.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal3.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={7}
            role="group"
            aria-label="8 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal4.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal4.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Iced Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={8}
            role="group"
            aria-label="9 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal5.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal5.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Espresso</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={9}
            role="group"
            aria-label="10 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal1.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal1.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Black Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={0}
            role="group"
            aria-label="1 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal2.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal2.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Latte</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            data-swiper-slide-index={1}
            role="group"
            aria-label="2 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal3.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal3.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible swiper-slide-active"
            data-swiper-slide-index={2}
            role="group"
            aria-label="3 / 10"
            style={{ width: 362, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image kf-image-hover">
                <Link to={require('../../assets/images/grid_gal4.jpg')} className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal4.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Iced Coffee</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
    </section>
  )
}

export default KFGridSlider
