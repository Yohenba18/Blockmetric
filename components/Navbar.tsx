import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto pt-7 p-2">
      <div className="text-2xl">
        <h1>Blockmetric</h1>
      </div>
      <div className="hidden md:flex  gap-15 md:gap-20 font-normal">
        <div className="md:mr-11">
          <Link href="/">Analysis</Link>
        </div>
        <div className="md:mr-11">
          <Link href="/Product">Product</Link>
        </div>
        <div>
          <Link href="/Resources">Resources</Link>
        </div>
      </div>
      <div className="hidden md:flex gap-2">
        <div>LOGIN</div>
        <div>|</div>
        <div>SIGN IN</div>
      </div>
      <div className="flex md:hidden">
        <MenuIcon className="text-white" />
      </div>
    </div>
  );
};

export default Navbar;
