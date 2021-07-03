const mockAccessory: MarketAccessory = {
  amount: 2,
  accessory: {
    name: 'New item',
    media: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/74229/preview.svg',
    orgId: null,
    cost: 5,
  },
};


const getMarketplace = async (req, res) => {
  return res.json(
    {
      tokens: 100,
      accessories: <MarketAccessory[]>[mockAccessory],
    },
  );
};


export default {
  getMarketplace,
};
