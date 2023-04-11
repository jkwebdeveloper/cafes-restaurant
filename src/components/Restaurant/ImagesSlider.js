import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

const ImagesSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={'auto'}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        425: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      loop={true}
    >
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Pied de veau au curry.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Bouellete de baracuda provençale.jpeg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Bouillon de boulette de poisson.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Boulette de boeuf sauce arachide.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Boulette de poulet pate DArchide.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="instagram.com" target="blank">
              <img
                src={require('../../assets/images/plat/Boulette de viande sauce tomate.jpeg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="instagram.com" target="blank">
              <img
                src={require('../../assets/images/plat/Brochette de boeuf.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Chevre télé jazz au champignon.jpeg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Coquelet au four.jpeg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Kedjienou.jpeg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Lagneau au pois chiche.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Ailes de poulet au four.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Bouillon de boulette de poisson.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Boulette de boeuf sauce arachide.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="#" target="blank">
              <img
                src={require('../../assets/images/plat/Boulette de poulet pate DArchide.jpg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide" style={{ maxWidth: '100%' }}>
        <div className="slide-item">
          <div className="image kf-image-hover">
            <Link to="instagram.com" target="blank">
              <img
                src={require('../../assets/images/plat/Boulette de viande sauce tomate.jpeg')}
                alt=""
              />
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ImagesSlider
