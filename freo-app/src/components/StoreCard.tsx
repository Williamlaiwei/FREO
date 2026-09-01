import type { Store } from '../types/store'

type StoreCardProps = {
  store: Store
}

// One store tile with address and opening hours.
function StoreCard({ store }: StoreCardProps) {
  return (
    <article className="store-card">
      <h3 className="card-title">{store.name}</h3>
      <p className="card-text">
        {store.address}
        <br />
        {store.suburb}
      </p>
      <p className="store-hours">{store.hours}</p>
    </article>
  )
}

export default StoreCard
