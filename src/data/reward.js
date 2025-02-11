import laptop from "../assets/img/laptop.png";
import car from "../assets/img/car.png";
import house from "../assets/img/house.png";

function reward({ forMoney }) {
  return [
    {
      money: forMoney,
      price: 50,
      assetName: `laptop`,
      assetUrl: laptop,
    },
    {
      money: forMoney,
      price: 100,
      assetName: `car`,
      assetUrl: car,
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
