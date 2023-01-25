import React from "react";

const Form = () => {
  const options = ["NFT", "DefFi", "Gaming", "Metaverse"];

  return (
    <div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter the Use case</label>
          <select className="w-1/5 text-black h-8 px-4">
            {options.map((opt: String) => {
              return <option>{opt}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter the Budget</label>
          <div className="flex gap-2 h-8 text-black">
            <input type="number" placeholder="min" className="px-2" min={0} />-
            <input type="number" placeholder="max" className="px-2" min={1} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter you exprirence.</label>
          <div className="flex gap-2 h-8 text-black">
            <input type="number" placeholder="years" className="px-2" min={0} />
          </div>
        </div>

        <button className="py-4 px-2 bg-background-green rounded-lg w-48">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
