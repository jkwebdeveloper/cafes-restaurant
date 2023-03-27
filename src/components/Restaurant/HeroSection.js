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
              Choose Your Best Food <br />
              From Categories
            </h3>
          </div>
          <div className="kf-text" data-animate="active">
            <p>
              Sed ut perspiciatis unde omnis iste natus error accusantium
              doloremque laudantium, totam rem aperiam eaque ipsa quae abillo
              inventore veritatis quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut
              odit aut fugit sed quia con
            </p>
          </div>
          <Link to="/menu-restaurant" className="kf-btn" data-animate="active">
            <span>explore more Category</span>
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
