import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signup' element = {<SignUpPage />} />
        <Route path='/login' element = {<LoginPage />} />
      </Routes>
  );
}

export default App;
