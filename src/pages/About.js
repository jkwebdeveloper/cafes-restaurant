import React from 'react'
import history_inner_bg from '../assets/images/history_inner_bg.jpg'
import testimonials from '../assets/images/testimonials_bg2.jpeg'
import cta_bg from '../assets/images/cta_bg.jpg'
import HeroSection from '../components/About/HeroSection'
import Numbers from '../components/About/Numbers'
import Video from '../components/About/Video'
import Service from '../components/About/Service'
import TeamMember from '../components/About/TeamMember'
import Brands from '../components/About/Brands'
import FeedBack from '../components/Home/FeedBack'
import TableBooking from '../components/Home/TableBooking'

const About = () => {
  return (
    <div className="bg">
      <div className="wrapper">
        {/* Section Started Inner */}
        <section className="section kf-started-inner">
          <div
            className="kf-parallax-bg js-parallax"
            style={{ backgroundImage: `url(${history_inner_bg})` }}
          />
          <div className="container">
            <h1
              className="kf-h-title "
              data-splitting="chars"
              // data-animate="active"
            >
              About Us
            </h1>
          </div>
        </section>
        {/* Section About-2 */}
        <section className="section kf-choose kf-choose-2">
          <HeroSection/>
        </section>
        {/* Section Numbers-2 */}
        <section className="section kf-numbers-2 section-bg">
          <Numbers/>
        </section>
        {/* Section Video */}
        <section className="section kf-video">
          <Video/>
        </section>
        {/* Section Services-2 */}
        <section className="section kf-services">
          <Service/>
        </section>
        {/* Section Team */}
        <section className="section kf-team section-bg">
          <TeamMember/>
        </section>
        {/* Section Brands */}
        <section className="section kf-brands">
          <Brands/>
        </section>
        {/* Section Testimonials Carousel */}
        <section
          className="section kf-testimonials kf-testimonials-2 section-bg"
          style={{ backgroundImage: `url(${testimonials})` }}
        >
          <FeedBack/>
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

export default About
