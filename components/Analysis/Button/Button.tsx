import { Singlebutton } from "./Singlebutton";

export const Button = () => {
  return (
    <>
      <div className="flex gap-3 justify-center my-5 py-7 overflow-x-scroll no-scrollbar md:overflow-x-hidden ">
        <Singlebutton title="Transaction speed" />
        <Singlebutton title="Gas Price" />
        <Singlebutton title="Devlopers" />
        <Singlebutton title="Market" />
      </div>
    </>
  );
};
