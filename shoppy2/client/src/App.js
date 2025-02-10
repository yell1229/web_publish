import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Login from './pages/Login.jsx';
import Layout from './pages/Layout.jsx';
import NewProject from './pages/NewProject.jsx';
import './css/style.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/member/login" element={<Login />} />
                    <Route path="/products/new" element={<NewProject />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
