export const Singlebutton = ({ title }: any) => {
  const handleclick = () => {
    alert(title);
  };

  return (
    <>
      <button
        className=" bg-background-secondary2 hover:bg-activepurple rounded-md px-6 py-2 "
        onClick={handleclick}
      >
        {title}
      </button>
    </>
  );
};
