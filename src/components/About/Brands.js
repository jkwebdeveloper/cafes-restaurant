import React from 'react'

const Brands = () => {
  return (
    <div className="container">
      <div className="kf-brands-items row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div className="kf-brands-item " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/brand1.png')} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div className="kf-brands-item " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/brand2.png')} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div className="kf-brands-item " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/brand3.png')} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div className="kf-brands-item " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/brand4.png')} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div className="kf-brands-item " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/brand5.png')} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
          <div className="kf-brands-item " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/brand6.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands
