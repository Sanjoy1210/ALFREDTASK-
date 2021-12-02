import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import AllPlace from './Components/AllPlace/AllPlace';
import SearchPlace from './Components/SearchPlace/SearchPlace';
import EditPlace from './Components/EditPlace/EditPlace';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allplace" element={<AllPlace />} />
            <Route path="/searchplace" element={<SearchPlace />} />
            <Route path="/editplace/:index" element={<EditPlace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
