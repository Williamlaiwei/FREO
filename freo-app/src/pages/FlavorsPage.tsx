import FlavorCard from '../components/FlavorCard'
import { getFlavors } from '../services/api'

// Full FREO flavour menu.
function FlavorsPage() {
  const flavors = getFlavors()

  return (
    <div className="page">
      <h1 className="page-title">FREO flavours</h1>
      <p className="lede">Swirl it. Top it. Love it.</p>
      <div className="card-list">
        {flavors.map((flavor) => (
          <FlavorCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </div>
  )
}

export default FlavorsPage
