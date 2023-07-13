import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-red-100 min-h-screen">
      <div className="bg-white max-w-screen-md mx-auto min-h-screen">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
