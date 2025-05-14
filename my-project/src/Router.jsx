import { Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./Detail"; // pastikan file ini ada

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Detail" element={<Detail />} />
    </Routes>
  );
}

export default AppRouter;
