import React, { useState } from "react";
import NFTData from "../../../data/NFTData";
import data from "../../../data/BlockchainData";
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

  const options = ["Choose", "NFT", "Blockchain"];

  const [value, setValue] = useState("");
  const [transactionSpeed, setTransactionSpeed] = useState(0);
  const [sales, setSales] = useState(0);
  const [ans, SetAns] = useState("");

  const handleCalculation = (event: any) => {
    event.preventDefault();
    openModal()
    if (value === "Blockchain") {
      let blockchainData = Object.values(data);
      const nearestObject = blockchainData.reduce((nearest, current) => {
        const nearestDifference = Math.abs(
          nearest["Avg transaction speed"] - transactionSpeed
        );
        const currentDifference = Math.abs(
          current["Avg transaction speed"] - transactionSpeed
        );
        return currentDifference < nearestDifference ? current : nearest;
      });
      SetAns(nearestObject.Chains);
      alert(nearestObject["Chains"]);
    } else if (value === "NFT") {
      // const strNum = "1,234,567";
      // const intNum = parseInt(strNum.replace(/,/g, ""));
      // console.log(intNum);
      const nftarray = NFTData.map((obj) => ({
        collections: obj.Collections,
        sales: parseInt(obj.Sales.replace(/\D/g, "")),
      }));
      console.log(nftarray);

      const nearestObject = nftarray.reduce((nearest, current) => {
        const nearestDifference = Math.abs(nearest.sales - sales);
        const currentDifference = Math.abs(current.sales - sales);
        return currentDifference < nearestDifference ? current : nearest;
      });
      SetAns(nearestObject.collections);
      console.log(nearestObject.collections);
    }
  };

  const handleChange = (e: any) => {
    value === "Blockchain"
      ? setTransactionSpeed(e.target.value)
      : setSales(e.target.value);
  };

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
        {value === "NFT" ? (
          <div className="flex flex-col gap-4">
            <label className="text-2xl">Enter Sales.</label>
            <div className="flex gap-2 h-8 text-black">
              <input
                type="number"
                placeholder="Amount"
                className="px-2"
                min={0}
                onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}
        <button
          className="py-4 px-2 bg-background-green rounded-lg w-48"
          onClick={handleCalculation}
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
