import type { Flavor } from '../types/flavor'
import cupFroyo from '../assets/images/cup-froyo.png'
import cupGelato from '../assets/images/cup-gelato.png'
import cupPlant from '../assets/images/cup-plant.png'

type FlavorCardProps = {
  flavor: Flavor
}

const cups = {
  'Frozen Yoghurt': cupFroyo,
  'Express Gelato': cupGelato,
  'Plant-Based': cupPlant,
}

// One flavour tile, styled like the FREO website cards.
function FlavorCard({ flavor }: FlavorCardProps) {
  return (
    <article className="flavor-card">
      <img className="flavor-cup" src={cups[flavor.category]} alt="" />
      <p className="flavor-category">{flavor.category}</p>
      <h3 className="card-title">{flavor.name}</h3>
      <p className="card-text">{flavor.description}</p>
      {flavor.isToday ? <span className="badge">Today</span> : null}
    </article>
  )
}

export default FlavorCard
