import house from "../assets/img/house.png";

function reward({ forMoney }) {
  return [
    {
      money: forMoney,
      price: 50,
      assetName: `house`,
      assetUrl: house,
    },
    {
      money: forMoney,
      price: 100,
      assetName: `house`,
      assetUrl: house,
    },
    {
      money: forMoney,
      price: 150,
      assetName: `house`,
      assetUrl: house,
    },
  ];
}

export default reward;
