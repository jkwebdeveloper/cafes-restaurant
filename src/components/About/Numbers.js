import React from 'react'

const Numbers = () => {
  return (
    <div className="container">
      <div className="kf-numbers-items-2 row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-numbers-item-2 " data-animate="active">
            <div className="icon">
              <i className="las la-gem" />
            </div>
            <div className="num">256+</div>
            <div className="desc">
              <h5 className="name">Clients</h5>
              {/* <div className="subname">Sed ut perspiciatis unde</div> */}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-numbers-item-2" data-animate="active">
            <div className="icon">
              <i className="las la-user-tie" />
            </div>
            <div className="num">36+</div>
            <div className="desc">
              <h5 className="name">Professionals</h5>
              {/* <div className="subname">Sed ut perspiciatis unde</div> */}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-numbers-item-2" data-animate="active">
            <div className="icon">
              <i className="las la-trophy" />
            </div>
            <div className="num">753+</div>
            <div className="desc">
              <h5 className="name">Récompenses</h5>
              {/* <div className="subname">Sed ut perspiciatis unde</div> */}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-numbers-item-2 " data-animate="active">
            <div className="icon">
              <i className="lar la-grin-stars" />
            </div>
            <div className="num">100+</div>
            <div className="desc">
              <h5 className="name">Avis 5 étoiles</h5>
              {/* <div className="subname">Sed ut perspiciatis unde</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers
