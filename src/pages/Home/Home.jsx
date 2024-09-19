import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Home = () => {
  return (
    <div className={css.home}>
      <Header />
      <DocumentTitle>Welcome to LearnLingo</DocumentTitle>
      <div className={css.container}>
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
