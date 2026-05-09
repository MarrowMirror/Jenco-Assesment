import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import IndustryPage from '../pages/IndustryPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/construction" replace />} />
        <Route path="/:industry" element={<IndustryPage />} />
        <Route path="*" element={<Navigate to="/construction" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
