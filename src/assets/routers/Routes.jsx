import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar/NavBar";
import{Products} from "../pages/Products";
import {Reports,Reports1,Reports2} from "../pages/Reports"
export function MyRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports />} />
        <Route exact path="/reports/reportsone" element={<Reports1 />} />
        <Route exact path="/reports/reportstwo" element={<Reports2 />} />

      </Routes>
    </BrowserRouter>
  );
}
