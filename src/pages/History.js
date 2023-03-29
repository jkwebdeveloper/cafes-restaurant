import React, { useRef, useState } from 'react'
import history_inner_bg from '../assets/images/history_inner_bg.jpg'
import quote_line_icon1 from '../assets/images/quote_line_icon1.png'
import quote_line_icon2 from '../assets/images/quote_line_icon2.png'
import cta_bg from '../assets/images/cta_bg.jpg'
import Brands from '../components/About/Brands'
import Blog from '../components/Home/Blog'
import TableBooking from '../components/Home/TableBooking'
import { Navigation, Pagination, Scrollbar } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const History = () => {
  const [index, setIndex] = useState(0)

  const prevRef = useRef(null)
  const nextRef = useRef(null)
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
            <div className="kf-quote-box" data-animate="active">
              <div className="text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et voluptatem sequi nesciunt
                neque porro quisqe
              </div>
              <div className="info">
                <div className="img">
                  <img
                    src={require('../assets/images/quote_img2.jpg')}
                    alt=""
                  />
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
              <div className="kf-subtitle" data-animate="active">
                Our Kaffen History
              </div>
              <h3 className="kf-title" data-animate="active">
                Something Know About Our History
              </h3>
            </div>
            <div className="kf-history-carousel">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: prevRef?.current,
                  nextEl: nextRef?.current,
                }}
                scrollbar={{ draggable: true }}
                style={{ padding: '7rem 0' }}
                onSlideChange={(e) => {
                  setIndex(e.realIndex)
                }}
                direction={'horizontal'}
                onActiveIndexChange={(swiper) => console.log(swiper)}
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
                <SwiperSlide className="swiper-slide">
                  <div className="kf-history-item" data-animate="active">
                    <div className="image">
                      <img
                        src={require('../assets/images/history1.jpg')}
                        alt=""
                      />
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
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">1996</div>
                    <div className="label">25 January 1996</div>
                    <div className="date-value">1996</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="kf-history-item" data-animate="active">
                    <div className="image">
                      <img
                        src={require('../assets/images/history2.jpg')}
                        alt=""
                      />
                    </div>
                    <div className="desc">
                      <div className="subname">We started cooking for you</div>
                      <h5 className="name">
                        Three Front-End Auditing Tools I Discovered Recently
                        Useful Front-End Boilerplates
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">1998</div>
                    <div className="label">14 December 1998</div>
                    <div className="date-value">1998</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="kf-history-item" data-animate="active">
                    <div className="image">
                      <img
                        src={require('../assets/images/history3.jpg')}
                        alt=""
                      />
                    </div>
                    <div className="desc">
                      <div className="subname">We got a Michelin star</div>
                      <h5 className="name">
                        Three Front-End Auditing Tools I Discovered Recently
                        Useful Front-End Boilerplates
                      </h5>
                      <div className="kf-text">
                        <p>
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">2004</div>
                    <div className="label">10 June 2004</div>
                    <div className="date-value">2004</div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="kf-history-item" data-animate="active">
                    <div className="image">
                      <img
                        src={require('../assets/images/history4.jpg')}
                        alt=""
                      />
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
                          Sorem ipsum dolor sit am consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Quis ipsum suspendi sultrices gravida.
                          Risus commodo viverra maecenas cumsan lacus vel
                          facilisis.
                        </p>
                      </div>
                    </div>
                    <div className="date">2008</div>
                    <div className="label">15 October 2008</div>
                    <div className="date-value">2008</div>
                  </div>
                </SwiperSlide>
                {/* pagintion */}
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span
                    className={`swiper-pagination-bullet ${
                      index === 0 && 'swiper-pagination-bullet-active'
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 1"
                  >
                    1996
                  </span>
                  <span
                    className={`swiper-pagination-bullet ${
                      index === 1 && 'swiper-pagination-bullet-active'
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 2"
                  >
                    1998
                  </span>
                  <span
                    className={`swiper-pagination-bullet ${
                      index === 2 && 'swiper-pagination-bullet-active'
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 3"
                  >
                    2004
                  </span>
                  <span
                    className={`swiper-pagination-bullet ${
                      index === 3 && 'swiper-pagination-bullet-active'
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 4"
                    aria-current="true"
                  >
                    2008
                  </span>
                </div>

                <div className="swiper-button-prev" ref={prevRef}>
                  <i className="fas fa-angle-left" />
                </div>
                <div className="swiper-button-next" ref={nextRef}>
                  <i className="fas fa-angle-right" />
                </div>
              </Swiper>
            </div>
          </div>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <Brands />
        </div>
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
    </div>
  )
}

export default History
