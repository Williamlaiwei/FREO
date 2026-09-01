// Flavor helpers used on Home and Flavors pages.
import type { Flavor } from '../../types/flavor'

export function getTodaysFlavors(list: Flavor[]): Flavor[] {
  return list.filter((flavor) => flavor.isToday)
}
