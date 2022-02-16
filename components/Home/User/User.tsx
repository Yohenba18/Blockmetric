import data from "../../../data/user";
import UserCard from "./UserCard";

const User = () => {
  return (
    <>
      <div className="mx-5 sm:mx-10 flex flex-col max-w-7xl lg:mx-auto gap-8 my-20">
        <div className="text-center text-4xl font-bold ">Users</div>
        {data.map((user) => {
          return (
            <>
              <UserCard
                image={user.image}
                content={user.content}
                imagename={user.imagename}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default User;
