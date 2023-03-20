import React from 'react'

const Header = () => {
  return (
    <>
      <header className="kf-header">
        {/* topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" />
                <em>opening hours :</em> 08:00 am - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
              {/* social */}
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" />
                <em>Location :</em> 55 main street, new york
              </div>
            </div>
          </div>
        </div>
        {/* navbar */}
        <div className="kf-navbar">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              {/* logo */}
              <div className="kf-logo">
                <a href="/">
                  <img src={require('../assets/images/logo.png')} alt="" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
              {/* main menu */}
              <div className="kf-main-menu">
                <ul>
                  <li>
                    <a href="/index">
                      Home
                      <i className="las la-angle-down" />
                    </a>
                    <ul>
                      <li>
                        <a href="/">Coffee House</a>
                      </li>
                      <li>
                        <a href="/restaurant">Restaurant</a>
                      </li>
                    </ul>
                  </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                  
                  <li>
                    <a href="/menu-coffee">
                      Menu
                      <i className="las la-angle-down" />
                    </a>
                    <ul>
                      <li>
                        <a href="/menu-coffee">Menu Coffee</a>
                      </li>
                      <li>
                        <a href="/menu-restaurant">Menu Restaurant</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      Pages
                      <i className="las la-angle-down" />
                    </a>
                    <ul>
                      <li>
                        <a href="/services">Service</a>
                      </li>
                      <li>
                        <a href="/reservation">Reservation</a>
                      </li>
                      <li>
                        <a href="/history">History</a>
                      </li>
                      <li>
                        <a href="/team">Our Chefs</a>
                      </li>
                      <li>
                        <a href="/gallery">Gallery</a>
                      </li>
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/contact">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
              {/* menu btn */}
              <a href="#" className="kf-menu-btn">
                <span />
              </a>
              {/* btn */}
              <a href="/reservation" className="kf-btn h-btn">
                <span>Book a table</span>
              </a>
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        <div className="kf-navbar-mobile">
          {/* mobile menu */}
          <div className="kf-main-menu">
            <ul>
              <li className="has-children">
                <a href="/index">Home</a>
                <i className="las la-angle-down" />
                <ul>
                  <li>
                    <a href="/index">Coffee House</a>
                  </li>
                  <li>
                    <a href="/index-2">Restaurant</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li className="has-children">
                <a href="/menu-coffee">Menu</a>
                <i className="las la-angle-down" />
                <ul>
                  <li>
                    <a href="/menu-coffee">Menu Coffee</a>
                  </li>
                  <li>
                    <a href="/menu-restaurant">Menu Restaurant</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="#">Pages</a>
                <i className="las la-angle-down" />
                <ul>
                  <li>
                    <a href="/services">Service</a>
                  </li>
                  <li>
                    <a href="/reservation">Reservation</a>
                  </li>
                  <li>
                    <a href="/history">History</a>
                  </li>
                  <li>
                    <a href="/team">Our Chefs</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <a href="#">Blog</a>
                <i className="las la-angle-down" />
                <ul>
                  <li>
                    <a href="/blog-grid">Blog Grid</a>
                  </li>
                  <li>
                    <a href="/blog">Blog Standard</a>
                  </li>
                  <li>
                    <a href="/blog-single">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
            </ul>
          </div>
          {/* mobile topline */}
          <div className="kf-topline">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* mobile btn */}
                <a href="/reservation" className="kf-btn h-btn">
                  <span>Book a table</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* social */}
                <div className="kf-h-social">
                  <a href="facebook.com" target="blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="twitter.com" target="blank">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="instagram.com" target="blank">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="youtube.com" target="blank">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* hours */}
                <div className="kf-h-group">
                  <i className="far fa-clock" />
                  <em>opening hours :</em> 08:00 am - 09:00 pm
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* location */}
                <div className="kf-h-group">
                  <i className="fas fa-map-marker-alt" />
                  <em>Location :</em> 55 main street, new york
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
