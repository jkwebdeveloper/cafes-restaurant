import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const FeedBack = () => {
  return (
    <div className="container">
      <div className="kf-titles align-center">
        <div className="kf-subtitle " data-animate="active">
          Customer Feedback
        </div>
        <h3 className="kf-title " data-animate="active">
          What Our Clients Say
        </h3>
      </div>

      <div className="kf-testimonials-carousel">
        <Swiper
          aria-live="polite"
          style={{
            transform: 'translate3d(0px, 0px, 0px)',
            transitionDuration: '0ms',
            padding: '3rem 0',
          }}
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          slidesPerView={4}
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
              slidesPerView: 4,
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
            className="swiper-slide swiper-slide-visible"
            role="group"
            aria-label="1 / 6"
            style={{ width: 264, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              style={{ visibility: 'visible' }}
            >
              <div className="image">
                <img src={require('../../assets/images/rev1.jpg')} alt="" />
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
                  «Petite découverte du jour. Le lieu est propre et
                  chaleureux..on s'y sent comme à la maison. Le plat du jour"
                  "tieboudienne" était juste un delice : copieux et appétissant.
                  Quand est il du patron et de son épouse? Accueillant,souriant,
                  attentif...on se sent tout de suite à l'aise. Mon fils et moi
                  avons aimé le repas .Nous y reviendrons sûrement.»
                </div>
                <h5 className="name">
                  Frederick S. France <em>Web Deigner</em>
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            role="group"
            aria-label="2 / 6"
            style={{ width: 264, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image">
                <img src={require('../../assets/images/rev2.jpg')} alt="" />
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
                  «Délicieux ! Le chef est super souriant, agréable et gentil.
                  Les plats étaient un vrai délice! Nous ne nous attendions pas
                  à une telle qualité, une vraie bonne surprise ! Les quantités
                  sont généreuses. J'ai pris les plats à emporter mais le
                  restaurant est très joli aussi. J'y retourne dès que possible
                  !»
                </div>
                <h5 className="name">
                  James M. London <em>Lawyer</em>
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            role="group"
            aria-label="3 / 6"
            style={{ width: 264, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image">
                <img src={require('../../assets/images/rev3.jpg')} alt="" />
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
                  «Premiere expérience de ce sympathique restaurant aujourd hui.
                  Jy ai pris un plat & ‘emporter. Apparemment, pour les plats &
                  ‘emporter, il sagit toujours du plat du jour (whésitez pas a
                  me corriger si je fais. erreur a ce sujet). Le prix pratiqué
                  est tres raisonnable. Je suis entré dans un lieu que jal
                  trouvé trés classe et justement décoré, avec une ambiance
                  jazzy tres décontractée. Cela donne envie de s'y poser un peu
                  plus. La carte est plus étendue si vous décidez de manger sur
                  place. Le personnel est trés accueillant et souriant et la
                  nourriture mia semblé tout @ fait excellente, tres savoureuse.
                  Je vous remercie pour cette belle découverte. Je ne manquerai
                  pas de my rendre & nouveau!»
                </div>
                <h5 className="name">
                  Olivia D. New York <em>Dentist</em>
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            role="group"
            aria-label="4 / 6"
            style={{ width: 264, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image">
                <img src={require('../../assets/images/rev1.jpg')} alt="" />
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
                  accusantium doloremque laudantium totam remriam eaque quae
                  abillo
                </div>
                <h5 className="name">
                  Frederick S. France <em>Web Deigner</em>
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            role="group"
            aria-label="5 / 6"
            style={{ width: 264, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image">
                <img src={require('../../assets/images/rev2.jpg')} alt="" />
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
                  accusantium doloremque laudantium totam remriam eaque quae
                  abillo
                </div>
                <h5 className="name">
                  James M. London <em>Lawyer</em>
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="swiper-slide swiper-slide-visible"
            role="group"
            aria-label="6 / 6"
            style={{ width: 264, marginRight: 30 }}
          >
            <div
              className="slide-item element-anim-1 scroll-animate animate__active animate__animated"
              data-animate="active"
              style={{ visibility: 'visible' }}
            >
              <div className="image">
                <img src={require('../../assets/images/rev3.jpg')} alt="" />
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
                  accusantium doloremque laudantium totam remriam eaque quae
                  abillo
                </div>
                <h5 className="name">
                  Olivia D. New York <em>Dentist</em>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeedBack
