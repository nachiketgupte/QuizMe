import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element = {<SignUpPage />} />
      </Routes>
  );
}

export default App;
