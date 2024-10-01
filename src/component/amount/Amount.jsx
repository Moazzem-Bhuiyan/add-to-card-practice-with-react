import React from "react";
import Prepare from "../prepre/Prepare";

export default function Amount({ cookcard }) {
  const { recipe_name, preparing_time, calories, prepare } = cookcard;

  return (
    <div>
      <div>
        <div className="w-[600px] ml-[300px]">
          <div className="shadow-2xl px-10 rounded-lg py-2">
            <h1 className="text-[30px] font-bold text-center">
              Want to Cook : {cookcard.length}
            </h1>{" "}
            <hr></hr>
            <ul className="flex justify-around">
              <li>Name</li>
              <li>Time</li>
              <li>Calories</li>
              <li> </li>
            </ul>
            {cookcard.map((item) => (
              <div className="bg-gray-300 rounded-lg pt-5 mb-5">
                <ul className="flex justify-around">
                  <li>{item.recipe_name}</li>
                  <li>{item.preparing_time}</li>
                  <li>{item.calories}</li>

                  <li>
                    <button className="w-[100px] h-[80] bg-green-300 rounded-lg py-2 mb-3">
                      {item.prepare}
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <hr></hr>

          {/* current cook */}

          <div>
            <Prepare></Prepare>
          </div>
        </div>
      </div>
    </div>
  );
}
