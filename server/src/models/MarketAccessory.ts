interface Accessory {
  name: string
  media: string
  orgId: string
  cost: number
}

interface MarketAccessory {
  amount: number
  accessory: Accessory
}
