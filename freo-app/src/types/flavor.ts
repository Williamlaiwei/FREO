// Shape of a FREO flavour shown in the app.
export type Flavor = {
  id: string
  name: string
  description: string
  category: 'Frozen Yoghurt' | 'Express Gelato' | 'Plant-Based'
  // When true, this flavour appears in today's list on Home.
  isToday: boolean
}
