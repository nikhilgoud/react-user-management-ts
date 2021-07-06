import {FC} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">Container</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
