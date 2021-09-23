const Fotter: React.FC = () => {
  return (
    <div className="flex flex-col static bottom-0">
      <div className="flex flex-col text-center mb-4 md:flex-row justify-between">
        <div className="mb-4">
          <h1>Left</h1>
        </div>
        <div className="flex justify-around text-xs sm:text-sm md:mr-5 md:gap-5 md:text-base">
          <div className="">
            <h3 className="mb-2">Company</h3>
            <p className="text-pfontgray">About Us</p>
            <p className="text-pfontgray">Terms and conditions</p>
            <p className="text-pfontgray">Privacy Policy</p>
          </div>
          <div className="">
            <h3 className="mb-2">Join Us</h3>
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
