import React from 'react'
import services_inner_bg from '../assets/images/services_inner_bg.jpg'
import cta_bg from '../assets/images/cta_bg.jpg'
import TableBooking from '../components/Home/TableBooking'



const Services = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${services_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Services
            </h1>
          </div>
        </section>
        {/* Section Services */}
        <section className="section kf-services">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                We provide
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Kaffen Services One
              </h3>
            </div>
            <div className="kf-services-items row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="kf-services-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/service1.jpg")} alt="" />
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className="las la-utensils" />
                    </div>
                    <h5 className="name">Food Services</h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="kf-services-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/service2.jpg")} alt="" />
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className="las la-coffee" />
                    </div>
                    <h5 className="name">Coffee Club</h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="kf-services-item"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <img src={require("../assets/images/service3.jpg")} alt="" />
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className="las la-glass-cheers" />
                    </div>
                    <h5 className="name">Delicious Latte</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Numbers-2 */}
        <section className="section kf-numbers-2 section-bg">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                What we do
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Kaffen Services Two
              </h3>
            </div>
            <div className="kf-numbers-items-2 row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-cookie" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Birthday Cakes</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-carrot" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Fresh Food</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-hamburger" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Fast Food</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-fish" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Sea Food</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-pizza-slice" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Pizza</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-glass-cheers" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Drinks</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-mug-hot" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Coffee</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                <div
                  className="kf-numbers-item-2"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className="las la-seedling" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Vegetables</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Services-2 */}
        <section className="section kf-services">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Our awesome
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Kaffen Services Three
              </h3>
            </div>
            <div className="kf-services-items-2 row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon1.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Birthday Cakes</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon2.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Fresh Foods</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon3.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Skills Chefs</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <div
                  className="kf-services-item-2"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/service_icon4.png")} alt="" />
                  </div>
                  <div className="desc">
                    <h5 className="name">Organic Juice</h5>
                    <div className="subname">Sed ut perspiciatis unde</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg})` }}
        >
          <TableBooking/>
        </section>
      </div>
    </div>
  )
}

export default Services
