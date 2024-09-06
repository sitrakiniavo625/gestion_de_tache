// src/components/SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css'; // Assurez-vous d'importer le fichier CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCalendarAlt, faTachometerAlt, faChartBar, faTasks } from '@fortawesome/free-solid-svg-icons';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-icon" />
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link to="/task-stats">
              <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
              Statistiques 
            </Link>
          </li>
          <li>
            <Link to="/task-management">
              <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
              Gestion de tâches
            </Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        <h1>Bienvenue sur gestion de stock</h1>
        <div className="search-bar">
          <div className="icons">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          </div>
          <input type="text" placeholder="Rechercher..." />
        </div>
        <p>Félicitations ! Votre inscription a été réussie.</p>
      </main>
    </div>
  );
};

export default SuccessPage;
