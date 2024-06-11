import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import JobDetail from "./pages/JobDetail.jsx"; // Import the JobDetail component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/job/:id" element={<JobDetail />} /> {/* Add route for job details */}
      </Routes>
    </Router>
  );
}

export default App;
