import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex">
        <div><Link href="/">Analysis</Link></div>
        <div><Link href="/">Analysis</Link></div>
        <div><Link href="/">Analysis</Link></div>
      </div>
      <div className="flex gap-2">
        <div>LOGIN</div>
        <div>|</div>
        <div>SIGN IN</div>
      </div>
      <div className="flex md:hidden">
        <h1>Hamburger Icon</h1>
      </div>
    </div>
  );
};

export default Navbar;
