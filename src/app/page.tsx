'use client';

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";

interface Hotspot {
  id: number;
  x: number;
  y: number;
  title: string;
  tag: string;
  text: string;
}

interface HeroPerspective {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  location: string;
  expeditionTag: string;
  fieldNotes: string;
  hotspots: Hotspot[];
}

const heroPerspectives: HeroPerspective[] = [
  {
    id: "petronas-landmark",
    tabLabel: "01. Landmark & Engineering",
    title: "Petronas Twin Towers",
    subtitle: "Structural Engineering, Aerodynamics & High-Rise Innovation",
    src: "/petronas-delegation-real.jpg",
    alt: "Nexplora student delegation in front of Petronas Twin Towers, Kuala Lumpur",
    location: "Kuala Lumpur City Centre, Malaysia",
    expeditionTag: "Engineering & Architecture Field Study",
    fieldNotes:
      "Participants observe how Islamic geometric motifs (Rub el Hizb) seamlessly merge with cutting-edge structural engineering, deep pile foundations, and wind-dampening aerodynamics.",
    hotspots: [
      {
        id: 1,
        x: 50,
        y: 16,
        title: "Pinnacle Spire (452m Height)",
        tag: "Structural Design",
        text: "Features 120-meter deep friction-pile foundations engineered to firmly anchor the twin structures against monsoon wind shear.",
      },
      {
        id: 2,
        x: 50,
        y: 36,
        title: "Skybridge Levels 41 & 42",
        tag: "Aerodynamics",
        text: "A double-decker walkway designed to slide in and out of the towers dynamically to prevent structural stress during storm oscillations.",
      },
      {
        id: 3,
        x: 50,
        y: 76,
        title: "Student Delegation & Mentors",
        tag: "Field Collaboration",
        text: "Students conduct active observational sketches, participate in guided Q&A sessions, and document peer learning reflections.",
      },
    ],
  },
  {
    id: "science-lab",
    tabLabel: "02. STEM & Hands-on Lab",
    title: "Petrosains Discovery Centre",
    subtitle: "Interactive Science, Geosciences & Renewable Energy",
    src: "/program-explore.jpg",
    alt: "Hands-on experiential discovery and science exploration",
    location: "Suria KLCC Level 4, Malaysia",
    expeditionTag: "Hands-on Discovery & Workshop",
    fieldNotes:
      "A real-world laboratory where principles of physics, mechanics, and sustainable energy transitions come to life through working simulators and tactile experiments.",
    hotspots: [
      {
        id: 4,
        x: 42,
        y: 35,
        title: "Geology & Energy Simulator",
        tag: "STEM Innovation",
        text: "Interactive simulation mapping subsurface earth formations, fluid dynamics, and clean energy harvesting technologies.",
      },
      {
        id: 5,
        x: 68,
        y: 62,
        title: "Collaborative Team Challenge",
        tag: "Problem Solving",
        text: "Timed group logic and engineering challenges designed to strengthen peer communication and lateral thinking skills.",
      },
    ],
  },
  {
    id: "urban-ecology",
    tabLabel: "03. Urban Ecology & Planning",
    title: "KLCC Park & Sustainable Design",
    subtitle: "A 50-Acre Tropical Canopy in the Heart of the Metropolis",
    src: "/why.jpg",
    alt: "Sustainable urban landscaping and ecosystem integration",
    location: "KLCC Urban Park, Malaysia",
    expeditionTag: "Urban Ecology & Sustainability Study",
    fieldNotes:
      "Analyzing how modern megacities balance high-density commercial real estate with indigenous tropical bio-corridors to mitigate the urban heat island effect.",
    hotspots: [
      {
        id: 6,
        x: 53,
        y: 38,
        title: "Lake Symphony & Bio-Retention",
        tag: "Closed-Loop Water Cycle",
        text: "Natural multi-stage wetland filtration recirculating runoff water for fountain displays and botanical irrigation.",
      },
      {
        id: 7,
        x: 36,
        y: 72,
        title: "Integrated Pedestrian Network",
        tag: "Low-Carbon Mobility",
        text: "Shaded and climate-controlled pedestrian corridors connecting rail transit hubs, academic institutes, and cultural centres.",
      },
    ],
  },
];

interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  category: "Culture" | "Science & Tech" | "Global Exposure" | "Leadership";
  src: string;
  alt: string;
  description: string;
  highlights: string[];
}

