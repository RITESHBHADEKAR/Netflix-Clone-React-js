import Navbar from './Navbar';
import Hero from './Hero';
import Home from '../Home';
import Footer from './Footer';
import SignIn from './SignIn';

const App = () => {
  return (
    <main>
      <Navbar />
      {/* <SignIn/> */}
      <Hero />
      <Home />
      <Footer />
    </main>
  );
};
export default App;
