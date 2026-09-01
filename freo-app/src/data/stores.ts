// Mock store list from letsfreo.com. Replace with a real API later.
import type { Store } from '../types/store'

export const stores: Store[] = [
  {
    id: '1',
    name: 'Town Hall, Sydney',
    address: 'Shop 2, 115 Bathurst St',
    suburb: 'Sydney NSW 2000',
    hours: 'Sun–Wed 11:00–22:30 · Thu–Sat 11:00–23:00',
  },
  {
    id: '2',
    name: 'Darling Square, Sydney',
    address: 'Shop SE.05/5 Little Hay St',
    suburb: 'Haymarket NSW 2000',
    hours: 'Sun–Thu 12:00–22:30 · Fri–Sat 12:00–23:00',
  },
  {
    id: '3',
    name: 'Chatswood Chase',
    address: 'B043, 345 Victoria Ave',
    suburb: 'Chatswood NSW 2067',
    hours: 'Mon–Sun 12:00–21:00',
  },
  {
    id: '4',
    name: 'FREO St Leonards',
    address: 'Shop R2101/488 Pacific Hwy',
    suburb: 'St Leonards NSW 2065',
    hours: 'Sun–Thu 08:00–22:00 · Fri–Sat 08:00–22:30',
  },
]
