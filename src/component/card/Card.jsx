import React, { useEffect, useState } from "react";
import Newcard from "./Newcard";
import Amount from "../amount/Amount";
// import Cookcard from '../Cookcard'

export default function Card() {
  const [card, setCard] = useState([]);

  const [cookcard, setCookcard] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handlecookcard = (cook) => {
    const result = [...cookcard, cook];

    setCookcard(result);
  };

  return (
    <div>
      <h1 className="bg-slate-300 w-[80%] m-auto text-30px p-10 mt-10 rounded-lg">
        Card: {card.length}
      </h1>

      <div className="grid grid-cols-2 mt-10">
        <div className="grid grid-cols-2 gap-10  ">
          {card.map((newcard) => (
            <Newcard
              handlecookcard={handlecookcard}
              newcard={newcard}
            ></Newcard>
          ))}
        </div>

        {/* amount card */}

        <div>
          <Amount cookcard={cookcard} />
        </div>
      </div>
    </div>
  );
}
