import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="container">
      <div className="kf-titles align-center">
        <div className="kf-subtitle " data-animate="active">
          Get Every Single Update
        </div>
        <h3 className="kf-title " data-animate="active">
          Read Some Latest Blog &amp; News
        </h3>
      </div>
      <div className="kf-blog-grid-items row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="kf-blog-grid-item " data-animate="active">
            <div className="image kf-image-hover">
              <Link to="#">
                <img
                  src={require('../../assets/images/latest_blog1.jpg')}
                  alt=""
                />
              </Link>
            </div>
            <div className="desc">
              <h5 className="name">
                SWR React Hooks With Next Increm Ental Static Regeneration
              </h5>
              <div className="kf-date">
                <i className="far fa-calendar-alt" />
                25 Sep 2021
              </div>
              <div className="kf-comm">
                <i className="far fa-comments" />
                Comments (7)
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="kf-blog-grid-item " data-animate="active">
            <div className="image kf-image-hover">
              <Link to="#">
                <img
                  src={require('../../assets/images/latest_blog2.jpg')}
                  alt=""
                />
              </Link>
            </div>
            <div className="desc">
              <h5 className="name">
                Decisions For Building Flexible Components DevTools Browser
              </h5>
              <div className="kf-date">
                <i className="far fa-calendar-alt" />
                25 Sep 2021
              </div>
              <div className="kf-comm">
                <i className="far fa-comments" />
                Comments (7)
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="kf-blog-grid-item " data-animate="active">
            <div className="image kf-image-hover">
              <Link to="#">
                <img
                  src={require('../../assets/images/latest_blog3.jpg')}
                  alt=""
                />
              </Link>
            </div>
            <div className="desc">
              <h5 className="name">
                SWR React Hooks With Next Increm Ental Static Regeneration
              </h5>
              <div className="kf-date">
                <i className="far fa-calendar-alt" />
                25 Sep 2021
              </div>
              <div className="kf-comm">
                <i className="far fa-comments" />
                Comments (7)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="align-center">
        <Link to="#" className="kf-btn " data-animate="active">
          <span>view all</span>
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  )
}

export default Blog