const galleryData: GalleryPhoto[] = [
  {
    id: "petronas",
    title: "Petronas Twin Towers & Petrosains",
    subtitle: "Architectural Innovation & Future Technologies",
    location: "Kuala Lumpur, Malaysia",
    category: "Science & Tech",
    src: "/petronas-delegation-real.jpg",
    alt: "Nexplora student group in front of Petronas Twin Towers, Kuala Lumpur",
    description:
      "Students explore the intersection of world-class architectural engineering and interactive science exhibitions, inspiring passion for STEM careers and global sustainable innovation.",
    highlights: ["Structural Engineering Study", "Hands-on Science Center", "Metropolitan Urban Exposure"],
  },
  {
    id: "batu-caves",
    title: "Batu Caves Cultural Heritage Site",
    subtitle: "Cross-Cultural Understanding & Historical Ecology",
    location: "Selangor, Malaysia",
    category: "Culture",
    src: "/batu-caves-real.jpg",
    alt: "ITB Nobel Indonesia International Mobility delegation at Batu Caves, Malaysia",
    description:
      "Direct experiential observation of centuries-old limestone karst formations, diverse community traditions, and historic heritage, cultivating global empathy and mutual respect.",
    highlights: ["Geological & Ethnographic Study", "Multicultural Dialogue", "Global Diversity Reflections"],
  },
  {
    id: "merlion-park",
    title: "Merlion Park & Marina Bay Waterfront",
    subtitle: "Modern City Planning & Smart Nation Infrastructure",
    location: "Singapore",
    category: "Global Exposure",
    src: "/merlion-real.jpg",
    alt: "Fameera Travel educational delegation at Merlion Park, Singapore",
    description:
      "Discovering how Singapore transformed into one of the world's most resilient smart cities through integrated water management, urban greenery, and world-class civic planning.",
    highlights: ["Urban Transformation Insights", "Eco-friendly Civic Infrastructure", "Asia-Pacific University Pathways"],
  },
  {
    id: "jewel-changi",
    title: "Rain Vortex at Jewel Changi",
    subtitle: "Biophilic Design & World-Class Aviation Architecture",
    location: "Changi, Singapore",
    category: "Science & Tech",
    src: "/why.jpg",
    alt: "Rain Vortex at Jewel Changi, Singapore",
    description:
      "The world's tallest indoor waterfall situated within a lush terraced forest canopy, serving as an active classroom for hydraulic engineering, passive cooling, and biophilic architecture.",
    highlights: ["Bioclimatic Geodesic Dome", "Closed-Loop Water Circulation", "Global Hospitality Standards"],
  },
  {
    id: "lake-expedition",
    title: "Wilderness Expedition & Team Dynamics",
    subtitle: "Self-Reliance, Adaptability & Experiential Leadership",
    location: "Natural Lakes & Nature Reserves",
    category: "Leadership",
    src: "/program-explore.jpg",
    alt: "Boating expedition on natural lake - Explore Program",
    description:
      "Challenging participants to adapt to unfamiliar environments, solve team problems collaboratively, and cultivate environmental conservation consciousness.",
    highlights: ["Experiential Leadership Camp", "Real-world Problem Solving", "Ecological Stewardship"],
  },
  {
    id: "bali-delegation",
    title: "Leadership & Cultural Immersion in Bali",
    subtitle: "Community Engagement & Future Pathway Readiness",
    location: "Bali, Indonesia",
    category: "Leadership",
    src: "/program-prepare-bali.jpg",
    alt: "Delegasi kegiatan di Bali - Program Prepare (Grow for the Future)",
    description:
      "Program pendampingan dan orientasi yang memperkuat karakter, jejaring kepemimpinan, serta kesiapan generasi muda dalam merencanakan masa depan.",
    highlights: ["Leadership Immersion", "Cross-Cohort Networking", "Future Pathway Guidance"],
  },
];

const thoughtfulValues = [
  {
    title: "Learning by experience",
    desc: "Programs built around real-world exposure and clear learning goals.",
  },
  {
    title: "Guided planning",
    desc: "Program design tailored to institutional needs and participant profiles.",
  },
  {
    title: "Care and consideration",
    desc: "Safety planning and halal-tourism comfort as described in our approach.",
  },
  {
    title: "Global connections",
    desc: "Opportunities to connect with schools, universities and communities.",
  },
];

const partners = [
  "Universitas Trilogi",
  "UHAMKA",
  "Al Azhar Pusat",
  "Pribadi School",
  "Muhammadiyah Gresik",
];

