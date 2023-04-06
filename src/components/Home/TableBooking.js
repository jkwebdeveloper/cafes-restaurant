import React from 'react'
import { Link } from 'react-router-dom'


const TableBooking = () => {
  return (
    // <section
    //   className="section kf-cta kf-parallax"
    //   style={{ backgroundImage: `url(${cta_bg})` }}
    // >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="kf-titles">
              <div className="kf-subtitle " data-animate="active">
                Need a Table On Coffee House
              </div>
              <h3 className="kf-title " data-animate="active">
               Réservation pour vous et les membres de votre famille
              </h3>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
            <Link to="/reservation" className="kf-btn " data-animate="active">
              <span>booking table</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </div>
    // </section>
  )
}

export default TableBooking
