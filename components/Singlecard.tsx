export const Singlecard = ({ name, url, words, designation }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img src={url} alt={name} height="300" width="100" className="object-contain rounded-full border-2 border-activepurple"/>
        </div>
        <div className="">
          <h2>{name}</h2>
          <h4>{designation}</h4>
        </div>
      </div>
      <div className="font-light">
        <p>{words}</p>
      </div>
    </div>
  );
};
