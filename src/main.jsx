import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const photos = [
  { title: "Wildlife Moment", category: "Wildlife", src: "/photos/wildlife/wildlife-1.jpg", alt: "Wildlife photograph" },
  { title: "Bird in Flight", category: "Wildlife", src: "/photos/wildlife/wildlife-2.jpg", alt: "Bird in flight" },
  { title: "Quiet Forest", category: "Nature", src: "/photos/nature/nature-1.jpg", alt: "Quiet forest" },
  { title: "Morning Light", category: "Nature", src: "/photos/nature/nature-2.jpg", alt: "Morning light in nature" },
  { title: "Golden Landscape", category: "Landscapes", src: "/photos/landscapes/landscape-1.jpg", alt: "Golden landscape" },
  { title: "Open Horizon", category: "Landscapes", src: "/photos/landscapes/landscape-2.jpg", alt: "Open horizon" },
  { title: "Travel Story", category: "Travel", src: "/photos/travel/travel-1.jpg", alt: "Travel photograph" },
  { title: "Portrait Study", category: "Portraits", src: "/photos/portraits/portrait-1.jpg", alt: "Portrait photograph" }
];

const categories = ["All", "Wildlife", "Nature", "Landscapes", "Travel", "Portraits"];

function CameraMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 5.5 10 3.5h4l1.5 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h3.5Zm3.5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    </svg>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visiblePhotos = useMemo(
    () => activeCategory === "All" ? photos : photos.filter((photo) => photo.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#home" aria-label="MANURA Photography home">
          <span className="brandIcon"><CameraMark /></span><span>MANURA</span>
        </a>
        <button className="menuButton" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav navOpen" : "nav"}>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroBackdrop" aria-hidden="true" />
          <div className="heroContent">
            <p className="eyebrow">Nature · Wildlife · Portraits · Travel</p>
            <h1><span>MANURA</span><span className="heroThin">Photography</span></h1>
            <p className="heroCopy">A personal photography portfolio capturing wildlife, landscapes, people and quiet moments from the world around us.</p>
            <a className="primaryButton" href="#gallery">Explore Gallery</a>
          </div>
          <div className="scrollCue" aria-hidden="true"><span>Scroll</span><i /></div>
        </section>

        <section id="gallery" className="section gallerySection">
          <div className="sectionHeading singleHeading">
            <div><p className="eyebrow">Selected work</p><h2>Gallery</h2></div>
          </div>

          <div className="filters" aria-label="Photo categories">
            {categories.map((category) => (
              <button key={category} type="button" className={activeCategory === category ? "filter activeFilter" : "filter"} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>

          <div className="photoGrid">
            {visiblePhotos.map((photo, index) => (
              <button key={`${photo.category}-${photo.title}`} className={`photoCard photoCard${(index % 4) + 1}`} type="button" onClick={() => setSelectedPhoto(photo)}>
                <img src={photo.src} alt={photo.alt} loading="lazy" onError={(event) => { event.currentTarget.style.opacity = "0"; }} />
                <div className="photoFallback"><span>{photo.category}</span><strong>Add your photo</strong><small>{photo.src}</small></div>
                <div className="photoMeta"><span>{photo.category}</span><strong>{photo.title}</strong></div>
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <div className="aboutTitle"><p className="eyebrow">Behind the lens</p><h2>Photography shaped by patience, curiosity and place.</h2></div>
          <div className="aboutCopy">
            <p>I’m Manura, a photographer focused on nature and wildlife, with a growing interest in portraits, travel and human stories.</p>
            <p>This portfolio brings together work captured over the past several years. The goal is simple: preserve meaningful moments and present them without distraction.</p>
            <dl className="aboutFacts">
              <div><dt>Based in</dt><dd>United States</dd></div>
              {/* <div><dt>Originally from</dt><dd>Sri Lanka</dd></div>
              <div><dt>Camera</dt><dd>Canon R6 Mark II</dd></div> */}
            </dl>
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <p className="eyebrow">Contact</p><h2>Let’s stay connected.</h2>
          <p>Follow my journey and get in touch.</p>
          <div className="contactLinks"><a href="mailto:hello@manuraphotography.com">Email</a><a href="https://www.instagram.com/framesbymanura/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} MANURA Photography</span><a href="#home">Back to top</a></footer>

      {selectedPhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedPhoto.title}>
          <button type="button" className="closeButton" aria-label="Close image" onClick={() => setSelectedPhoto(null)}>×</button>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
          <div className="lightboxCaption"><span>{selectedPhoto.category}</span><strong>{selectedPhoto.title}</strong></div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
