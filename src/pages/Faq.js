import React from 'react'
import faq_inner_bg from '../assets/images/faq_inner_bg.jpg'
import cta_bg2 from '../assets/images/cta_bg2.jpg'

const Faq = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${faq_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title"
              data-splitting="chars"
              data-animate="active"
            >
              Faq
            </h1>
          </div>
        </section>
        {/* Section Faq */}
        <section className="section kf-faq">
          <div className="container">
            <div className="kf-titles align-center">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                Have Any Questions?
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Frequently Asked Questions
              </h3>
            </div>
            <div className="kf-faq-items row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="kf-faq-item collapse-item"
                  data-animate="active"
                >
                  <div className="name collapse-btn">
                    How Much Customer Do You Like Kaffen?
                    <i className="las la-arrow-circle-right" />
                  </div>
                  <div
                    className="text collapse-content"
                    style={{ display: 'none' }}
                  >
                    <p>
                      <img
                        src={require("../assets/images/faq_img1.jpg")}
                        className="alignleft"
                        alt=""
                      />
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium que laudantium, totam rem aperiam, eaque ipsa
                      quae abillo inventore veritatis
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="kf-faq-item collapse-item"
                  data-animate="active"
                >
                  <div className="name collapse-btn">
                    How Can I See Your Food Reviews?
                    <i className="las la-arrow-circle-right" />
                  </div>
                  <div
                    className="text collapse-content"
                    style={{ display: 'none' }}
                  >
                    <p>
                      <img
                        src={require("../assets/images/faq_img1.jpg")}
                        className="alignleft"
                        alt=""
                      />
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium que laudantium, totam rem aperiam, eaque ipsa
                      quae abillo inventore veritatis
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="kf-faq-item collapse-item"
                  data-animate="active"
                >
                  <div className="name collapse-btn">
                    How Can I Order Food In Online?
                    <i className="las la-arrow-circle-right" />
                  </div>
                  <div
                    className="text collapse-content"
                    style={{ display: 'none' }}
                  >
                    <p>
                      <img
                        src={require("../assets/images/faq_img1.jpg")}
                        className="alignleft"
                        alt=""
                      />
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium que laudantium, totam rem aperiam, eaque ipsa
                      quae abillo inventore veritatis
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="kf-faq-item collapse-item"
                  data-animate="active"
                >
                  <div className="name collapse-btn">
                    What Customer Say About Us?
                    <i className="las la-arrow-circle-right" />
                  </div>
                  <div
                    className="text collapse-content"
                    style={{ display: 'none' }}
                  >
                    <p>
                      <img
                        src={require("../assets/images/faq_img1.jpg")}
                        className="alignleft"
                        alt=""
                      />
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium que laudantium, totam rem aperiam, eaque ipsa
                      quae abillo inventore veritatis
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="kf-faq-item collapse-item"
                  data-animate="active"
                >
                  <div className="name collapse-btn">
                    Know About Company History?
                    <i className="las la-arrow-circle-right" />
                  </div>
                  <div
                    className="text collapse-content"
                    style={{ display: 'none' }}
                  >
                    <p>
                      <img
                        src={require("../assets/images/faq_img1.jpg")}
                        className="alignleft"
                        alt=""
                      />
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit sed
                    </p>
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium que laudantium, totam rem aperiam, eaque ipsa
                      quae abillo inventore veritatis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section CTA */}
        <section
          className="section kf-cta kf-parallax"
          style={{ backgroundImage: `url(${cta_bg2})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="kf-titles">
                  <div
                    className="kf-subtitle"
                    data-animate="active"
                  >
                    Get In Touch
                  </div>
                  <h3
                    className="kf-title"
                    data-animate="active"
                  >
                    Have Any Questions
                  </h3>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
                <a
                  href="/contact"
                  className="kf-btn"
                  data-animate="active"
                >
                  <span>Submit request</span>
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
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand1.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand2.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand3.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand4.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand5.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
                <div
                  className="kf-brands-item"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={require("../assets/images/brand6.png")} alt="" />
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

export default Faq
