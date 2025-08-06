// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Home from "./pages/Home";
// import Footer from "./component/Footer";
//  // path to your Home.jsx

// function App() {
//   return (
//     <Router>
      
//       <Navbar />
//       <Routes>
        
//         <Route path="/" element={<Home />} />
        
//         {/* Add other routes here */}
//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import ContactPage from "./pages/ContactPage"; // ✅ Added

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} /> {/* ✅ New Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
