import { Navbar } from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="bg-background-primary-200 text-white">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
