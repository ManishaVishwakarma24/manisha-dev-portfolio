// import ReactDom from 'react-dom/client'
import Headers from './component/Headers';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Contact from './component/Contact'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Headers/>
      <About/>
     <Portfolio/>
     <Contact/>

    </>
  );
}

export default App;
