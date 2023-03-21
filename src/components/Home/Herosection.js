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
              Organic &amp; Fresh Coffee <br />
              Provider Center
            </h3>
          </div>
          <div className="kf-text " data-animate="active">
            <p>
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia consequuntur magni dolores
              eos qui ratione
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
