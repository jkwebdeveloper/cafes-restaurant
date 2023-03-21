import React from 'react'

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
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slide-item " data-animate="active">
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
                      Sed ut perspiciatis unde omnis natus error luptatem
                      accusantium doloremque laudantium totam remriam eaque quae
                      abillo
                    </div>
                    <h5 className="name">
                      Frederick S. France <em>Web Deigner</em>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-item " data-animate="active">
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
                      Sed ut perspiciatis unde omnis natus error luptatem
                      accusantium doloremque laudantium totam remriam eaque quae
                      abillo
                    </div>
                    <h5 className="name">
                      James M. London <em>Lawyer</em>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slide-item " data-animate="active">
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
              </div>
              <div className="swiper-slide">
                <div className="slide-item " data-animate="active">
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
              </div>
              <div className="swiper-slide">
                <div className="slide-item " data-animate="active">
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
              </div>
              <div className="swiper-slide">
                <div className="slide-item " data-animate="active">
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
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default FeedBack
