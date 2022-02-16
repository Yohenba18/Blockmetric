import { HiChatAlt2 } from "react-icons/hi";
import { HiEmojiHappy } from "react-icons/hi";
import { HiPresentationChartBar } from "react-icons/hi";
import { HiClipboardCheck } from "react-icons/hi";

const value = "h-8 w-8";

export default [
  {
    id: 0,
    avatar: <HiChatAlt2 className={value} />,
    title: "Community",
    description: "A place where you can learn, grow and work together",
  },
  {
    id: 1,
    avatar: <HiEmojiHappy className={value} />,
    title: "User friendly",
    description: "Easy to understand and use",
  },
  {
    id: 2,
    avatar: <HiPresentationChartBar className={value} />,
    title: "Detailed Analysis",
    description: "Provide comparision between different blockchain",
  },
  {
    id: 3,
    avatar: <HiClipboardCheck className={value} />,
    title: "Integrated Platform",
    description:
      "Explore projects from other contributors, compare, and share feedbacks.",
  },
];
