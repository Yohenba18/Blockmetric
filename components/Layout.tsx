import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div className="bg-navblack">
        <Footer />
      </div>
    </>
  );
}
