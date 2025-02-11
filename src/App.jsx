import { useState, useRef, useEffect } from "react";

import "./App.css";

import diamond from "./assets/img/diamond.png";

import Footer from "./components/footer";
import Content from "./components/content";

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
    const y = buttonRect.top - 350;

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
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="flex flex-col h-screen snap-always snap-center">
          <div className="font-bold flex justify-center items-center flex-[1] bg-yellow-100 text-yellow-600">
            GAME TAPTAP GAIS!
          </div>

          {/* === CONTENT === */}
          <Content
            money={money}
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
            caveImageRef={caveImageRef}
            diamonds={diamonds}
          />
          {/* === CONTENT === */}
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
