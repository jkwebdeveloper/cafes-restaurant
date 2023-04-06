import React from 'react'

const Herosection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
          <div className="kf-titles">
            <div
              className="kf-subtitle "
              // data-animate="active"
            >
              About Us
            </div>
            <h3 className="kf-title " data-animate="active">
              Van Chez Diallo - <br /> Restaurant Télé jazz
            </h3>
          </div>
          <div className="kf-text " data-animate="active">
            <p>
              Nouveau concept de restauration africaine dont la nourriture est
              inspirée par nos racines guinéennes, sénégalaises et ivoiriennes.
              Venez partager un bon moment entre amis ou en famille autour de
              bons plats traditionnels que vous ne trouverez nul part ailleurs à
              Bruxelles.
            </p>
          </div>
          <div className="kf-about-quote " data-animate="active">
            <img src={require('../../assets/images/quote_img.png')} alt="" />
            <div>
              Quis autem vel eum iure reprehenderit in ealuptate velit esse
              molestiae
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
          <div className="kf-about-image " data-animate="active">
            <img src={require('../../assets/images/about_img.png')} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
