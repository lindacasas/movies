import React from 'react';
import { Link } from 'react-router-dom';
import netflixLogo from '../assets/logo-netflix.svg';
import searchIcon from '../assets/search.svg';

const Header = ({ onSearch }) => {
  return (
    <header className="container-header">
      <nav className="navigation">
        <section className="navigation-menu">
          <div id="nav-logo" className="navigation-logo">
            <Link to="/">
              <img id="netflix-logo" className="logo" src={netflixLogo} alt="logo de netflix" />
            </Link>
          </div>
          <div className="navigation-links">
            <ul className="link-list">
              <li className="link-item"><Link className="link-content" to="/?filter=top3">Top 3</Link></li>
              <li className="link-item"><Link className="link-content" to="/?sort=date">Ordenar por fecha</Link></li>
              <li className="link-item"><Link className="link-content" to="/?sort=title">Ordenar por titulo</Link></li>
            </ul>
          </div>
        </section>
        <section className="navigation-search">
          <form id="navigation-form">
            <div className="form-group">
              <img className="search-icon" src={searchIcon} alt="search" />
              <input 
                type="search" 
                id="search-text" 
                className="form-control" 
                placeholder="search netflix" 
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </form>
        </section>
      </nav>
    </header>
  );
};

export default Header;