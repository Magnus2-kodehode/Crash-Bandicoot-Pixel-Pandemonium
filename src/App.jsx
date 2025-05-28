import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Game from './pages/Game'

export default function App() {
  const base = '/crash-bandicoot-pixel-pandemonium'

  return (
    <Router>
      <Routes>
        <Route path={`${base}`} element={<Game />} />
      </Routes>
    </Router>
  )
}
