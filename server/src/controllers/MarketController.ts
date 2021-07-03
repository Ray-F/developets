import { AccessoryRepository } from '../models/AccessoryRepository';

const buy = async (req, res) => {
  const { orgId, accessoryId, clientAccount } = req.query;

  const accessoryRepo = new AccessoryRepository();

  const transferResult = await accessoryRepo.transfer(clientAccount, accessoryId, 1)

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
  getMarketplace,
};
