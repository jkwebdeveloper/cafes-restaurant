import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'
import { BiErrorCircle } from 'react-icons/bi'
import { Formik } from 'formik'
import * as Yup from 'yup'

// const person = [
//   { id: 1, name: '1 person' },
//   { id: 2, name: '2 person' },
//   { id: 3, name: '3 person' },
//   { id: 4, name: '4 person' },
// ]

const MakeYourTable = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setphone] = useState('')
  // const [customer, setcustomer] = useState('')
  // const [date, setdate] = useState('')
  // const [time, settime] = useState('')
  // const [errors, setErrors] = useState({})
  // const [toSend, setToSend] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   persons: '',
  // })

  // const formref = useRef()

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value })
  // }

  // const hanldeSendEmail = (e) => {
  // e.preventDefault()
  // let formErrors = {}
  // if (!toSend.name) {
  //   formErrors.name = 'Name is required'
  // }
  // if (!toSend.email) {
  //   formErrors.email = 'Email is required'
  // } else if (!/\S+@\S+\.\S+/.test(email)) {
  //   formErrors.email = 'Email is invalid'
  // }
  // if (!toSend.phone) {
  //   formErrors.phone = 'Password is required'
  // } else if (phone.length == 10) {
  //   formErrors.phone = 'Phone number is wrong'
  // }
  // if (!toSend.customer) {
  //   formErrors.customer = 'person is required'
  // }
  // if (!toSend.date) {
  //   formErrors.date = 'date is required'
  // } else if (!/\S+@\S+\.\S+/.test(email)) {
  //   formErrors.date = 'date is invalid'
  // }
  // if (!toSend.time) {
  //   formErrors.time = 'Password is required'
  // } else if (time.length == 11) {
  //   formErrors.time = ''
  // }
  // setErrors(formErrors)

  // console.log(toSend)
  // emailjs
  //   .sendForm(
  //     'service_1j45l3y',
  //     'template_qkpku3v',
  //     formref.current,
  //     'wG9GGFL3JKaYFJk9W',
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result)
  //     },
  //     (error) => {
  //       console.log(error)
  //     },
  //   )
  // }
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
            number: '',
            date: '',
            time: '',
          }}
          validate={(values) => {
            const errors = {}

            if (!values.name) {
              errors.name = 'This field is required !'
            }

            if (!values.email) {
              errors.email = 'This field is required !'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'This must a valid email'
            }

            if (!values.phone) {
              errors.phone = 'This field is required !'
            }

            if (!values.number) {
              errors.number = 'This field is required !'
            }

            if (!values.date) {
              errors.date = 'This field is required !'
            }

            if (!values.time) {
              errors.time = 'This field is required !'
            }

            return errors
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {(formik) => (
            <form id="rform" onSubmit={formik.handleSubmit}>
              {console.log(formik.errors)}
              {console.log(formik)}
              {/*  ref={formref} onSubmit={(e) => hanldeSendEmail(e)} */}
              <div className="row">
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
                      pattern="[0-9]*"
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
                      name="number"
                      placeholder="Person"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={toSend.phone}
                      // onChange={handleChange}
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
                      {formik.errors.number}
                    </span>
                    {formik.errors.number ? (
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
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={toSend.date}
                      // onChange={handleChange}
                    />
                    <i className="far fa-calendar-alt" />
                    <span
                      className="error"
                      style={{ color: 'red', fontSize: '14px' }}
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
                      // onClick={() => hanldeSendEmail()}
                    >
                      <span>booking table</span>
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
        <div className="alert-success" style={{ display: 'none' }}>
          <p>Thanks, your message is sent successfully.</p>
        </div>
      </div>
    </div>
  )
}

export default MakeYourTable
