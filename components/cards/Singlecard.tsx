import Image from "next/image";

export const Singlecard = ({ name, url, words, designation }) => {
  return (
    <div className="w-72 md:w-80 text-center h-72 bg-cardbg">
      <div className="flex justify-between bg-green-600">
        <div>
          <img src={url} alt={name} height="100" width="100" className="rounded-full border-2 relative bottom-8 left-2 border-activepurple"/>
        </div>
        <div className="flex flex-col text-left mr-5 mt-5  md:mr-10 ">
          <h2>{name}</h2>
          <h4>{designation}</h4>
        </div>
      </div>
      <div className="text-pfontgray text-sm mt-7 md:px-6">
        <p>{words}</p>
      </div>
    </div>
  );
};
