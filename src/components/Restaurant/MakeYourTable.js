import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { BiErrorCircle } from 'react-icons/bi'
import { Formik } from 'formik'
import * as yup from 'yup'
import logo from '../../assets/images/logo-dark.jpg'
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Success from '../../assets/images/success.png'

const MakeYourTable = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const BookingSchema = yup.object().shape({
    name: yup.string().required('This field is required !'),
    email: yup
      .string()
      .email('Invalid email')
      .required('This field is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'phone is invalid')
      .required('phone is required'),
    persons: yup.number().required('This is field is required'),
    date: yup.date().required('This is field is required'),
    time: yup.string().required('This is field is required'),
  })
  const today = new Date().toISOString().substr(0, 10)

  const formref = useRef(null)
  console.log(formref)

  return (
    <div className="container">
      <div className="kf-reservation-form" data-animate="active">
        <div className="kf-titles align-center">
          <div className="kf-subtitle">Booking Table</div>
          <h3 className="kf-title">Make Your Reservation</h3>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            persons: '',
            date: '',
            time: '',
            logo: logo,
          }}
          validationSchema={BookingSchema}
          onSubmit={(values, action) => {
            // console.log(values)
            action.resetForm()
            // console.log('action', action)

            toast.success('Thanks, your message is sent successfully.', {
              position: 'bottom-center',
              theme: 'dark',
            })

            // emailjs
            //   .sendForm(
            //     process.env.REACT_APP_EMAILJS_SERVICE_KEY,
            //     process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
            //     // values,
            //     formref.current,
            //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            //   )
            //   .then((res) => {
            //     console.log(res)
            //   })
            //   .catch((err) => {
            //     console.log(err)
            //   })
          }}
        >
          {(formik) => (
            <form id="rform" ref={formref} onSubmit={formik.handleSubmit}>
              <div className="row">
                {/* <img src={`cid:${logo}`} alt="logo"></img> */}
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {/* {formik.touched.name && formik.errors.name && (

                    )} */}
                    <i className="far fa-user" />
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
                    >
                      {formik.errors.name}
                    </span>
                    {formik.errors.name ? (
                      <BiErrorCircle
                        style={{
                          float: 'right',
                          marginTop: '5px',
                          color: 'red',
                        }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="email"
                      // value={toSend.email}
                      // onChange={handleChange}
                      name="email"
                      placeholder="Email Address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <i className="fas fa-at" />
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
                    >
                      {formik.errors.email}
                    </span>
                    {formik.errors.email ? (
                      <BiErrorCircle
                        style={{
                          float: 'right',
                          marginTop: '5px',
                          color: 'red',
                        }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9()-\s]{10,14}"
                      maxLength="10"
                      name="phone"
                      placeholder="Phone Number"
                      value={formik.values.tel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={toSend.phone}
                      // onChange={handleChange}
                    />
                    <i className="fas fa-mobile-alt" />
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
                    >
                      {formik.errors.phone}
                    </span>
                    {formik.errors.phone ? (
                      <BiErrorCircle
                        style={{
                          float: 'right',
                          marginTop: '5px',
                          color: 'red',
                        }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="number"
                      name="persons"
                      placeholder="Person"
                      value={formik.values.persons}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {/* <select name="persons">
                      <option style={{ backgroundColor: '#090c0f' }}>
                        1 Persons
                      </option>

                      <option style={{ backgroundColor: '#090c0f' }}>
                        2 Persons
                      </option>
                      <option style={{ backgroundColor: '#090c0f' }}>
                        3 Persons
                      </option>
                      <option style={{ backgroundColor: '#090c0f' }}>
                        4 Persons
                      </option>
                    </select> */}
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
                    >
                      {formik.errors.persons}
                    </span>
                    {formik.errors.persons ? (
                      <BiErrorCircle
                        style={{
                          float: 'right',
                          marginTop: '5px',
                          color: 'red',
                        }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="date"
                      name="date"
                      min={today}
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      // onChange={handleChange}
                      onBlur={formik.handleBlur}
                      // max={moment().toDate()}
                      // value={toSend.date}
                      // onChange={handleChange}
                      style={{cursor: 'pointer'}}
                    />

                    <i className="far fa-calendar-alt" />
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px', }}
                    >
                      {formik.errors.date}
                    </span>
                    {formik.errors.date ? (
                      <BiErrorCircle
                        style={{
                          float: 'right',
                          marginTop: '5px',
                          color: 'red',
                        }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="time"
                      style={{
                        width: '100%',
                        backgroundColor: '#090c0f',
                        height: '60px',
                        borderRadius: '6px',
                        border: '1px solid #413f3f',
                        color: '#fff',
                        cursor: 'pointer'
                      }}
                      name="time"
                      placeholder="Time"
                      value={formik.values.time}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={toSend.time}
                      // onChange={handleChange}
                    />
                    <i className="far fa-clock" />
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
                    >
                      {formik.errors.time}
                    </span>
                    {formik.errors.time ? (
                      <BiErrorCircle
                        style={{
                          float: 'right',
                          marginTop: '5px',
                          color: 'red',
                        }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <button
                      type="submit"
                      className="kf-btn"
                      // onClick={diffToast}
                    >
                      <span>booking table</span>
                      <i className="fas fa-chevron-right" />
                    </button>
                    {/* <Toaster /> */}
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
        <div className="alert-success" style={{ display: 'none' }}>
          <p>Thanks, your message is sent successfully.</p>
        </div>
        {/* <div className="thankyou-section">
          <div className="thankyou-box">
            <div
              style={{
                BorderRadius: '200px',
                Height: '400px',
                Width: '400px',
                Background: '#F8FAF5',
                Margin: 'auto',
              }}
            >
              <img src={Success} alt="" style={{ height: '100px' }} />
            </div>
            <p className="thankyou-heading">
              Thanks, your message is sent successfully.
            </p>

            <button type="submit" className="kf-btn">
              <span>Ok</span>
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div> */}
        <ToastContainer />
      </div>
    </div>
  )
}

export default MakeYourTable
