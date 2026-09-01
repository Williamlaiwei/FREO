import StoreCard from '../components/StoreCard'
import { getStores } from '../services/api'

// All FREO store locations.
function StoresPage() {
  const stores = getStores()

  return (
    <div className="page">
      <h1 className="page-title">Treat yourself</h1>
      <p className="lede">Head to FREO now.</p>
      <div className="card-list">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  )
}

export default StoresPage
