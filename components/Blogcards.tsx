import { Singlecard } from "./Singlecard";

const Blogcards: React.FC = () => {
  return (
    <div className="bg-blue-900">
      <div className="flex gap-5 max-w-7xl mx-auto">
        <Singlecard />
        <Singlecard />
        <Singlecard />
      </div>
    </div>
  );
};

export default Blogcards;
