import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../components/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${sticky ? 'sticky' : ''}`}>
        <div className="container-fluid py-3 px-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <div>
              <span>
                <a href="#home" className={`nav ${pathname === '/' ? 'active' : ''}`}>Portofolio</a>
              </span>
            </div>
            <div>
              <ul className={`nav nav-pills collapse navbar-collapse d-lg-flex justify-content-end ${menuOpen ? 'hide' : ''}`} id="navbarNav">
                <li className="nav-item">
                  <a href="#about" className={`nav ${pathname === '#about' ? 'active' : ''}`}>About Me</a>
                </li>
                <li className="nav-item">
                  <a href="#skills" className="nav">Skills</a>
                </li>
                <li className="nav-item">
                  <a href="#education" className="nav">Education</a>
                </li>
                <li className="nav-item">
                  <a href="#experience" className="nav">Experience</a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav">Project & Application</a>
                </li>
              </ul>
              <button className="navbar-toggler d-lg-none" type="button" onClick={toggleMenu}>
                <i className="bi bi-list text-white" style={{ fontSize: 20 }}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`bg-main offcanvas offcanvas-end ${menuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="test offcanvas-header py-3 px-4 d-flex align-items-center justify-content-end">
          <i className="bi bi-x text-white" style={{ fontSize: 20 }} onClick={toggleMenu} aria-label="Close"></i>
        </div>
        <div className="offcanvas-body col gap-4">
          <ul className="navbar-nav justify-content-end flex-grow-1 gap-4">
            <li className="nav-item">
              <a href="#about" className="navi">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="navi">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#education" className="navi">Education</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="navi">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="navi">Project & Application</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
