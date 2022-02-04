import Image from "next/image";

export const Singlecard = ({ id, name, url, words, designation }: any) => {
  const MAX_LENGTH = 15;

  return (
    <div
      key={id}
      className="w-72 md:w-80 text-center h-72 bg-background-card mx-auto my-10"
    >
      <div className="grid grid-cols-2 bg-green-600 bg-opacity-40">
        <div className="relative z-10 bottom-8 right-5">
          <Image
            src={url}
            alt={name}
            height={100}
            width={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col text-left justify-center mr-5">
          <h2 className="font-bold text-xl">{name}</h2>
          <h4 className="font-normal text-sm">
            {designation.substring(0, MAX_LENGTH)}.....
          </h4>
        </div>
      </div>
      <div className="text-text-secondary text-center text-sm mt-7 md:px-6">
        <p>{words}</p>
      </div>
    </div>
  );
};
