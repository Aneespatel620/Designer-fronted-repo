

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./store/store_auth.jsx";  // Import AuthProvider
import Home from "./pages/home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./pages/Footer.jsx";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import Navbar from "./components/Navbar";
import image10 from '../src/images/gif5.gif';
import image11 from '../src/images/gif6.gif';
import image12 from '../src/images/gif3.gif';
import image13 from '../src/images/gif2.gif';
import image14 from '../src/images/gif7.gif';
import "./App.css";
import Adminpanel from "./components/layouts/Admin-layout.jsx";
import Users from "./components/layouts/users.jsx";
import Feedback from "./components/layouts/feedback.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
  return (
    <AuthProvider> {/* Wrap the whole app with AuthProvider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
         

            {/* ✅ Protected Routes Below */}
            <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Adminpanel />
              </ProtectedRoute>
            }
          >
            <Route path="users" element={<Dashboard />} />
            <Route path="feedback" element={<Feedback />} />
            <Route index element={ <div>
    <h2>Welcome to Admin Home</h2>
    <img
      src={image10}
      alt="Project"
      style={{ width: "300px", height: "auto" }}  // Yahan size adjust karo
    />
    <img
      src={image11}
      alt="Project"
      style={{ width: "300px", height: "auto" }}  // Yahan size adjust karo
    />
     <img
      src={image13}
      alt="Project"
      style={{ width: "200px", height: "auto" }}  // Yahan size adjust karo
    />
    <img
      src={image12}
      alt="Project"
      style={{ width: "300px", height: "auto" }}  // Yahan size adjust karo
    />
    <img
      src={image14}
      alt="Project"
      style={{ width: "300px", height: "auto" }}  // Yahan size adjust karo
    />
  </div>
          } />
          </Route>
      
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
