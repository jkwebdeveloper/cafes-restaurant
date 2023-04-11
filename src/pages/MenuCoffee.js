import React from 'react'
import Brands from '../components/About/Brands'
import MakeYourTable from '../components/Restaurant/MakeYourTable'
import Menu from '../components/Menu'

const MenuCoffee = () => {
  return (
    <div>
      <div className="wrapper">
        <Menu />
        {/* Section Reservation */}
        <section className="section kf-reservation">
          <MakeYourTable />
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
