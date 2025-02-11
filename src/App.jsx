import { useState, useRef, useEffect } from "react";

import "./App.css";

import cave from "./assets/img/cave.png";
import diamond from "./assets/img/diamond.png";

import Reward from "./components/reward";
import reward from "./data/reward.js";

function App() {
  const [money, setMoney] = useState(0);
  const [diamonds, setDiamonds] = useState([]);

  const caveImageRef = useRef(null);

  let timeoutId = null;
  let newDiamond;

  const handleTouchStart = (event) => {
    event.preventDefault(); // Tambahkan ini

    setMoney(money + 1);

    clearTimeout(timeoutId);
    caveImageRef.current.classList.add("!scale-95");

    const caveButton = caveImageRef.current.parentElement;
    const buttonRect = caveButton.getBoundingClientRect();

    const x = buttonRect.left + buttonRect.width / 2 - 48;
    const y = buttonRect.top - 40;

    newDiamond = {
      id: Date.now(),
      link: diamond,
      x: x,
      y: y,
    };

    setDiamonds([...diamonds, newDiamond]);
  };

  const handleTouchEnd = (event) => {
    event.preventDefault(); // Tambahkan ini

    caveImageRef.current.classList.remove("!scale-95");

    timeoutId = setTimeout(() => {
      setDiamonds([]);
    }, 1000);
  };

  return (
    <>
      <section className="flex flex-col h-screen">
        <div className="font-bold flex justify-center items-center flex-[1] bg-yellow-100 text-yellow-600">
          GAME TAPTAP GAIS!
        </div>

        {/* === CONTENT === */}
        <div className="font-bold flex flex-col justify-center items-center flex-[8]">
          <div className="flex flex-col items-center justify-center w-full h-48 py-32 text-center text-yellow-600 bg-yellow-200">
            <h1>BARANG YANG BISA DIBELI</h1>
            <br />

            {/* === RUMAHNYA === */}
            <div className="flex items-center justify-center gap-8">
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
          <div className="flex flex-col items-center justify-center w-full h-full bg-yellow-500">
            {/* GOA */}
            <div className="mb-8">{`duit kamu \$${money}`}</div>
            <button
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleTouchStart}
              onMouseUp={handleTouchEnd}
              className="select-none text-[14rem] scale-100 transition-all duration-100 ease-out relative z-[99]"
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
        {/* === CONTENT === */}
      </section>

      <footer className="flex flex-col items-center justify-center gap-3 py-5 text-xs text-white bg-slate-600">
        <a
          className="inline-block p-2 text-center rounded-lg shadow shadow-slate-800 bg-slate-800"
          href="https://www.flaticon.com/free-icons/cave"
          title="cave icons"
        >
          Cave icons created by Freepik - Flaticon
        </a>
        <a
          className="inline-block p-2 text-center rounded-lg shadow shadow-slate-800 bg-slate-800"
          href="https://www.flaticon.com/free-icons/diamond"
          title="diamond icons"
        >
          Diamond icons created by Freepik - Flaticon
        </a>
        <div>
          {" "}
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            {" "}
            Freepik{" "}
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com'
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
