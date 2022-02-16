import TeamCard from "./TeamCard";
import data from "../../../data/teams";

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto my-32">
      <div className="text-center flex flex-col gap-10">
        <div className="text-4xl font-bold">Team</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-10 lg:mx-auto">
          {data.map((team) => {
            return (
              <>
                <TeamCard
                  id={team.id}
                  image={team.image}
                  name={team.name}
                  skill={team.skill}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
