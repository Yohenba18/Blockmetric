import Image from "next/image";

const UserCard = ({ image, content, imagename }: any) => {
  return (
    <>
      <section className="bg-opacity-50 bg-background-black-100 border-2 border-background-black-100 rounded-lg shadow-2xl py-5 md:py-0">
        <div className="flex flex-col-reverse max-w-3xl mx-auto md:flex-row justify-between items-center">
          <div className="w-3/4 md:w-2/3 text-base md:text-lg">{content}</div>
          <div>
            <Image src={image} alt={imagename} height={220} width={220} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserCard;
