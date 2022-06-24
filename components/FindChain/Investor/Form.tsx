import React from "react";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter your Interest</label>
          <select className="w-1/5 text-black h-8 rounded-lg px-4">
            <option>Nft</option>
            <option>Defi</option>
            <option>Gaming</option>
            <option>Metaverse</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <label className="text-2xl">Enter your previous investments</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default Form;
