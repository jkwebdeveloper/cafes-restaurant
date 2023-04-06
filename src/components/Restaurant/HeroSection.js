import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="kf-category-items" data-animate="active">
            <div className="kf-category-item">
              <div className="image kf-image-hover">
                <Link to="/menu-restaurant">
                  <img
                    src={require('../../assets/images/category1.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Chiken Roll</h5>
              </div>
            </div>
            <div className="kf-category-item">
              <div className="image kf-image-hover">
                <Link to="/menu-restaurant">
                  <img
                    src={require('../../assets/images/category2.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Salad Bowl</h5>
              </div>
            </div>
            <div className="kf-category-item">
              <div className="image kf-image-hover">
                <Link to="/menu-restaurant">
                  <img
                    src={require('../../assets/images/category3.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Lobsters</h5>
              </div>
            </div>
            <div className="kf-category-item">
              <div className="image kf-image-hover">
                <Link to="/menu-restaurant">
                  <img
                    src={require('../../assets/images/ins_gal1.jpg')}
                    alt=""
                  />
                </Link>
              </div>
              <div className="desc">
                <h5 className="name">Italian Burger</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
          <div className="kf-titles">
            <div className="kf-subtitle" data-animate="active">
              Popular Categories
            </div>
            <h3 className="kf-title" data-animate="active">
              Van Chez Diallo - <br />
              Restaurant Télé jazz
            </h3>
          </div>
          <div className="kf-text" data-animate="active">
            <p>
              Nouveau concept de restauration africaine dont la nourriture est
              inspirée par nos racines guinéennes, sénégalaises et ivoiriennes.
              Venez partager un bon moment entre amis ou en famille autour de
              bons plats traditionnels que vous ne trouverez nul part ailleurs à
              Bruxelles.
            </p>
          </div>
          <Link to="/menu-restaurant" className="kf-btn" data-animate="active">
            <span>Voir le menu</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
