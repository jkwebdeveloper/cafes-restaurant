import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const ImagesSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={'auto'}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        425: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      loop={true}
    >
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal1.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal2.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal3.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal4.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal5.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="instagram.com" target="blank">
              <img src={require('../../assets/images/ins_gal6.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="instagram.com" target="blank">
              <img src={require('../../assets/images/ins_gal1.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal2.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal3.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal4.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal5.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '360px' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <a href="#" target="blank">
              <img src={require('../../assets/images/ins_gal6.jpg')} alt="" />
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ImagesSlider
