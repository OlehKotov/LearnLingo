
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Home = () => {
  return (
    <div>
      <DocumentTitle>Welcome to LearnLingo</DocumentTitle>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home