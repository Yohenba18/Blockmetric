import Image from "next/image";
import React from "react";

const IssueButton = ({ name, image_url, description, activeName }: any) => {
  return (
    <div
      className={`flex md:flex-col gap-3 py-8 px-5 text-black rounded-lg transition-all duration-100 ${
        activeName == name ? "bg-white" : "bg-gray-400"
      }`}
    >
      <Image src={image_url} alt="dev" height={250} width={250} />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-left">{description}</p>
    </div>
  );
};

export default IssueButton;
