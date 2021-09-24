import { Singlecard } from "./Singlecard";

const Blogcards: React.FC = () => {
  return (
    <div className="flex gap-5">
      <Singlecard/>
      <Singlecard/>
      <Singlecard/>
    </div>
  );
};

export default Blogcards;
