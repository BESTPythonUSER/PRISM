"use client";

import React from 'react';
import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: hoverEffect
          ? 'linear-gradient(135deg, #ff7eb3, #ff758c)'
          : 'linear-gradient(135deg, #0070f3, #00d4ff)',
        transition: 'background 0.5s ease',
      }}
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
    >
      <h1 style={{ color: 'white', fontSize: '3rem', textAlign: 'center' }}>
        Welcome to Prism App
      </h1>
      <p style={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }}>
        Adaptive AI Science Learning Platform
      </p>
    </div>
  );
}
