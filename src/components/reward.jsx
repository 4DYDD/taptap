import React from "react";

function reward({ money, price, assetName, assetUrl }) {
  return (
    <div className="size-24">
      <div className="relative flex flex-col items-center justify-center">
        <img
          src={assetUrl}
          alt={assetName}
          className={`relative mb-1 size-1/2 ${
            price - money < 1 && "animate-bouncekan"
          }`}
        />
        <div className="w-full">
          {price - money < 1 ? (
            <span className="block px-2 py-2 text-xs text-center text-green-300 bg-green-700 rounded-lg">
              terbeli <i className="fa-solid fa-circle-check"></i>
            </span>
          ) : (
            `\$${price - money}`
          )}
        </div>
      </div>
    </div>
  );
}

export default reward;
