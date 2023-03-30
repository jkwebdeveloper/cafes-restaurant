import React, { useState, useEffect } from 'react'

const FormValidation = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [person, setPerson] = useState('')
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    // Validate name
    const nameRegex = /^[A-Za-z ]+$/
    const isNameValid = nameRegex.test(name.trim())

    // Validate phone number
    const phoneRegex = /^\d{10}$/
    const isPhoneValid = phoneRegex.test(phone.trim())

    // Validate date
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    const isDateValid = dateRegex.test(date.trim())

    // Validate time
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/
    const isTimeValid = timeRegex.test(time.trim())

    // Validate person
    const personRegex = /^[1-9]\d*$/
    const isPersonValid = personRegex.test(person.trim())

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(email.trim())

    setIsValid(
      isNameValid &&
        isPhoneValid &&
        isDateValid &&
        isTimeValid &&
        isPersonValid &&
        isEmailValid,
    )
  }, [name, phone, date, time, person, email])

  const handleSubmit = (event) => {
    event.preventDefault()
    // Submit the form
  }
  return (
    <div className="container">
      <div className="formdata">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="text"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              id="time"
              type="text"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="person">Person:</label>
            <input
              id="person"
              type="number"
              value={person}
              onChange={(event) => setPerson(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
