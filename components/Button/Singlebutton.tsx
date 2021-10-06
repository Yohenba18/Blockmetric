export const Singlebutton = ({ title }) => {
  return (
    <div className="">
      <button className=" bg-background-secondary2 hover:bg-activepurple rounded-md px-6 py-2">
        {title}
      </button>
    </div>
  );
};
