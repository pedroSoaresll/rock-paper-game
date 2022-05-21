import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchPage from "./pages/Match";
import Prepare from "./pages/Prepare";
import Start from "./pages/Start";

export const ApplicationRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Prepare />} />
        <Route path="/start" element={<Start />} />
        <Route path="/match" element={<MatchPage />} />
      </Routes>
    </Router>
  );
};
