import { Link } from 'react-router-dom'
import { getCurrentMember } from '../features/member'

// Membership card placeholders (name, QR, FREO$).
function MemberPage() {
  const member = getCurrentMember()

  return (
    <div className="page">
      <h1 className="page-title">FREO Fam</h1>
      <p className="lede">Show this at the counter to earn and spend FREO$.</p>

      <section className="member-card">
        <p className="label">Name</p>
        <p className="member-name">{member.name}</p>

        <p className="label">Member QR</p>
        <div className="qr-placeholder" aria-hidden="true">
          QR
        </div>
        <p className="hint">QR code coming soon</p>

        <p className="label">FREO$</p>
        <p className="points">{member.points}</p>
        <p className="hint">1 FREO$ is earned every $10 spent in store</p>
      </section>

      <Link to="/login" className="button button-secondary">
        Sign in
      </Link>
    </div>
  )
}

export default MemberPage