export default function Home() {
  // ===== HERO INTERACTIVE PHOTO STATES =====
  const [heroPhotoOpen, setHeroPhotoOpen] = useState<boolean>(false);
  const [heroPerspectiveIndex, setHeroPerspectiveIndex] = useState<number>(0);
  const [activeHeroHotspot, setActiveHeroHotspot] = useState<number | null>(null);

  // ===== GALLERY ACCORDION & LIGHTBOX STATES =====
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [galleryFilter, setGalleryFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // ===== PROGRAM EXPANDABLE CARDS STATE =====
  const [expandedPrograms, setExpandedPrograms] = useState<{ [key: string]: boolean }>({
    explore: false,
    prepare: false,
    connect: false,
  });

  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Active hero perspective
  const currentPerspective = heroPerspectives[heroPerspectiveIndex];

  // Filtered gallery items
  const filteredGallery = galleryData.filter((item) =>
    galleryFilter === "All" ? true : item.category === galleryFilter
  );

  // Lightbox handlers
  const openLightboxByIndex = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % galleryData.length));
    }
  }, [lightboxIndex]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! - 1 + galleryData.length) % galleryData.length));
    }
  }, [lightboxIndex]);

  // Keyboard navigation for Lightbox (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxIndex]);

  const toggleProgram = (id: string) => {
    setExpandedPrograms((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activePhoto = lightboxIndex !== null ? galleryData[lightboxIndex] : null;

  return (
    <>
      {/* ===== HEADER NAVIGATION ===== */}
      <header className={styles.nav}>
        <a href="#" className={styles.logoLink} id="logo" aria-label="Nexplora Home">
          <Image
            src="/nexplora-logo-transparent.png"
            alt="Nexplora - Experiential Learning Partner"
            width={175}
            height={62}
            priority
            style={{ width: "auto", height: "52px", objectFit: "contain", display: "block" }}
          />
        </a>

        {/* Desktop Menu */}
        <nav className={styles.menu}>
          <a href="#about" id="nav-about">About</a>
          <a href="#interactive-gallery" id="nav-gallery" className={styles.navHighlight}>
            Gallery ✨
          </a>
          <a href="#why" id="nav-why">Why Us</a>
          <a href="#program" id="nav-program">Program</a>
          <a href="#value" id="nav-value">Value</a>
          <a href="#contact" id="nav-contact">Contact</a>
        </nav>

        <div className={styles.navActions}>
          <a href="#contact" className={styles.cta} id="nav-konsultasi">
            Consultation
          </a>
          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNavList}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#interactive-gallery" onClick={() => setMobileMenuOpen(false)}>Interactive Gallery</a>
            <a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#program" onClick={() => setMobileMenuOpen(false)}>Program</a>
            <a href="#value" onClick={() => setMobileMenuOpen(false)}>Value</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a
              href="https://wa.me/6281113057890"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
            >
              Chat on WhatsApp ↗
            </a>
          </nav>
        </div>
      )}

      <main>
        {/* ===== HERO SECTION WITH TACTILE OPEN/CLOSE FIELD FRAME ===== */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.pulseDot} />
              <span>Experiential Learning Partner Since 2015</span>
            </div>
            <h1>LEARNING GOES BEYOND THE CLASSROOM</h1>
            <p>
              We turn journeys into meaningful learning experiences through
              real-world exploration, cultural exchange, and educational
              collaboration across global borders.
            </p>
            <div className={styles.heroActions}>
              <button
                type="button"
                className={styles.heroBtnPrimary}
                onClick={() => setHeroPhotoOpen(!heroPhotoOpen)}
              >
                {heroPhotoOpen ? "✕ Close Photo Journal" : "📖 Open Field Journal & Perspectives ▾"}
              </button>

              <a href="#interactive-gallery" className={styles.heroBtnSecondary}>
                📸 Explore Gallery
              </a>
            </div>

            <div className={styles.heroPhotoHintText}>
              <span className={styles.sparkleIcon}>✦</span>
              <span>
                {heroPhotoOpen
                  ? "Field journal open: Tap the ✦ hotspot markers on the photo to inspect findings!"
                  : "Click the photo frame to reveal 3 field perspectives & on-site observation notes."}
              </span>
            </div>
          </div>

          {/* ===== THE HERO PHOTO INTERACTIVE FRAME ===== */}
          <div
            className={`${styles.heroFrameContainer} ${heroPhotoOpen ? styles.heroFrameContainerOpen : ""}`}
          >
            {/* Top Toolbar (Perspective Switcher Tabs) - Visible when Open */}
            {heroPhotoOpen && (
              <div className={styles.heroFrameTopBar}>
                <div className={styles.perspectiveTabs}>
                  {heroPerspectives.map((persp, idx) => (
                    <button
                      key={persp.id}
                      type="button"
                      className={`${styles.perspectiveTabBtn} ${heroPerspectiveIndex === idx ? styles.perspectiveTabBtnActive : ""}`}
                      onClick={() => {
                        setHeroPerspectiveIndex(idx);
                        setActiveHeroHotspot(null);
                      }}
                    >
                      {persp.tabLabel}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className={styles.heroFrameClosePill}
                  onClick={() => {
                    setHeroPhotoOpen(false);
                    setActiveHeroHotspot(null);
                  }}
                  title="Close photo frame"
                >
                  ✕ Close
                </button>
              </div>
            )}

            {/* Main Interactive Photo Layer */}
            <div
              className={styles.heroPhotoSurface}
              onClick={() => {
                if (!heroPhotoOpen) {
                  setHeroPhotoOpen(true);
                }
              }}
            >
              <Image
                key={currentPerspective.src}
                src={currentPerspective.src}
                alt={currentPerspective.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.heroPerspectiveImg}
              />

              {/* Shutter / Ambient Vignette Overlay */}
              <div
                className={`${styles.heroApertureOverlay} ${heroPhotoOpen ? styles.heroApertureOpen : ""}`}
              />

              {/* Tag Badge Top Left */}
              <div className={styles.heroFrameLocationTag}>
                <span className={styles.tagIcon}>📍</span>
                <span>{currentPerspective.location}</span>
                <span className={styles.tagDivider}>•</span>
                <span className={styles.tagStatus}>Official Student Delegation</span>
              </div>

              {/* Interactive Hotspots - Active when Frame is OPEN */}
              {heroPhotoOpen &&
                currentPerspective.hotspots.map((spot) => {
                  const isActive = activeHeroHotspot === spot.id;
                  return (
                    <div
                      key={spot.id}
                      className={styles.hotspotAnchor}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveHeroHotspot(isActive ? null : spot.id);
                      }}
                    >
                      {/* Pulsing Hotspot Pin */}
                      <button
                        type="button"
                        className={`${styles.hotspotPin} ${isActive ? styles.hotspotPinActive : ""}`}
                        aria-label={spot.title}
                      >
                        <span className={styles.hotspotPulseRing} />
                        <span className={styles.hotspotIcon}>✦</span>
                      </button>

                      {/* Hotspot Floating Tooltip Card */}
                      {isActive && (
                        <div
                          className={styles.hotspotTooltip}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className={styles.hotspotTooltipHeader}>
                            <span className={styles.hotspotTag}>{spot.tag}</span>
                            <button
                              type="button"
                              className={styles.hotspotCloseX}
                              onClick={() => setActiveHeroHotspot(null)}
                            >
                              ✕
                            </button>
                          </div>
                          <h4 className={styles.hotspotTitle}>{spot.title}</h4>
                          <p className={styles.hotspotDesc}>{spot.text}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* CLOSED STATE: Bottom invitation bar */}
              {!heroPhotoOpen && (
                <div className={styles.heroClosedBanner}>
                  <div className={styles.heroClosedTextGroup}>
                    <strong>{currentPerspective.title}</strong>
                    <span>3 Field Perspectives & Observation Notes</span>
                  </div>
                  <button
                    type="button"
                    className={styles.heroOpenPillBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHeroPhotoOpen(true);
                    }}
                  >
                    <span>Open Journal</span>
                    <span className={styles.heroOpenArrow}>▾</span>
                  </button>
                </div>
              )}
            </div>

            {/* OPEN STATE: Expanded Bottom Journal / Field Sheet Drawer */}
            {heroPhotoOpen && (
              <div className={styles.heroJournalDrawer}>
                <div className={styles.journalMetaRow}>
                  <div>
                    <span className={styles.journalBadge}>{currentPerspective.expeditionTag}</span>
                    <h3 className={styles.journalTitle}>{currentPerspective.title}</h3>
                    <p className={styles.journalSubtitle}>{currentPerspective.subtitle}</p>
                  </div>

                  <div className={styles.journalActionGroup}>
                    <button
                      type="button"
                      className={styles.journalFullscreenBtn}
                      onClick={() => openLightboxByIndex(0)}
                      title="Inspect in full-screen modal"
                    >
                      ⤢ Fullscreen View
                    </button>
                    <button
                      type="button"
                      className={styles.journalCloseBtn}
                      onClick={() => {
                        setHeroPhotoOpen(false);
                        setActiveHeroHotspot(null);
                      }}
                    >
                      ✕ Close Journal
                    </button>
                  </div>
                </div>

                <p className={styles.journalFieldNotesText}>
                  <strong>Field Notes:</strong> {currentPerspective.fieldNotes}
                </p>

                <div className={styles.journalHotspotPrompt}>
                  <span>💡 Touch the <strong>✦</strong> markers on the photo above to examine specific learning takeaways.</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section className={styles.statsBar}>
          <div>
            <strong>2015</strong>
            <span>Experience since</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Core service pillars</span>
          </div>
          <div>
            <strong>Asia + beyond</strong>
            <span>Learning destinations</span>
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section id="about" className={styles.about}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              About
              <Image
                src="/nexplora-logo-transparent.png"
                alt="Nexplora"
                width={160}
                height={56}
                style={{ width: "auto", height: "44px", objectFit: "contain", verticalAlign: "middle", marginLeft: "10px" }}
              />
            </h2>
            <h3 className={styles.aboutSub}>We Are More Than a Travel Provider</h3>
            <p>
              Nexplora adalah mitra pengalaman belajar bagi sekolah, institusi
              pendidikan, siswa, dan keluarga yang ingin menghadirkan pembelajaran
              lebih luas dari ruang kelas.
            </p>
            <p>
              Sebagai Unit Business dari Fameera Travel, telah berpengalaman
              menangani international education trip sejak 2015, kami merancang
              program yang menghubungkan peserta didik dengan sekolah,
              universitas, dunia industri, budaya, dan kehidupan masyarakat secara
              langsung.
            </p>
            <p>Kami membantu menghubungkan tiga hal:</p>
            <ul className={styles.principlesList}>
              <li>
                <strong>Learning Goals</strong> — tujuan pembelajaran yang ingin dicapai.
              </li>
              <li>
                <strong>Real Experiences</strong> — aktivitas dan interaksi yang memberikan pengalaman nyata.
              </li>
              <li>
                <strong>Meaningful Outcomes</strong> — wawasan, keterampilan, dan refleksi yang relevan dengan perkembangan peserta.
              </li>
            </ul>
            <p className={styles.approach}>
              Our approach: <em>Learning first. Destination follows.</em>
            </p>
          </div>

          <div className={styles.aboutImgs}>
            <div
              className={`${styles.photo} ${styles.interactivePhotoWrapper}`}
              onClick={() => openLightboxByIndex(1)}
              title="Click to view Batu Caves in full-screen"
            >
              <Image
                src="/batu-caves-real.jpg"
                alt="ITB Nobel Indonesia delegation at Batu Caves, Malaysia"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.zoomIcon}>🔍</span>
                <span>View Full Photo</span>
              </div>
              <div className={styles.photoCaptionMini}>
                📍 Batu Caves Heritage • Malaysia
              </div>
            </div>

            <div
              className={`${styles.photo} ${styles.interactivePhotoWrapper}`}
              onClick={() => openLightboxByIndex(2)}
              title="Click to view Merlion Park in full-screen"
            >
              <Image
                src="/merlion-real.jpg"
                alt="Fameera Travel delegation at Merlion Park, Singapore"
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
              />
              <div className={styles.imageOverlayBadge}>
                <span className={styles.zoomIcon}>🔍</span>
                <span>View Full Photo</span>
              </div>
              <div className={styles.photoCaptionMini}>
                📍 Merlion Park Exploration • Singapore
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTERACTIVE EXPANDABLE IMAGE GALLERY ===== */}
        <section id="interactive-gallery" className={styles.galleryShowcaseSection}>
          <div className={styles.galleryHeader}>
            <div className={styles.badgeLabel}>INTERACTIVE PHOTO SHOWCASE</div>
            <h2 className={styles.galleryTitle}>
              Educational Journey Gallery
            </h2>
            <p className={styles.gallerySubtitle}>
              Click any image below to <strong>expand and collapse</strong> expedition field stories,
              or select <em>Fullscreen View</em> for high-resolution inspection.
            </p>

            {/* Filter Pills */}
            <div className={styles.filterPills}>
              {["All", "Culture", "Science & Tech", "Global Exposure", "Leadership"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`${styles.filterBtn} ${galleryFilter === filter ? styles.filterBtnActive : ""}`}
                  onClick={() => setGalleryFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Expandable Accordion-Cards Layout */}
          <div className={styles.accordionShowcase}>
            {filteredGallery.map((photo, index) => {
              const isExpanded = activeGalleryIndex === index;
              return (
                <div
                  key={photo.id}
                  className={`${styles.accordionPanel} ${isExpanded ? styles.accordionPanelExpanded : styles.accordionPanelCollapsed}`}
                  onClick={() => setActiveGalleryIndex(index)}
                >
                  <div className={styles.accordionBgImage}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    <div className={styles.accordionOverlay} />
                  </div>

                  {/* Vertical / Collapsed Label */}
                  {!isExpanded && (
                    <div className={styles.collapsedLabel}>
                      <span className={styles.collapsedBadge}>{photo.category}</span>
                      <span className={styles.collapsedTitle}>{photo.title}</span>
                      <span className={styles.collapsedHint}>Click to Expand ▾</span>
                    </div>
                  )}

                  {/* Expanded Content with Interactive Controls */}
                  {isExpanded && (
                    <div className={styles.expandedContent} onClick={(e) => e.stopPropagation()}>
                      <div className={styles.expandedMeta}>
                        <span className={styles.categoryBadge}>{photo.category}</span>
                        <span className={styles.locationBadge}>📍 {photo.location}</span>
                      </div>

                      <h3 className={styles.expandedTitle}>{photo.title}</h3>
                      <h4 className={styles.expandedSubtitle}>{photo.subtitle}</h4>
                      <p className={styles.expandedDesc}>{photo.description}</p>

                      <div className={styles.highlightsBox}>
                        <span className={styles.highlightsTitle}>Key Learning Outcomes:</span>
                        <div className={styles.highlightPills}>
                          {photo.highlights.map((h) => (
                            <span key={h} className={styles.highlightPill}>
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.expandedActions}>
                        <button
                          type="button"
                          className={styles.openFullBtn}
                          onClick={() => {
                            const originalIdx = galleryData.findIndex((g) => g.id === photo.id);
                            openLightboxByIndex(originalIdx);
                          }}
                        >
                          🔍 View Fullscreen Photo
                        </button>

                        <button
                          type="button"
                          className={styles.closeCardBtn}
                          onClick={() => setActiveGalleryIndex(-1)}
                          title="Collapse this photo card"
                        >
                          ✕ Close Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className={styles.accordionTip}>
            💡 <em>Tip: Click any photo card to expand the field narrative, or click "View Fullscreen Photo" for zoom inspection.</em>
          </p>
        </section>

        {/* ===== WHY SECTION ===== */}
        <section id="why" className={styles.why}>
          <div
            className={`${styles.whyImg} ${styles.interactivePhotoWrapper}`}
            onClick={() => openLightboxByIndex(3)}
            title="Click to view Jewel Changi in full-screen"
          >
            <Image
              src="/why.jpg"
              alt="Rain Vortex Jewel Changi, Singapore"
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
            />
            <div className={styles.imageOverlayBadge}>
              <span className={styles.zoomIcon}>🔍</span>
              <span>View Full Photo</span>
            </div>
            <div className={styles.photoCaptionBar}>
              <strong>Jewel Changi Rain Vortex</strong>
              <span>Singapore • Science & Ecological Integration</span>
            </div>
          </div>

          <div className={styles.whyText}>
            <h2 className={styles.aboutTitle}>
              Why
              <Image
                src="/nexplora-logo-transparent.png"
                alt="Nexplora"
                width={160}
                height={56}
                style={{ width: "auto", height: "44px", objectFit: "contain", verticalAlign: "middle", marginLeft: "10px" }}
              />
            </h2>
            <h3 className={styles.aboutSub}>Because Every Journey Should Have a Purpose</h3>
            <p>
              Perjalanan edukatif yang baik bukan sekadar mengunjungi banyak
              tempat. Setiap aktivitas perlu memberikan alasan bagi siswa untuk
              melihat, bertanya, mencoba, berinteraksi, dan memahami.
            </p>
            <p>What makes the experience different?</p>
            <ol className={styles.whyList}>
              {[
                [
                  "Learning with Purpose",
                  "Program dirancang berdasarkan tema dan tujuan pembelajaran, bukan sekadar daftar destinasi.",
                ],
                [
                  "Direct Exposure",
                  "Siswa memperoleh kesempatan untuk melihat lingkungan pendidikan, budaya, dan dunia profesional secara langsung, sesuai program yang dipilih.",
                ],
                [
                  "Active Participation",
                  "Peserta tidak hanya menjadi penonton, tetapi dapat terlibat dalam diskusi, kegiatan sekolah, pertukaran budaya, observasi, dan proyek kolaboratif sesuai program.",
                ],
                [
                  "Designed Around the School",
                  "Tema, durasi, destinasi, dan aktivitas dapat disesuaikan dengan kebutuhan serta karakter peserta didik.",
                ],
              ].map(([t, d], i) => (
                <li key={t}>
                  <span className={styles.whyNum}>0{i + 1}.</span>
                  <span>
                    <strong>{t}</strong>; {d}
                  </span>
                </li>
              ))}
            </ol>
            <p className={styles.whyTagline}>
              Purposeful learning. Real-world exposure. Active participation.
              <br />
              Programs designed around your school.
            </p>
          </div>
        </section>

        {/* ===== PROGRAM SECTION ===== */}
        <section id="program" className={styles.programSection}>
          <div className={styles.programHeader}>
            <div>
              <span className={styles.badgeLabelLight}>OUR EDUCATION PILLARS</span>
              <h2 className={styles.programMainTitle}>Program</h2>
            </div>
            <div className={styles.logoLight}>
              <Image
                src="/nexplora-logo.png"
                alt="Nexplora Logo"
                width={165}
                height={58}
                style={{ width: "auto", height: "46px", objectFit: "contain", background: "#ffffff", borderRadius: "8px", padding: "4px 10px", display: "block" }}
              />
            </div>
          </div>

          <div className={styles.programGrid}>
            {/* PROGRAM 1: EXPLORE */}
            <article className={`${styles.programCard} ${expandedPrograms.explore ? styles.programCardActive : ""}`}>
              <div
                className={`${styles.programImgWrapper} ${styles.interactivePhotoWrapper}`}
                onClick={() => openLightboxByIndex(4)}
                title="View Explore Program Photo"
              >
                <Image
                  src="/program-explore.jpg"
                  alt="Perahu di atas danau alami - Program Explore"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
                <div className={styles.imageOverlayBadge}>
                  <span className={styles.zoomIcon}>🔍</span>
                  <span>View Photo</span>
                </div>
              </div>
              <h3 className={styles.programCardTitle}>EXPLORE</h3>
              <h4 className={styles.programCardSubtitle}>Experience Beyond the Classroom</h4>
              <p className={styles.programCardDesc}>
                Memberikan pengalaman belajar melalui perjalanan edukatif di
                Indonesia maupun luar negeri.
              </p>

              {/* Interactive Open/Close Toggle Button */}
              <button
                type="button"
                className={styles.programToggleBtn}
                onClick={() => toggleProgram("explore")}
              >
                {expandedPrograms.explore ? "▲ Hide Program Details" : "▼ View Curriculum & Activities"}
              </button>

              {/* Collapsible Content */}
              {expandedPrograms.explore && (
                <div className={styles.programExpandContent}>
                  <div className={styles.curriculumTag}>Core Activities:</div>
                  <ul className={styles.curriculumList}>
                    <li>Field Observation & Eco-Science Safari</li>
                    <li>Hands-on Heritage & Local Craft Immersion</li>
                    <li>International School Campus Visits</li>
                    <li>Reflective Journaling & Synthesis</li>
                  </ul>
                  <a href="#contact" className={styles.programCtaLink}>
                    Request Itinerary Proposal ↗
                  </a>
                </div>
              )}
            </article>

            {/* PROGRAM 2: PREPARE */}
            <article className={`${styles.programCard} ${expandedPrograms.prepare ? styles.programCardActive : ""}`}>
              <div
                className={`${styles.programImgWrapper} ${styles.interactivePhotoWrapper}`}
                onClick={() => openLightboxByIndex(5)}
                title="View Prepare Program Photo"
              >
                <Image
                  src="/program-prepare-bali.jpg"
                  alt="Delegasi di Bali - Program Prepare (Grow for the Future)"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
                <div className={styles.imageOverlayBadge}>
                  <span className={styles.zoomIcon}>🔍</span>
                  <span>View Photo</span>
                </div>
              </div>
              <h3 className={styles.programCardTitle}>PREPARE</h3>
              <h4 className={styles.programCardSubtitle}>Grow for the Future</h4>
              <p className={styles.programCardDesc}>
                Mendampingi siswa dan orang tua merencanakan jalur pendidikan ke
                luar negeri.
              </p>

              {/* Interactive Open/Close Toggle Button */}
              <button
                type="button"
                className={styles.programToggleBtn}
                onClick={() => toggleProgram("prepare")}
              >
                {expandedPrograms.prepare ? "▲ Hide Program Details" : "▼ View Curriculum & Activities"}
              </button>

              {/* Collapsible Content */}
              {expandedPrograms.prepare && (
                <div className={styles.programExpandContent}>
                  <div className={styles.curriculumTag}>Integrated Services:</div>
                  <ul className={styles.curriculumList}>
                    <li>Overseas University Preview & Admissions Tour</li>
                    <li>Academic Pathway & Major Profiling</li>
                    <li>Language & Cultural Readiness Sessions</li>
                    <li>Parent-Student Study Abroad Planning</li>
                  </ul>
                  <a href="#contact" className={styles.programCtaLink}>
                    Discuss Overseas Pathways ↗
                  </a>
                </div>
              )}
            </article>

            {/* PROGRAM 3: CONNECT */}
            <article className={`${styles.programCard} ${expandedPrograms.connect ? styles.programCardActive : ""}`}>
              <div
                className={`${styles.programImgWrapper} ${styles.interactivePhotoWrapper}`}
                onClick={() => openLightboxByIndex(2)}
                title="View Connect Program Photo"
              >
                <Image
                  src="/program-connect.jpg"
                  alt="Dua tangan menyatukan puzzle - Program Connect"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                />
                <div className={styles.imageOverlayBadge}>
                  <span className={styles.zoomIcon}>🔍</span>
                  <span>View Photo</span>
                </div>
              </div>
              <h3 className={styles.programCardTitle}>CONNECT</h3>
              <h4 className={styles.programCardSubtitle}>Build Connections Across Cultures</h4>
              <p className={styles.programCardDesc}>
                Membuka peluang kemitraan dan kolaborasi antara institusi
                pendidikan lintas negara.
              </p>

              {/* Interactive Open/Close Toggle Button */}
              <button
                type="button"
                className={styles.programToggleBtn}
                onClick={() => toggleProgram("connect")}
              >
                {expandedPrograms.connect ? "▲ Hide Program Details" : "▼ View Curriculum & Activities"}
              </button>

              {/* Collapsible Content */}
              {expandedPrograms.connect && (
                <div className={styles.programExpandContent}>
                  <div className={styles.curriculumTag}>Partnership Formats:</div>
                  <ul className={styles.curriculumList}>
                    <li>Sister School MoU & Joint Programs</li>
                    <li>Teacher Exchange & Benchmarking Visits</li>
                    <li>Student Delegation & Global Conferences</li>
                    <li>Joint Research & International Forums</li>
                  </ul>
                  <a href="#contact" className={styles.programCtaLink}>
                    Initiate Global Collaboration ↗
                  </a>
                </div>
              )}
            </article>
          </div>
        </section>

        {/* ===== THOUGHTFUL VALUE SECTION ===== */}
        <section id="value" className={styles.thoughtfulSection}>
          <div className={styles.thoughtfulGrid}>
            <div className={styles.thoughtfulLeft}>
              <span className={styles.thoughtfulEyebrow}>
                A THOUGHTFUL PARTNER FOR EVERY STEP
              </span>
              <h2 className={styles.thoughtfulHeading}>
                Purposeful journeys.
                <br />
                Meaningful outcomes.
              </h2>
              <p className={styles.thoughtfulSubtext}>
                Since 2015, NEXPLORA has approached education travel as more
                than a destination—it is an opportunity to learn, grow and connect.
              </p>
            </div>

            <div className={styles.thoughtfulCard}>
              {thoughtfulValues.map((val) => (
                <div key={val.title} className={styles.thoughtfulItem}>
                  <h3 className={styles.thoughtfulItemTitle}>{val.title}</h3>
                  <p className={styles.thoughtfulItemDesc}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PARTNERS SECTION ===== */}
        <section id="partners" className={styles.partnersSection}>
          <div className={styles.partnersHeader}>
            <span className={styles.partnersEyebrow}>
              TRUST BUILT THROUGH EXPERIENCE
            </span>
            <h2 className={styles.partnersHeading}>
              Education partners, growing together.
            </h2>
            <p className={styles.partnersSubtext}>
              Selected institutions featured in the NEXPLORA proposal
            </p>
          </div>

          <div className={styles.partnersStrip}>
            {partners.map((p) => (
              <div key={p} className={styles.partnerItem}>
                <span className={styles.partnerDot}>•</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PATHWAYS SECTION ===== */}
        <section id="pathways" className={styles.pathwaysSection}>
          <div className={styles.pathwaysHeader}>
            <span className={styles.pathwaysEyebrow}>
              A CLEAR NEXT STEP FOR EVERY AUDIENCE
            </span>
            <h2 className={styles.pathwaysHeading}>
              What brings you to NEXPLORA?
            </h2>
            <p className={styles.pathwaysSubtext}>
              Choose the pathway that best matches your goals.
            </p>
          </div>

          <div className={styles.pathwaysGrid}>
            <div className={styles.pathwayCard}>
              <span className={styles.pathwayTag}>FOR SCHOOLS & UNIVERSITIES</span>
              <h3 className={styles.pathwayTitle}>Design an education tour</h3>
              <p className={styles.pathwayDesc}>
                Build a tailored learning program for your students or institution.
              </p>
              <a href="#contact" className={styles.pathwayLink}>
                Request a program proposal ↗
              </a>
            </div>

            <div className={styles.pathwayCard}>
              <span className={styles.pathwayTag}>FOR STUDENTS & PARENTS</span>
              <h3 className={styles.pathwayTitle}>Plan overseas study</h3>
              <p className={styles.pathwayDesc}>
                Explore education pathways and preparation for studying abroad.
              </p>
              <a href="#contact" className={styles.pathwayLink}>
                Discuss study options ↗
              </a>
            </div>

            <div className={`${styles.pathwayCard} ${styles.pathwayCardDark}`}>
              <span className={styles.pathwayTagDark}>FOR INTERNATIONAL PARTNERS</span>
              <h3 className={styles.pathwayTitleDark}>Create global connections</h3>
              <p className={styles.pathwayDescDark}>
                Explore student exchange and educational collaboration opportunities.
              </p>
              <a href="#contact" className={styles.pathwayLinkDark}>
                Start a partnership ↗
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQ & CONVERSATION SECTION ===== */}
        <section id="contact" className={styles.conversationSection}>
          <div className={styles.conversationGrid}>
            <div className={styles.conversationLeft}>
              <span className={styles.conversationEyebrow}>
                LET'S START A CONVERSATION
              </span>
              <h2 className={styles.conversationHeading}>
                Your next journey
                <br />
                starts here.
              </h2>
              <p className={styles.conversationSubtext}>
                Tell us your goals, preferred destination and participant profile.
                <br />
                Our team can help explore a suitable program.
              </p>
              <div className={styles.contactActions}>
                <a
                  href="https://wa.me/6281113057890?text=Hello%20Nexplora,%20I%20would%20like%20to%20consult%20about%20an%20educational%20travel%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.consultationBtn}
                  id="btn-request-consultation"
                >
                  💬 Request a Consultation ↗
                </a>
                <a href="tel:+6281113057890" className={styles.callDirectBtn}>
                  📞 Direct Call
                </a>
              </div>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
              <details className={styles.faqItem} open>
                <summary className={styles.faqQuestion}>
                  <span>Can programs be customized for our school?</span>
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <p className={styles.faqAnswer}>
                  Yes, all educational itineraries, themes, learning objectives,
                  and durations can be tailored specifically to align with your
                  school's curriculum and student profiles.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>What is included in an education tour?</span>
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <p className={styles.faqAnswer}>
                  Our comprehensive package covers institutional visits, workshops,
                  cultural immersions, safe transport, accommodation, guided facilitators,
                  and certified travel insurance.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>How are safety and participant support handled?</span>
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <p className={styles.faqAnswer}>
                  We provide dedicated professional tour managers, 24/7 emergency response
                  protocols, verified safety partners, and halal-friendly dining options.
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>Can NEXPLORA assist with overseas study planning?</span>
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <p className={styles.faqAnswer}>
                  Absolutely. We guide students and parents through destination exploration,
                  campus admissions requirements, visa consultations, and cultural readiness.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* ===== OFFICIAL FOOTER ===== */}
      <footer className={styles.officialFooter}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Image
              src="/nexplora-footer-logo-transparent.png"
              alt="Nexplora - Experiential learning partner"
              width={260}
              height={108}
              style={{ width: "auto", height: "82px", objectFit: "contain", display: "block" }}
            />
          </div>

          <div className={styles.footerContactCol}>
            <h3 className={styles.footerContactTitle}>
              LET&apos;S CREATE THE NEXT LEARNING JOURNEY
            </h3>
            <ul className={styles.footerContactList}>
              <li>
                <a href="tel:+6281113057890" className={styles.contactItemLink}>
                  <span className={styles.contactCircleIcon}>📞</span>
                  <span>+62 811 1305 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nexplora.co.id" className={styles.contactItemLink}>
                  <span className={styles.contactCircleIcon}>✉️</span>
                  <span>info@nexplora.co.id</span>
                </a>
              </li>
              <li className={styles.contactItemAddress}>
                <span className={styles.contactCircleIcon}>📍</span>
                <div>
                  <p>Bintaro Trade Center Blok C2 No. 21</p>
                  <p>Jl. Jend. Sudirman, Tangerang Selatan, Banten 15224</p>
                </div>
              </li>
              <li>
                <a
                  href="https://www.nexplora.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItemLink}
                >
                  <span className={styles.contactCircleIcon}>🌐</span>
                  <span>www.nexplora.co.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <p>© NEXPLORA • Experiential Learning Partner</p>
        </div>
      </footer>

      {/* ===== MODAL / LIGHTBOX INTERAKTIF ===== */}
      {lightboxIndex !== null && activePhoto && (
        <div className={styles.lightboxBackdrop} onClick={closeLightbox}>
          <div
            className={styles.lightboxDialog}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              className={styles.lightboxCloseBtn}
              onClick={closeLightbox}
              title="Close (Esc)"
              aria-label="Close image modal"
            >
              ✕
            </button>

            {/* Navigation Arrows */}
            <button
              type="button"
              className={`${styles.lightboxNavBtn} ${styles.lightboxPrevBtn}`}
              onClick={prevLightbox}
              title="Previous photo (Left Arrow)"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.lightboxNavBtn} ${styles.lightboxNextBtn}`}
              onClick={nextLightbox}
              title="Next photo (Right Arrow)"
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Image Preview Container */}
            <div className={styles.lightboxImgContainer}>
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                className={styles.lightboxImg}
                sizes="(max-width: 1200px) 90vw, 1100px"
              />
            </div>

            {/* Lightbox Information Bar */}
            <div className={styles.lightboxInfoBar}>
              <div className={styles.lightboxHeaderRow}>
                <div>
                  <span className={styles.lightboxBadge}>{activePhoto.category}</span>
                  <span className={styles.lightboxLocation}>📍 {activePhoto.location}</span>
                </div>
                <div className={styles.lightboxCounter}>
                  Photo {lightboxIndex + 1} of {galleryData.length}
                </div>
              </div>

              <h2 className={styles.lightboxTitle}>{activePhoto.title}</h2>
              <p className={styles.lightboxDesc}>{activePhoto.description}</p>

              {/* Thumbnails Strip */}
              <div className={styles.lightboxThumbs}>
                {galleryData.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    type="button"
                    className={`${styles.thumbBtn} ${idx === lightboxIndex ? styles.thumbBtnActive : ""}`}
                    onClick={() => setLightboxIndex(idx)}
                    title={thumb.title}
                  >
                    <Image src={thumb.src} alt={thumb.title} fill sizes="70px" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <aside className={styles.floatingAction}>
        <a
          href="https://wa.me/6281113057890?text=Hello%20Nexplora,%20I%20would%20like%20to%20inquire%20about%20an%20educational%20program"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.floatingWaBtn}
          title="Chat on WhatsApp with Nexplora"
        >
          <span className={styles.floatingWaIcon}>💬</span>
          <span className={styles.floatingWaText}>Quick Inquiry</span>
        </a>
      </aside>
    </>
  );
}
