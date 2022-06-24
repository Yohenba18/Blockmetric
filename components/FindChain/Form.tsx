import React, { useState } from "react";
import IssueButton from "./IssueButton";
import buttondata from "../../data/IssueButtonData";
import Link from "next/link";

export const Form = () => {
  const [activeName, setName] = useState("");

  return (
    <>
      <div className="font-bold text-2xl mt-10 text-yellow-400">
        Tell us which of the following resembles you the most.
      </div>
      <div className="grid grid-cols-3 space-x-8 items-stretch">
        {buttondata.map((data): any => {
          return (
            <button
              onClick={(e) => {
                setName(data.name);
                e.preventDefault();
              }}
            >
              <IssueButton
                image_url={data.image_url}
                name={data.name}
                description={data.description}
                activeName={activeName}
              />
            </button>
          );
        })}
      </div>
      <Link href={`/FindChain/${activeName}`}>
        <button className="py-4 px-2 bg-background-green rounded-lg w-48">
          Next
        </button>
      </Link>
    </>
  );
};
