import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Camera } from "lucide-react";
import './styles.css';

const photos = [
  { title: 'Wildlife Moment', category: 'Wildlife', src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1400&q=80' },
  { title: 'Quiet Forest', category: 'Nature', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80' },
  { title: 'Golden Landscape', category: 'Travel', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80' },
  { title: 'Bird in Flight', category: 'Wildlife', src: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=1400&q=80' },
  { title: 'Mountain Air', category: 'Nature', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80' },
  { title: 'Street Light', category: 'Future Collection', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80' },
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="overlay" />
        <nav>
          <div className="brand"><Camera size={18} /> MANURA</div>
          <div className="links">
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="heroContent">
          <p className="eyebrow">Nature • Wildlife • Travel</p>
          <h1>MANURA<br /><span>Photography</span></h1>
          <p className="intro">A personal photography portfolio capturing wildlife, landscapes, and quiet moments from the natural world.</p>
          <a className="button" href="#gallery">Explore Gallery</a>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Selected Work</p>
          <h2>Gallery</h2>
        </div>
        <div className="grid">
          {photos.map((photo) => (
            <article className="card" key={photo.title}>
              <img src={photo.src} alt={photo.title} />
              <div className="cardText">
                <span>{photo.category}</span>
                <h3>{photo.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about section">
        <div>
          <p className="eyebrow">About</p>
          <h2>Behind the lens</h2>
        </div>
        <p>I’m Manura, a photography enthusiast focused mainly on nature and wildlife. This portfolio is a place to collect my favorite images from the last several years and share new work as I continue exploring other styles.</p>
      </section>

      <section id="contact" className="contact section">
        <h2>Contact</h2>
        <p>For now, connect with me through email or Instagram. We can add your exact links later.</p>
        <div className="contactLinks">
          <a href="mailto:hello@manuraphotography.com"><Mail size={18} /> hello@manuraphotography.com</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
  Instagram
</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
