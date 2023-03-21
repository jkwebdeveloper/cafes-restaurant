import React from 'react'

const Service = () => {
  return (
    <div className="container">
      <div className="kf-services-items-2 row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-services-item-2" data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/service_icon1.png')} />
            </div>
            <div className="desc">
              <h5 className="name">Birthday Cakes</h5>
              <div className="subname">Sed ut perspiciatis unde</div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-services-item-2 " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/service_icon2.png')} alt="" />
            </div>
            <div className="desc">
              <h5 className="name">Fresh Foods</h5>
              <div className="subname">Sed ut perspiciatis unde</div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-services-item-2 " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/service_icon3.png')} alt="" />
            </div>
            <div className="desc">
              <h5 className="name">Skills Chefs</h5>
              <div className="subname">Sed ut perspiciatis unde</div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-services-item-2 " data-animate="active">
            <div className="image">
              <img src={require('../../assets/images/service_icon4.png')} alt="" />
            </div>
            <div className="desc">
              <h5 className="name">Organic Juice</h5>
              <div className="subname">Sed ut perspiciatis unde</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
