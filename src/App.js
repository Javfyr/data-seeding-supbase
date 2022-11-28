import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {useState} from 'react'
// pages
import Home from "./pages/Home"
import CreateCompany from "./pages/CreateCompany"
import CreateCompanyComments from "./pages/CreateCompanyComments"
import CreateInvite from "./pages/CreateInvite"
import CreateUsers from "./pages/CreateUsers"
import Login from "./pages/Login"

function App() {

  return (
    <BrowserRouter>
      <nav>
        <h1>Data Seeding with Supabase</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/createCompany">Create New Company</Link>
        <Link to="/createCompanyComments">Create New Company Comments</Link>
        <Link to="/createInvite">Create Invites</Link>
        <Link to="/createUsers">Create User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createCompany" element={<CreateCompany />} />
        <Route path="/createCompanyComments" element={<CreateCompanyComments />} />
        <Route path="/createInvite" element={<CreateInvite />} />
        <Route path="/createUsers" element={<CreateUsers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
