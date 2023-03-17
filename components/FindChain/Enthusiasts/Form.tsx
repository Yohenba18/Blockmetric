import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Form = () => {

  let subtitle: any;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [selectedValue, setSelectedValue] = useState("");
  const [ans, SetAns] = useState("");

  const data = {
    Bitcoin: 600,
    Ethereum: 23343,
    Tezos: 406,
    Solana: 247,
    Algorand: 1500,
    Avalance: 237,
    Cardano: 702,
    Polkadot: 221,
    Polygon: 13700,
  };
  console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let avg = (min + max) / 2;

    if (selectedValue === "Begineer") {
      SetAns("Ethereum");
    } else if (selectedValue === "Intermediate") {
      SetAns("Tezos");
    } else if (selectedValue === "Professtional") {
      SetAns("Solana");
    }
    openModal()
  };

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter any previous SkillSet level</label>
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="w-1/5 text-black h-8 px-2"
          >
            <option value="Begineer">Begineer</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Professtional">Professtional</option>+
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-2xl">Enter the Budget</label>
          <div className="flex gap-2 h-8">
            <input
              type="number"
              placeholder="min"
              className="px-2 text-black"
              min={0}
              max={10000}
              onChange={(e) => {
                setMin(Number(e.target.value));
              }}
            />
            -
            <input
              type="number"
              placeholder="max"
              className="px-2 text-black "
              min={0}
              max={10000}
              onChange={(e) => {
                setMax(Number(e.target.value));
              }}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="py-4 px-2 bg-background-green rounded-lg w-48"
        >
          Submit
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className=" text-red-700 cursor-pointer text-3xl font-bold">X</button>
        <div className="flex flex-col p-5 gap-5">
          
          <div className="text-xl font-semibold">{ans}</div>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
