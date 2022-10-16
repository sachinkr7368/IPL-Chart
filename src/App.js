import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { MI, SRH, RCB, KKR } from './pages/Teams';
import {Hyderabad, Mumbai, Chennai} from './pages/City';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/dashboard' element={<Overview/>} />
        <Route path='/teams/srh' element={<SRH/>} />
        <Route path='/teams/mi' element={<MI/>} />
        <Route path='/teams/rcb' element={<RCB/>} />
        <Route path='/teams/kkr' element={<KKR/>} />
        <Route path='/team' element={<Hyderabad/>} />
        <Route path="/city/hyderabad" element={<Hyderabad/>}/>
        <Route path='/city/mumbai' element={<Mumbai/>}/>
        <Route path="/city/chennai" element={<Chennai/>}/>
      </Routes>
    </Router>
  );
}

export default App;