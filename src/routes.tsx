import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MatchPage from './pages/Match'
import Prepare from './pages/Prepare'
import Start from './pages/Start'

export const ApplicationRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prepare />} />
        <Route path="/start" element={<Start />} />
        <Route path="/match" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
