import { AccessoryRepository } from '../models/AccessoryRepository';
import { GLOBAL_ORG } from '../models/Organisation';

const buy = async (req, res) => {
  const { orgId, accessoryId, accessoryCost } = req.body;

  const accessoryRepo = new AccessoryRepository();

  const availableAccessories = await accessoryRepo.listAvailableAccessories()

  // Find the lowest in the series to transfer
  let lowestAccessorySeries = null;
  availableAccessories
    .filter((acc) => acc.accessoryId === accessoryId)
    .forEach((acc) => {

    if (lowestAccessorySeries === null || acc.accessorySeries < lowestAccessorySeries) {
      lowestAccessorySeries = acc.accessorySeries;
    }
  })

  if (lowestAccessorySeries === null) {
    throw new Error("No accessory series found!")
  }

  const transferResult = await accessoryRepo.transfer(orgId, accessoryId, lowestAccessorySeries)

  // Reduce the wallet of the organisation by the cost of the accessory
  GLOBAL_ORG.coin -= accessoryCost

  if (transferResult) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
}

const getMarketplace = async (req, res) => {
  const { orgId } = req.query;

  const accessoryRepo = new AccessoryRepository();
  const availableAccessories = await accessoryRepo.listAvailableAccessories()

  const groupMap = {}

  availableAccessories.forEach((accessory) => {
    if (Object.keys(groupMap).indexOf(String(accessory.accessoryId)) !== -1) {
      groupMap[accessory.accessoryId] = [...groupMap[accessory.accessoryId], accessory]
    } else {
      groupMap[accessory.accessoryId] = [accessory]
    }
  })

  const accessories =  Object.values(groupMap).map((accessories: Accessory[]) => {
    const currentAccessory = accessories[0]
    delete currentAccessory.accessorySeries
    delete currentAccessory.orgId

    return <MarketAccessory> {
      amount: groupMap[currentAccessory.accessoryId].length,
      accessory: <Accessory> currentAccessory
    }
  })

  return res.json(
    {
      tokens: 100,
      accessories: <MarketAccessory[]> accessories,
    },
  );
};


export default {
  buy,
  getMarketplace,
};
