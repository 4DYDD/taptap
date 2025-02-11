import React from "react";

function footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-screen gap-3 py-5 text-xs text-white bg-slate-600 snap-always snap-center">
      <a
        className="inline-block p-2 text-center rounded-lg shadow shadow-slate-800 bg-slate-800"
        target="_blank"
        href="https://www.flaticon.com/free-icons/cave"
        title="cave icons"
      >
        Cave icons created by Freepik - Flaticon
      </a>
      <a
        className="inline-block p-2 text-center rounded-lg shadow shadow-slate-800 bg-slate-800"
        target="_blank"
        href="https://www.flaticon.com/free-icons/diamond"
        title="diamond icons"
      >
        Diamond icons created by Freepik - Flaticon
      </a>

      <div className="inline-block p-2 text-center rounded-lg shadow shadow-slate-800 bg-slate-800">
        {" "}
        Icons made by{" "}
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/rddrt"
          title="rddrt"
        >
          {" "}
          rddrt{" "}
        </a>{" "}
        from{" "}
        <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div className="inline-block p-2 text-center rounded-lg shadow shadow-slate-800 bg-slate-800">
        {" "}
        Icons made by{" "}
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          {" "}
          Freepik{" "}
        </a>{" "}
        from{" "}
        <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}

export default footer;
