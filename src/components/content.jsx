import React from "react";

import cave from "../assets/img/cave.png";

import Reward from "../components/reward";

import reward from "../data/reward.js";

function content({
  money,
  handleTouchStart,
  handleTouchEnd,
  caveImageRef,
  diamonds,
}) {
  return (
    <div className="font-bold flex flex-col justify-center items-center flex-[10]">
      <div className="flex flex-col flex-[1] items-center justify-center w-full text-center text-yellow-600 bg-yellow-200">
        <h1>BARANG YANG BISA DIBELI</h1>
        <br />

        {/* === RUMAHNYA === */}
        <div className="flex items-center justify-center gap-4">
          {reward({ forMoney: money }).map((value, index) => (
            <Reward
              money={value.money}
              price={value.price}
              assetName={value.assetName}
              assetUrl={value.assetUrl}
            />
          ))}
        </div>
        {/* === RUMAHNYA === */}

        <br />
      </div>
      <div className="flex flex-col flex-[2] items-center justify-center w-full bg-yellow-500 relative">
        {/* GOA */}
        <div className="mb-8">{`duit kamu \$${money}`}</div>
        <button
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
          className="select-none text-[14rem] scale-100 transition-all duration-100 ease-out z-[99]"
        >
          <img
            ref={caveImageRef} // Tambahkan ref di sini
            src={cave}
            className="size-[1em] select-none pointer-events-none"
            alt="goa"
          />
        </button>
        {/* DIAMOND */}
        {diamonds.map((diamond, index) => (
          <img
            key={diamond.id}
            src={diamond.link}
            alt="diamond"
            className={`absolute w-24 h-24 opacity-0 animate-fade-up z-[${
              index + 1
            }]`}
            style={{ left: diamond.x, top: diamond.y }} // Atur posisi diamond
          />
        ))}
      </div>
    </div>
  );
}

export default content;
