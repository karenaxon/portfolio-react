import React from "react";
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar(){
  return (
    <header className="bg-slate-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" 
          exact="true"
          className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest">
            Karen Axon
          </NavLink>
          <NavLink to="/about"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white text-2xl">
            About
          </NavLink>
          <NavLink to="/project"
          className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white text-2xl">
            Projects
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/kaxon" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
          <SocialIcon url="https://github.com/karenaxon" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  )
}