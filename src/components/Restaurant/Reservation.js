import React from 'react'
import reservation5 from '../../assets/images/reservation5.jpg'
import reservation6 from '../../assets/images/reservation6.jpg'

const Reservation = () => {
  return (
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
        <div className="kf-titles align-center">
          <div className="kf-subtitle">Booking Table</div>
          <h3 className="kf-title">Make Your Reservation</h3>
        </div>
        <form id="rform" method="post">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-field">
                <input type="text" name="name" placeholder="Full Name" />
                <i className="far fa-user" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-field">
                <input type="email" name="email" placeholder="Email Address" />
                <i className="fas fa-at" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-field">
                <input type="tel" name="tel" placeholder="Phone Number" />
                <i className="fas fa-mobile-alt" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-field">
                <select name="persons">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                </select>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-field">
                <input type="date" name="date" />
                <i className="far fa-calendar-alt" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="kf-field">
                <input type="text" name="time" placeholder="Time" />
                <i className="far fa-clock" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="kf-bts">
                <a
                  href="#"
                  className="kf-btn"
                  onclick="$('#rform').submit(); return false;"
                >
                  <span>booking table</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="alert-success" style={{ display: 'none' }}>
          <p>Thanks, your message is sent successfully.</p>
        </div>
      </div>
    </div>
  )
}

export default Reservation
