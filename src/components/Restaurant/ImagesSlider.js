import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'

const ImagesSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal1.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal2.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal3.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal4.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal5.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal6.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal1.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal2.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal3.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal4.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal5.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slide-item">
                <div className="image kf-image-hover">
                  <a href="instagram.com" target="blank">
                    <img
                      src={require('../../assets/images/ins_gal6.jpg')}
                      alt=""
                    />
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

    </Swiper>
  )
}

export default ImagesSlider
