import React from 'react'
// import service3 from '../assets/images/service3.jpg'
import reservation5 from '../assets/images/reservation5.jpg'
import reservation6 from '../assets/images/reservation6.jpg'

import Brands from '../components/About/Brands'
import MakeYourTable from '../components/Restaurant/MakeYourTable'
import Menu from '../components/Menu'

const MenuCoffee = () => {
  return (
    <div>
      <div className="wrapper">
        <Menu/>
        {/* Section Reservation */}
        <section className="section kf-reservation kf-section-no-margin">
          <div className="container">
            <div className="kf-reservation-form" data-animate="active">
              <div
                className="image-left"
                style={{ backgroundImage: `url(${reservation5})` }}
              />
              <div
                className="image-right"
                style={{ backgroundImage: `url(${reservation6})` }}
              />
              <MakeYourTable />

            </div>
          </div>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <Brands />
        </div>
      </div>
    </div>
  )
}

export default MenuCoffee
