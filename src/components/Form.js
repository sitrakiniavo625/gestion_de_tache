// src/components/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialiser useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/success'); // Rediriger vers la page de succès
  };

  return (
 <div class="conta"> 
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Inscription</h2>
      <div className="form-group">
        <label htmlFor="firstName">
          <i className="fas fa-user"></i> Prénom
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">
          <i className="fas fa-user"></i> Nom
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          <i className="fas fa-envelope"></i> Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          <i className="fas fa-lock"></i> Mot de passe
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">
          <i className="fas fa-lock"></i> Confirmation du mot de passe
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
    </div>
  );
};

export default Form;
