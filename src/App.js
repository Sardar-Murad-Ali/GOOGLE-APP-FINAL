import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Routes} from "react-router-dom"

import {Headers,Categories,All,Images,Vedios,News,Wrapper} from "./components/index"
import { useAppContext } from './context/appContext';
function App() {
  let {switchha}=useAppContext()
  return (
    <div >
      <BrowserRouter>
        <Headers/>
        <Categories/>
        <Routes>
          <Route path="/"  element={<All/>}/>
          <Route path="/News"  element={<News/>}/>
          <Route path="/Image"  element={<Images/>}/>
          <Route path="/Vedio"  element={<Vedios/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
