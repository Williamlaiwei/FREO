import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { isValidPhone } from '../features/auth'

// Phone-only login form. No real auth yet.
function LoginPage() {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isValidPhone(phone)) {
      setError('Please enter a valid phone number.')
      return
    }

    setError('')
    navigate('/member')
  }

  return (
    <div className="page">
      <h1 className="page-title">Join FREO Fam</h1>
      <p className="lede">Free, fast and full of perks. Enter your phone number to continue.</p>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="04xx xxx xxx"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        {error ? <p className="error">{error}</p> : null}
        <button type="submit" className="button">
          Continue
        </button>
      </form>
    </div>
  )
}

export default LoginPage
