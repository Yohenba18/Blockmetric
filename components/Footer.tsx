const Fotter: React.FC = () => {
  return (
    <div className=" flex flex-col static bottom-0 p-8 pb-1 md:pl-2 md:pr-2 md:max-w-7xl mx-auto">
      <div className="flex flex-col mb-4 justify-between md:flex-row">
        <div className="mb-4 text-xs text-center sm:text-sm md:text-base md:mr-20 md:text-left">
          <div className="text-xl font-bold mb-3 md:text-4xl">
            <h2>Blockmetric</h2>
          </div>
          <div>
            <p className="text-pfontgray max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className=" text-center flex justify-between text-xs sm:text-sm md:text-base md:mr-5 md:gap-5 ">
          <div className="">
            <h3 className="mb-2 text-base font-bold md:text-xl">Company</h3>
            <p className="text-pfontgray">About Us</p>
            <p className="text-pfontgray">Terms and conditions</p>
            <p className="text-pfontgray">Privacy Policy</p>
          </div>
          <div className="">
            <h3 className="mb-2 text-base font-bold md:text-xl">Join Us</h3>
            <p className="text-pfontgray">Careers</p>
            <p className="text-pfontgray">Community</p>
          </div>
        </div>
      </div>
      <div className="text-xs text-center md:text-sm">
        <p>Copyright © 2021 BLOCKMETRIC, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Fotter;
