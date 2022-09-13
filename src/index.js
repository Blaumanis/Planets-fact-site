import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Mercury from './pages/Mercury'
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="mercury" element={<Mercury />} />
        <Route path="venus" element={<Venus />} />
        <Route path="earth" element={<Earth />} />
        <Route path="mars" element={<Mars />} />
        <Route path="jupiter" element={<Jupiter />} />
        <Route path="saturn" element={<Saturn />} />
        <Route path="uranus" element={<Uranus />} />
        <Route path="neptune" element={<Neptune />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
