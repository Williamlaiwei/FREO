// Temporary data helpers. Swap these for real HTTP calls later.
import { flavors } from '../data/flavors'
import { stores } from '../data/stores'
import type { Flavor } from '../types/flavor'
import type { Member } from '../types/member'
import type { Store } from '../types/store'

export function getFlavors(): Flavor[] {
  return flavors
}

export function getStores(): Store[] {
  return stores
}

export function getMemberPlaceholder(): Member {
  return {
    name: 'FREO Guest',
    points: 12,
  }
}
