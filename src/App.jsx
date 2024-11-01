
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import FirstFooter from "./components/FirstFooter"
import FirstHeader from "./components/FirstHeader"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import Search from "./components/Search"
import Tour from "./components/Tour"
import Tourism from "./components/Tourism"
import Trending from "./components/Trending"
import SearchResult from './components/SearchResult';
import ConservationCenter from "./components/ConservationCenter"
import Animation from './components/Animation'

function App() {
  return (
    <>
    
    <div className="p-5">
   <FirstHeader />
   <Animation />
    <Search />
    <Tour />
    <Tourism />
    <Trending />
  <FirstFooter />
  {/*About */}
  {/*<SearchResult />*/}
  {/*<ConservationCenter />*/}
    </div>
    
    </>
  )
}

export default App
