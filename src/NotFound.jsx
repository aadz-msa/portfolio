import React from 'react';
import { useLocation } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #181824 80%, #a259ff22 100%)',
      color: '#fff',
      fontFamily: 'Zen Dots, Montserrat, Arial, sans-serif',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    }}>
      <h1 style={{
        fontSize: '5rem',
        color: '#a259ff',
        textShadow: '0 0 24px #a259ff, 0 0 48px #a259ff99',
        marginBottom: '1rem',
        fontFamily: 'Zen Dots, Montserrat, Arial, sans-serif'
      }}>404</h1>
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '1.5rem',
        color: '#fff',
        textShadow: '0 0 8px #a259ff88'
      }}>Page Not Found</h2>
      <p style={{
        color: '#bdbdfc',
        marginBottom: '2.5rem',
        fontSize: '1.2rem'
      }}>
        Oops! The page you are looking for does not exist.<br />
        Maybe you took a wrong turn in the multiverse.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        background: '#a259ff',
        color: '#181824',
        borderRadius: '2rem',
        padding: '0.8rem 2.2rem',
        fontSize: '1.1rem',
        fontWeight: 700,
        textDecoration: 'none',
        boxShadow: '0 0 20px #a259ffcc, 0 0 10px #a259ff55',
        transition: 'background 0.2s, color 0.2s',
      }}>Return Home</a>
    </div>
  );
}

export default NotFound;