import React from 'react'

const Gallery = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: 'url(images/gallery_inner_bg.jpg)' }}
          />
          <div className="container">
            <h1
              className="kf-h-title text-anim-1 scroll-animate"
              data-splitting="chars"
              data-animate="active"
            >
              Gallery
            </h1>
          </div>
        </section>
        {/* Section Gallery */}
        <section className="section kf-gallery">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle element-anim-1 scroll-animate"
                data-animate="active"
              >
                Our Photo Gallery
              </div>
              <h3
                className="kf-title element-anim-1 scroll-animate"
                data-animate="active"
              >
                Looks Our Photo Gallery
              </h3>
            </div>
            <div
              className="kf-filter kf-filter-gal element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="#" data-href=".all" className="active">
                View all
              </a>
              <a href="#" data-href=".fast-food">
                fast food
              </a>
              <a href="#" data-href=".hot-coffee">
                Hot coffee
              </a>
              <a href="#" data-href=".dinner-menu">
                Dinner menu
              </a>
              <a href="#" data-href=".special-pizza">
                Special pizza
              </a>
            </div>
            <div className="kf-gallery-items row">
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ins_gal1.jpg" className="has-popup-gallery">
                      <img src="images/ins_gal1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">italian burger</div>
                    </div>
                    <div className="subname">
                      <div className="value">fast food</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ins_gal2.jpg" className="has-popup-gallery">
                      <img src="images/ins_gal2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">italian pasta</div>
                    </div>
                    <div className="subname">
                      <div className="value">dinner menu</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ins_gal3.jpg" className="has-popup-gallery">
                      <img src="images/ins_gal3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">Chicken burger</div>
                    </div>
                    <div className="subname">
                      <div className="value">fast food</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all special-pizza">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ins_gal4.jpg" className="has-popup-gallery">
                      <img src="images/ins_gal4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">italian pizza</div>
                    </div>
                    <div className="subname">
                      <div className="value">special pizza</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all hot-coffee">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ins_gal5.jpg" className="has-popup-gallery">
                      <img src="images/ins_gal5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">cappuccino</div>
                    </div>
                    <div className="subname">
                      <div className="value">hot coffee</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all fast-food">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/ins_gal6.jpg" className="has-popup-gallery">
                      <img src="images/ins_gal6.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">Chicken nuggets</div>
                    </div>
                    <div className="subname">
                      <div className="value">fast food</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all hot-coffee">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a
                      href="images/grid_gal1.jpg"
                      className="has-popup-gallery"
                    >
                      <img src="images/grid_gal1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">Black coffee</div>
                    </div>
                    <div className="subname">
                      <div className="value">hot coffee</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r4.jpg" className="has-popup-gallery">
                      <img src="images/menu_r4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">Spaghetti</div>
                    </div>
                    <div className="subname">
                      <div className="value">dinner menu</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-menu">
                <div
                  className="kf-gallery-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r6.jpg" className="has-popup-gallery">
                      <img src="images/menu_r6.jpg" alt="" />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="name">
                      <div className="value">Sea Fish</div>
                    </div>
                    <div className="subname">
                      <div className="value">dinner menu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: 'url(images/cta_bg3.jpg)' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Need a Table On Coffee House
                  </div>
                  <h3
                    className="kf-title element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Booking Table For Your &amp; Family Members
                  </h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
                <a
                  href="reservation.html"
                  className="kf-btn element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>booking table</span>
                  <i className="fas fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section Brands */}
        <div className="section kf-brands">
          <div className="container">
            <div className="kf-brands-items row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand5.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/brand6.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
