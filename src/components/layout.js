import React from "react";
import { Link } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import logo from "../images/logo.png"; // Import logo

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="font-bold flex justify-between items-center bg-yellow-600 lg:px-20 sm:px-6 py-8 text-gray-100">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" /> {/* Logo */}
        </Link>
        <ul className="flex space-x-10 ml-auto">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
