import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <div className="container mb-5">
        <Navigation />
        <Header />
        <Footer />
      </div>
    </>
  );
};
