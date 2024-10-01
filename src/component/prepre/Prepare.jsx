import React from "react";

export default function Prepare() {
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-bold text-center">
          Currentlty cooking : 02
        </h1>
        <hr></hr>

        <ul className="flex justify-around">
          <li>Name</li>
          <li>Time</li>
          <li>Calories</li>
        </ul>
      </div>
    </div>
  );
}
