import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="kf-footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* logo */}
              <div className="kf-logo">
                <Link to="/">
                  <img src={require('../assets/images/logo1.png')} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* hours */}
              <div className="kf-f-hours">
                <h5>Heures d'ouverture</h5>
                <ul>
                  <li>
                    Lundi - Dimanche
                    <em>10:00 - 23:00</em>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* contact */}
              <div className="kf-f-contact">
                <h5>Contactez-nous</h5>
                <ul>
                  <li>
                    <i className="las la-map-marker" />
                    <em>adresse :</em>
                    CHAUSSÉE D'ANVERS 84, 1000 BRUXELLES, BELGIQUE
                  </li>
                  <li>
                    <i className="las la-envelope-open-text" />
                    <em>Email Address :</em>
                    altano@live.fr
                  </li>
                  <li>
                    <i className="las la-phone" />
                    <em>Numéro de téléphone :</em>
                    +32 494 25 52 02
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              {/* gallery */}
              <div className="kf-f-gallery">
                <h5>Galerie</h5>
                <ul>
                  <li>
                    <a
                      href={require('../assets/images/grid_gal1.jpg')}
                      className="kf-image-hover has-popup-image"
                    >
                      <img
                        src={require('../assets/images/grid_gal1.jpg')}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require('../assets/images/grid_gal2.jpg')}
                      className="kf-image-hover has-popup-image"
                    >
                      <img
                        src={require('../assets/images/grid_gal2.jpg')}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require('../assets/images/grid_gal3.jpg')}
                      className="kf-image-hover has-popup-image"
                    >
                      <img
                        src={require('../assets/images/grid_gal3.jpg')}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require('../assets/images/grid_gal4.jpg')}
                      className="kf-image-hover has-popup-image"
                    >
                      <img
                        src={require('../assets/images/grid_gal4.jpg')}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require('../assets/images/grid_gal5.jpg')}
                      className="kf-image-hover has-popup-image"
                    >
                      <img
                        src={require('../assets/images/grid_gal5.jpg')}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={require('../assets/images/grid_gal1.jpg')}
                      className="kf-image-hover has-popup-image"
                    >
                      <img
                        src={require('../assets/images/grid_gal1.jpg')}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
              {/* copyright */}
              <div className="kf-copyright">
                Copyright © 2023 Chez Diallo. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
