import React from 'react'

const KFGridSlider = () => {
  return (
    <div className="container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a
                  href={require('../../assets/images/grid_gal2.jpg')}
                  className="has-popup-image"
                >
                  <img
                    src={require('../../assets/images/grid_gal2.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Latte</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal3.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal3.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal4.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal4.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Iced Coffee</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal5.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal5.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Espresso</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal1.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal1.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Black Coffee</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal2.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal2.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Latte</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal3.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal3.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Cappuccino</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal4.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal4.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Iced Coffee</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal5.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal5.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Espresso</h5>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="slide-item " data-animate="active">
              <div className="image kf-image-hover">
                <a href="images/grid_gal1.jpg" className="has-popup-image">
                  <img
                    src={require('../../assets/images/grid_gal1.jpg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="desc">
                <h5 className="name">Black Coffee</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KFGridSlider
