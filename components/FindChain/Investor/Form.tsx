import React, { useState } from "react";

const Form = () => {
  const options = ["NFT", "Blockchain"];

  const [value, setValue] = useState("");

  return (
    <div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter your Interest</label>
          <select
            className="w-1/5 text-black h-8 px-4"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            {options.map((opt: string) => {
              return <option value={opt}>{opt}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter your previous investments</label>
          <div className="flex gap-2 h-8 text-black">
            <input
              type="number"
              placeholder="Amount"
              className="px-2"
              min={0}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter amount to invest</label>
          <div className="flex gap-2 h-8 text-black">
            <input
              type="number"
              placeholder="Amount"
              className="px-2"
              min={0}
            />
          </div>
        </div>
        {
          value === "NFT" ? (
            <div className="flex flex-col gap-4">
              <label className="text-2xl">Enter Sales.</label>
              <div className="flex gap-2 h-8 text-black">
                <input
                  type="number"
                  placeholder="Amount"
                  className="px-2"
                  min={0}
                />
              </div>
            </div>
          ) : (
            <>
            <div className="flex flex-col gap-4">
              <label className="text-2xl">Enter Trade volume.</label>
              <div className="flex gap-2 h-8 text-black">
                <input
                  type="number"
                  placeholder="Amount of trade"
                  className="px-2"
                  min={0}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-2xl">Enter Transaction speed.</label>
              <div className="flex gap-2 h-8 text-black">
                <input
                  type="number"
                  placeholder="Transactions/Sec"
                  className="px-2"
                  min={0}
                />
              </div>
            </div>
            </>
          )
        }
        <button className="py-4 px-2 bg-background-green rounded-lg w-48">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
