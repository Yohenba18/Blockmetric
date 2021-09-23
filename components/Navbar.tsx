import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex">
        <Link href="/">Analysis</Link>
        <Link href="/">Analysis</Link>
        <Link href="/">Analysis</Link>
      </div>
      <div className="flex">
        <div>LOGIN</div>
        <hr />
        <div>SIGN IN</div>
      </div>
      <div className="flex">
        <h1>Hamburger Icon</h1>
      </div>
    </div>
  );
};

export default Navbar;
