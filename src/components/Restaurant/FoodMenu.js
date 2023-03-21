import React from 'react'
import menu_logo from '../../assets/images/menu_logo.png'


const FoodMenu = () => {
  return (
    <div className="container">
      <div className="kf-titles align-center">
        <div className="kf-subtitle" data-animate="active">
          Choose Best Menus
        </div>
        <h3 className="kf-title" data-animate="active">
          Kaffen Popular Foods Menu
        </h3>
      </div>
      <div
        className="kf-menu-items"
        style={{ backgroundImage: `url(${menu_logo})` }}
      >
        <div className="row">
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Chicken</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$4.9</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Salad Bowl</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$199</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Barista Pouring Syrup</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$3.5</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Smoothie</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$55.9</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Gin Trifles</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$37.5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Quesadillas</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$4.9</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Italian Burger</h5>
                <div className="subname">
                  Tomatoes, sausage, ground, onions, cheese
                </div>
                <div className="price">$12.8</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Chicken Burger</h5>
                <div className="subname">
                  Ground chicken breast, mustard, paprika
                </div>
                <div className="price">$17.5</div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Sea Fish</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$79.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Okonomiyaki</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$99.9</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Benedict</h5>
                <div className="subname">Sed ut perspiciatis unde</div>
                <div className="price">
                  <span>$68.5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="kf-menu-item" data-animate="active">
              <div>
                <h5 className="name">Milk Cream</h5>
                <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                <div className="price">$7.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodMenu
