import React from 'react'
// import menu_reservation from '../assets/images/menu_reservation_inner_bg2.jpg'
import ImagesSlider from '../components/Restaurant/ImagesSlider'
import MakeYourTable from '../components/Restaurant/MakeYourTable'
import Brands from '../components/About/Brands'
// import EmailTemplate from '../components/EmailTemplate'

const Reservation = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        {/* <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{
              backgroundImage: `url(${menu_reservation})`,
            }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Reservation
            </h1>
          </div>
        </section> */}
        {/* Section Reservation */}
        <section className="section kf-reservation">
          <MakeYourTable/>
        </section>
        {/* Section Insta Carousel */}
        <ImagesSlider />
        {/* Section Brands */}
        <div className="section kf-brands">
          <Brands />
        </div>
      </div>
    </div>
  )
}

export default Reservation
