import React from 'react'

const TeamMember = () => {
  return (
    <div className="container">
      <div className="kf-titles align-center">
        <div className="kf-subtitle " data-animate="active">
          Experience Team Member
        </div>
        <h3 className="kf-title " data-animate="active">
          Meet Our Professional Chefs
        </h3>
      </div>
      <div className="kf-team-items row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-team-item " data-animate="active">
            <div className="desc">
              <h5 className="name">Anthony J. Bowman</h5>
              <div className="subname">Senior Chefs</div>
            </div>
            <div className="image kf-image-hover">
              <img src={require('../../assets/images/team1.jpg')} alt="" />
              <div className="info">
                <div className="label">bowmankf@gmail.com</div>
                <div className="label">+012 (345) 678 99</div>
              </div>
              <div className="social">
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="/">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-team-item " data-animate="active">
            <div className="desc">
              <h5 className="name">Kenny V. Gonzalez</h5>
              <div className="subname">Senior Chefs</div>
            </div>
            <div className="image kf-image-hover">
              <img src={require('../../assets/images/team2.jpg')} alt="" />
              <div className="info">
                <div className="label">gonzalezkf@gmail.com</div>
                <div className="label">+012 (345) 678 99</div>
              </div>
              <div className="social">
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="/">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-team-item " data-animate="active">
            <div className="desc">
              <h5 className="name">Joseph M. Lawrence</h5>
              <div className="subname">Senior Chefs</div>
            </div>
            <div className="image kf-image-hover">
              <img src={require('../../assets/images/team3.jpg')} alt="" />
              <div className="info">
                <div className="label">lawrencekf@gmail.com</div>
                <div className="label">+012 (345) 678 99</div>
              </div>
              <div className="social">
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="/">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
          <div className="kf-team-item " data-animate="active">
            <div className="desc">
              <h5 className="name">Charles K. Smith</h5>
              <div className="subname">Senior Chefs</div>
            </div>
            <div className="image kf-image-hover">
              <img src={require('../../assets/images/team4.jpg')} alt="" />
              <div className="info">
                <div className="label">smithkf@gmail.com</div>
                <div className="label">+012 (345) 678 99</div>
              </div>
              <div className="social">
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="/">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
