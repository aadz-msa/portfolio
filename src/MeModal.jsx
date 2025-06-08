import React, { useState } from 'react';
import './App.css';
import profilePic from './assets/profile.jpg';

export default function MeModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: 350, padding: '2rem 1.5rem'}}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="me-profile-pic">
            <img src={profilePic} alt="Aadhithya Mahesh" style={{width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', border: '4px solid #a259ff', boxShadow: '0 0 24px #a259ff88'}} />
          </div>
          <div style={{marginTop: '1.5rem', color: '#fff', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.7}}>
            <strong style={{color: '#a259ff', fontSize: '1.2rem'}}>Nice to meet you!</strong><br/>
            I’m Aadhithya Mahesh,<br/>
            Passionate about coding and creativity.<br/>
            Looking forward to connecting and sharing ideas.
          </div>
        </div>
      </div>
    </div>
  );
}
