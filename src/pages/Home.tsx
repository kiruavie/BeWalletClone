import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Main } from "./Main";

export const Home = () => {
  return (
    <>
      <div className="container mb-5">
        <Navigation />
        <Main />
        <Footer />
      </div>
    </>
  );
};
