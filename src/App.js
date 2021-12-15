import { Fragment } from 'react/cjs/react.development';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import User from './Components/User/User';

function App() {
  return (
    <Fragment>
      <Header/>
      <User/>
      <Footer/>
    </Fragment>
  );
}

export default App;
