import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index/Index'
import Signin from './pages/signin/Signin'
import User from './pages/user/User'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>  
  );
};

export default App
