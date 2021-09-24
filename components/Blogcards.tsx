import { Singlecard } from "./Singlecard";
import data from "../data/BlogCard.json";

const Blogcards: React.FC = () => {
  return (
    <div className="bg-blue-900">
      <div className="flex gap-5 max-w-7xl mx-auto">
        {data.data.cards.map((card) => (
          <Singlecard
            name={card.name}
            url={card.image_url}
            designation={card.designation}
            words={card.words}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogcards;
