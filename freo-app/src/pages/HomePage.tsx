import { Link } from 'react-router-dom'
import cupFroyo from '../assets/images/cup-froyo.png'
import cupGelato from '../assets/images/cup-gelato.png'
import cupPlant from '../assets/images/cup-plant.png'
import FlavorCard from '../components/FlavorCard'
import StoreCard from '../components/StoreCard'
import { getTodaysFlavors } from '../features/flavors'
import { getNearbyStores } from '../features/stores'
import { getFlavors, getStores } from '../services/api'

// Landing screen, laid out like letsfreo.com: hero, flavours, stores, FREO Fam.
function HomePage() {
  const todaysFlavors = getTodaysFlavors(getFlavors())
  const nearbyStores = getNearbyStores(getStores())

  return (
    <div className="page">
      <section className="hero">
        <p className="hero-kicker">Frozen yoghurt · Express gelato · Açaí</p>
        <h1 className="hero-title">
          Anything
          <br />
          but
          <br />
          ordinary.
        </h1>
        <p className="lede">
          Made fresh daily with natural pot-set yoghurt, fresh milk and premium
          ingredients. Premium ingredients, pure joy. That&apos;s the FREO
          promise.
        </p>
        <div className="cup-row">
          <img src={cupFroyo} alt="Frozen yoghurt" />
          <img src={cupGelato} alt="Express gelato" />
          <img src={cupPlant} alt="Plant-based" />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>FREO flavours</h2>
          <Link to="/flavors">See all</Link>
        </div>
        <div className="flavor-scroll">
          {todaysFlavors.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Head to FREO</h2>
          <Link to="/stores">See all</Link>
        </div>
        <div className="card-list">
          {nearbyStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </section>

      <section className="cta">
        <p className="cta-kicker">The FREO Fam</p>
        <h2>Join today in under 3 minutes</h2>
        <p>
          It&apos;s free, fast and full of perks. Earn 1 FREO$ every $10 spent
          in store, plus a birthday treat voucher every year.
        </p>
        <Link to="/login" className="button">
          Join FREO Fam
        </Link>
      </section>
    </div>
  )
}

export default HomePage
