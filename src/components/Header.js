// import React from 'react'
import React, { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


const Header = () => {
  const [stickyHeader, setStickyHeader] = useState('')
  const [mobileViewHeader, setMobileViewHeader] = useState(false)

  // for sticky header
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setStickyHeader(true)
      } else {
        return setStickyHeader(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [window.scrollY])

  // for check inner width
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        setMobileViewHeader(false)
      }
    })

    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [window.innerWidth])

  return (
    <>
      <header
        className={`kf-header ${stickyHeader && 'fixed'} ${
          mobileViewHeader && 'animated show opened'
        } `}
      >
        {/* topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" />
                <em>HEURES D'OUVERTURE :</em> 10:00 am - 23:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
              {/* social */}
              <div className="kf-h-social">
                <Link to="https://www.facebook.com/people/Jazz-Resto/100066797857101/" target="blank">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="https://goo.gl/maps/x2u5CPNTRmC73vnt5" target="blank">
                  <i className="fas fa-map-marker-alt" />
                </Link>
                <Link to="https://www.instagram.com/chezdiallo_be/" target="blank">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="https://www.youtube.com/@yaoraissa" target="blank">
                  <i className="fab fa-youtube" />
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" />
                <em>ADRESSE :</em> Chaussée d'Anvers 84, 1000 Bruxelles, Belgique
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
                <Link to="/">
                  <img src={require('../assets/images/logo1.png')} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
              {/* main menu */}
              <div className="kf-main-menu">
                <ul>
                  <li>
                    {/* <Link to="/">
                      Home
                      <i className="las la-angle-down" />
                    </Link> */}
                    <Link to="/restaurant">Accueil</Link>
                    {/* <ul>
                      <li>
                        <Link to="/">Coffee House</Link>
                      </li>
                      <li>
                        <Link to="/restaurant">Restaurant</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="/about">A propos</Link>
                  </li>

                  <li>
                    <Link to="/menu-coffee">
                      Menu
                      {/* <i className="las la-angle-down" /> */}
                    </Link>
                    {/* <ul>
                      <li>
                        <Link to="/menu-coffee">Coffee</Link>
                      </li>
                      <li>
                        <Link to="/menu-restaurant">Restaurant</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="#">
                    Plus
                      <i className="las la-angle-down" />
                    </Link>

                    <ul>
                      <li>
                        <Link to="/services">Service</Link>
                      </li>
                      <li>
                        <Link to="/reservation">Réservation</Link>
                      </li>
                      <li>
                        <Link to="/history">Histoire</Link>
                      </li>
                      <li>
                        <Link to="/team">Notre Chef</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallerie</Link>
                      </li>
                      {/* <li>
                        <Link to="/faq">FAQ</Link>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contactez-nous</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
              {/* menu btn */}
              {mobileViewHeader ? (
                <XMarkIcon
                  color="white"
                  height={30}
                  onClick={() => setMobileViewHeader(false)}
                />
              ) : (
                <a
                  to="#"
                  className="kf-menu-btn"
                  onClick={() => setMobileViewHeader(true)}
                >
                  <span />
                </a>
              )}
              {/* btn */}
              <Link to="/reservation" className="kf-btn h-btn">
                <span>Réservez une table</span>
              </Link>
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        <div className="kf-navbar-mobile">
          {/* mobile menu */}
          <div className="kf-main-menu">
            <ul>
              <li className="">
                <Link to="/restaurant">Accueil</Link>
              </li>
              <li>
                <Link to="/about">A propos</Link>
              </li>
              <li className="has-children">
                <Link to="/menu-coffee">Menu</Link>
              </li>
              <li className="has-children">
                <Link to="#">Plus</Link>
                <i className="las la-angle-down" />
                <ul style={{display:'block'}}>
                  <li>
                    <Link to="/services">Service</Link>
                  </li>
                  <li>
                    <Link to="/reservation">Réservation</Link>
                  </li>
                  <li>
                    <Link to="/history">Histoire</Link>
                  </li>
                  <li>
                    <Link to="/team">Notre Chef</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallerie</Link>
                  </li>
                  {/* <li>
                    <Link to="/faq">FAQ</Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="has-children">
                <Link to="#">Blog</Link>
                <i className="las la-angle-down" />
                <ul>
                  <li>
                    <Link to="/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog Standard</Link>
                  </li>
                  <li>
                    <Link to="/blog-single">Blog Single</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/contact">Contactez-nous</Link>
              </li>
            </ul>
          </div>
          {/* mobile topline */}
          <div className="kf-topline">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* mobile btn */}
                <Link to="/reservation" className="kf-btn h-btn">
                  <span>Réservez une table</span>
                  <i className="fas fa-chevron-right" />
                </Link>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* social */}
                <div className="kf-h-social">
                  <Link to="https://www.facebook.com/people/Jazz-Resto/100066797857101/" target="blank">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://goo.gl/maps/x2u5CPNTRmC73vnt5" target="blank">
                    <i className="fas fa-map-marker-alt" />
                  </Link>
                  <Link to="https://www.instagram.com/chezdiallo_be/" target="blank">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.youtube.com/@yaoraissa" target="blank">
                    <i className="fab fa-youtube" />
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* hours */}
                <div className="kf-h-group">
                  <i className="far fa-clock" />
                  <em>HEURES D'OUVERTURE :</em> 10:00 am - 23:00 pm
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* location */}
                <div className="kf-h-group">
                  <i className="fas fa-map-marker-alt" />
                  <em>Location :</em> Chaussée d'Anvers 84, 1000 Bruxelles, Belgique
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
