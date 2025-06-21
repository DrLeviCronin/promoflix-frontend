import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>🎬 Promoflix</h1>
        <p>Earn by watching TikTok, YouTube & Instagram videos!</p>
        <nav>
          <Link to="/">Home</Link> | <Link to="/leaderboard">Leaderboard</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <h2>🏠 Home - Watch videos & earn coins</h2>;
const Leaderboard = () => <h2>🏆 Leaderboard - Top Earners</h2>;
const Login = () => <h2>🔐 Login Page (Coming Soon)</h2>;

export default App;
