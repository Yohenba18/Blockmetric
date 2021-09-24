import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-between align-middle max-w-7xl mx-auto pt-7 p-4 md:p-2 md:pt-7">
        <div className="text-2xl md:text-3xl md:mt-3">
          <h1>Blockmetric</h1>
        </div>
        <div className="hidden md:flex gap-10 md:gap-15 lg:gap-20 text-lg font-medium mt-4">
          <div className="md:mr-11 hover:text-green-500">
            <Link href="/">Analysis</Link>
          </div>
          <div className="md:mr-11 hover:text-green-500">
            <Link href="/Product" >Product</Link>
          </div>
          <div className=" hover:text-green-500">
            <Link href="/Resources">Resources</Link>
          </div>
        </div>
        <div className="hidden md:flex font-bold">
          <div className="mt-5 hover:text-green-500">LOGIN</div>
          <hr className=" mt-8 transform rotate-90 text-white w-12 " />
          <div className="p-2 md:p-4 border-4 rounded-full border-green-600 mt-0 hover:bg-green-600">
            SIGN IN
          </div>
        </div>
        <div className="flex md:hidden">
          <MenuIcon className="text-white h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
