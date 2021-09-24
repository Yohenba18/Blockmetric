import Blogcards from "../components/Blogcards";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="bg-backblue text-white h-auto">
      <Layout>
          <Blogcards/>
      </Layout>
    </div>
  );
}
