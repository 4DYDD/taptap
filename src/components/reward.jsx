import React from "react";

function reward({ money, price, assetName, assetUrl }) {
  return (
    <div className="size-20">
      <div className="flex flex-col items-center justify-center">
        <img src={assetUrl} alt={assetName} className="mb-1 size-full" />
        <div className="w-full text-sm">
          {price - money < 1 ? (
            <span className="block py-1 text-xs text-center text-green-200 bg-green-600 rounded-lg">
              bisa dibeli ✅
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
