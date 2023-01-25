import React from "react";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter any previous SkillSet</label>
          <select className="w-1/5 text-black h-8 px-2">
            <option>Reactjs</option>
            <option>Defi</option>
            <option>Gaming</option>
            <option>Metaverse</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter the Budget</label>
          <div className="flex gap-2 h-8">
            <input type="number" placeholder="min" className="px-2" />-
            <input type="number" placeholder="max" className="px-2" />
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
