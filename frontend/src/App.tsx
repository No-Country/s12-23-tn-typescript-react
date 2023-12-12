import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Clients from "./pages/clients/clients";
import Provider from "./pages/providers/provider";
import Products from "./pages/products/products";
import Users from "./pages/users/users";
import ErrorPage from "./pages/notFound/errorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/clients" element={<Clients />} />
        <Route path="/provider" element={<Provider />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
