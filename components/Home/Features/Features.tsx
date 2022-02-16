import FeaturesCard from "./FeaturesCard";
import { HiChatAlt2 } from "react-icons/hi";
import { HiEmojiHappy } from "react-icons/hi";
import { HiPresentationChartBar } from "react-icons/hi";
import { HiClipboardCheck } from "react-icons/hi";
import data from "../../../data/features";

const Features = () => {
  const value = "h-8 w-8";
  return (
    <div className="flex flex-col gap-20 my-32">
      <div className="flex flex-col gap-5 text-center">
        <div className="text-4xl font-bold ">Our Amazing Features</div>
        <div className="text-text-secondary-100 text-base">
          Explore sensational features that make all the chain data accessible
          and easily understandable for everyone.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-10 lg:mx-auto">
        {data.map((feature) => {
          return (
            <>
              <FeaturesCard
                avatar={feature.avatar}
                title={feature.title}
                description={feature.description}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
