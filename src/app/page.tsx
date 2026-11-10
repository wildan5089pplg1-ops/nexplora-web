'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#explore", label: "Explore" },
  { href: "#prepare", label: "Prepare" },
  { href: "#connect", label: "Connect" },
  { href: "#program", label: "Program" },
  { href: "#value", label: "Value" },
];

const prepareItems = [
  {
    num: "01",
    title: "Future Education Pathway",
    desc: "Mengeksplorasi pilihan studi, universitas, persyaratan pendaftaran, dan peluang beasiswa.",
    image: "/prepare-pathway.jpg",
    alt: "Future Education Pathway",
  },
  {
    num: "02",
    title: "Global Readiness",
    desc: "Mengembangkan wawasan lintas budaya, kemandirian, komunikasi, dan kemampuan beradaptasi.",
    image: "/prepare-global.jpg",
    alt: "Global Readiness",
  },
  {
    num: "03",
    title: "Study Abroad Preparation",
    desc: "Pendampingan persiapan aplikasi universitas, dokumen, visa, hingga keberangkatan.",
    image: "/prepare-study.jpg",
    alt: "Study Abroad Preparation",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePrepare, setActivePrepare] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(`.${styles.reveal}`);
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.page}>
      {/* ===== HEADER NAVIGATION ===== */}
      <header className={styles.siteHeader}>
        <div className={`${styles.container} ${styles.navBar}`}>
          <a className={styles.brand} href="#home" aria-label="NEXPLORA Home">
            <Image
              src="/nexplora-logo-transparent.png"
              alt="NEXPLORA - Experiential Learning Partner"
              width={160}
              height={55}
              priority
              className={styles.brandLogo}
            />
          </a>

          <button
            type="button"
            className={styles.menuBtn}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Buka navigasi"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className={styles.navCta} href="#contact" onClick={closeMenu}>
              Konsultasi
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className={styles.hero} id="home">
          <div className={`${styles.container} ${styles.heroContent}`}>
            <div className={styles.eyebrow}>Experiential Learning Partner</div>
            <h1>
              Learning goes <em>beyond</em> the classroom.
            </h1>
            <p>
              We turn journeys into meaningful learning experiences through
              real-world exploration, cultural exchange, and educational
              collaboration.
            </p>
            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contact">
                Rencanakan Perjalanan <span>↗</span>
              </a>
              <a className={`${styles.btn} ${styles.btnOutline}`} href="#about">
                Kenali NEXPLORA
              </a>
            </div>
            <div className={styles.heroNote}>
              <div>
                <strong>Since 2015</strong>
                Pengalaman perjalanan edukatif
              </div>
              <div>
                <strong>Global</strong>
                Perspektif dan kolaborasi
              </div>
              <div>
                <strong>Purposeful</strong>
                Belajar dengan tujuan
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className={styles.section} id="about">
          <div className={`${styles.container} ${styles.introGrid}`}>
            <div className={styles.introMedia}>
              <div className={`${styles.introPhoto} ${styles.reveal}`}>
                <div className={styles.photoTag}>
                  Learning first.
                  <br />
                  Destination follows.
                </div>
              </div>
              <div className={`${styles.introPhotoAlt} ${styles.reveal}`} />
            </div>
            <div className={`${styles.introCopy} ${styles.reveal}`}>
              <div className={styles.eyebrow}>About NEXPLORA</div>
              <h2>We are more than a travel provider.</h2>
              <p>
                NEXPLORA adalah mitra pengalaman belajar bagi sekolah, institusi
                pendidikan, siswa, dan keluarga yang ingin menghadirkan
                pembelajaran lebih luas dari ruang kelas.
              </p>
              <p>
                Sebagai unit business dari Fameera Travel, berpengalaman
                menangani international education trip sejak 2015, kami
                merancang program yang menghubungkan peserta didik dengan
                sekolah, universitas, dunia industri, budaya, dan kehidupan
                masyarakat secara langsung.
              </p>
              <ul className={styles.checkList}>
                <li>
                  Learning Goals — tujuan pembelajaran yang ingin dicapai.
                </li>
                <li>
                  Real Experiences — aktivitas dan interaksi yang memberikan
                  pengalaman nyata.
                </li>
                <li>
                  Meaningful Outcomes — wawasan, keterampilan, dan refleksi yang
                  relevan.
                </li>
              </ul>
              <a
                className={`${styles.btn} ${styles.btnPrimary}`}
                href="#program"
              >
                Jelajahi Program ↗
              </a>
            </div>
          </div>
        </section>

        {/* ===== WHY NEXPLORA ===== */}
        <section className={styles.whySection} id="why">
          <div className={styles.whyContainer}>
            <div className={styles.whyImgCol}>
              <div className={styles.whyWaterfallFrame}>
                <Image
                  src="/why.jpg"
                  alt="Rain Vortex Jewel Changi, Singapore"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.whyWaterfallCover}
                />
              </div>
            </div>

            <div className={styles.whyTextCol}>
              <div className={styles.sectionBrandRow}>
                <h2 className={styles.sectionBrandWord}>Why</h2>
                <Image
                  src="/nexplora-logo-transparent.png"
                  alt="Nexplora"
                  width={155}
                  height={50}
                  className={styles.inlineBrandLogo}
                />
              </div>

              <h3 className={styles.whyOrangeHeading}>
                Because Every Journey Should Have a Purpose
              </h3>

              <p className={styles.whyLeadText}>
                Bagi kami, experiential learning bukan sekadar mengajak peserta
                jalan-jalan ke luar negeri. Lebih dari itu, setiap program
                dirancang sebagai sebuah proses belajar yang kontekstual,
                terstruktur, mendalam, dan relevan.
              </p>

              <p className={styles.whyListHeading}>
                4 Hal yang membuat kami berbeda:
              </p>

              <div className={styles.whyPointsStack}>
                <div className={styles.whyPointItem}>
                  <strong>1. Learning-driven Itinerary:</strong> Setiap
                  destinasi, kunjungan, workshop, dan aktivitas memiliki tujuan
                  pembelajaran yang jelas dan relevan bagi peserta didik.
                </div>
                <div className={styles.whyPointItem}>
                  <strong>2. Direct Experience:</strong> Belajar secara langsung
                  dari para praktisi, akademisi, figur inspiratif, komunitas
                  lokal, serta lingkungan baru yang membuka wawasan.
                </div>
                <div className={styles.whyPointItem}>
                  <strong>3. Facilitated Reflection:</strong> Peserta tidak
                  hanya melihat dan mengalami, tetapi diajak untuk
                  merefleksikan, mendiskusikan, dan merangkum pembelajaran yang
                  didapat dalam bentuk portofolio perjalanan.
                </div>
                <div className={styles.whyPointItem}>
                  <strong>4. Designed Around the School:</strong> Jadwal, tema,
                  aktivitas, penginapan, dan durasi program disesuaikan dengan
                  kebutuhan serta nilai-nilai sekolah.
                </div>
              </div>

              <div className={styles.whyCalloutBanner}>
                <p>Not your typical tour. Not your typical travel agent.</p>
                <p>Programs designed around your school.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== EXPLORE ===== */}
        <section className={styles.section} id="explore">
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <div className={styles.eyebrow}>Explore</div>
              <h2>Experience beyond the classroom.</h2>
              <p>
                Memberikan pengalaman belajar melalui perjalanan edukatif di
                Indonesia maupun luar negeri.
              </p>
            </div>
            <div className={styles.programGrid}>
              <article className={`${styles.programCard} ${styles.reveal}`}>
                <div className={`${styles.programImg} ${styles.imgImmersion}`} />
                <div className={styles.programBody}>
                  <small>01 / IMMERSION</small>
                  <h3>Learning Immersion</h3>
                  <p>
                    Pengalaman belajar dan interaksi langsung di sekolah,
                    universitas, dan lingkungan masyarakat setempat.
                  </p>
                </div>
              </article>
              <article className={`${styles.programCard} ${styles.reveal}`}>
                <div className={`${styles.programImg} ${styles.imgJourney}`} />
                <div className={styles.programBody}>
                  <small>02 / THEMATIC</small>
                  <h3>Thematic Learning Journey</h3>
                  <p>
                    Eksplorasi tema budaya, teknologi, bisnis, industri, dan
                    keberlanjutan melalui aktivitas terarah.
                  </p>
                </div>
              </article>
              <article className={`${styles.programCard} ${styles.reveal}`}>
                <div className={`${styles.programImg} ${styles.imgSupport}`} />
                <div className={styles.programBody}>
                  <small>03 / COLLABORATION</small>
                  <h3>Academic Event Support</h3>
                  <p>
                    Pendampingan perjalanan dan koordinasi logistik untuk
                    kompetisi maupun kegiatan akademik internasional.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== PREPARE ===== */}
        <section
          className={`${styles.section} ${styles.sectionPaper}`}
          id="prepare"
        >
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <div className={styles.eyebrow}>Prepare</div>
              <h2>Grow for the future.</h2>
              <p>
                Mendampingi siswa dan orang tua merencanakan jalur pendidikan ke
                luar negeri serta membangun kesiapan menghadapi lingkungan
                global.
              </p>
            </div>

            <div className={styles.prepareShowcase}>
              <div className={`${styles.prepareStage} ${styles.reveal}`}>
                {prepareItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`${styles.prepareSlide} ${
                      activePrepare === index ? styles.prepareSlideActive : ""
                    }`}
                    aria-hidden={activePrepare !== index}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 55vw"
                      className={styles.prepareSlideImg}
                    />
                    <span className={styles.prepareSlideTag}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`${styles.prepareList} ${styles.reveal}`}>
                {prepareItems.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`${styles.prepareItem} ${
                      activePrepare === index ? styles.prepareItemActive : ""
                    }`}
                    onClick={() => setActivePrepare(index)}
                    onMouseEnter={() => setActivePrepare(index)}
                    onFocus={() => setActivePrepare(index)}
                    aria-pressed={activePrepare === index}
                  >
                    <span className={styles.featureIcon}>{item.num}</span>
                    <span className={styles.prepareItemBody}>
                      <span className={styles.prepareItemTitle}>
                        {item.title}
                      </span>
                      <span className={styles.prepareItemDesc}>
                        {item.desc}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONNECT ===== */}
        <section className={`${styles.section} ${styles.dark}`} id="connect">
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <div className={styles.eyebrow}>Connect</div>
              <h2>Build connections across cultures.</h2>
              <p>
                NEXPLORA membantu membuka peluang kolaborasi pendidikan antara
                sekolah dan institusi di Indonesia dengan mitra pendidikan di
                luar negeri.
              </p>
            </div>
            <div className={styles.pillars}>
              <article className={`${styles.pillar} ${styles.reveal}`}>
                <div className={styles.num}>01</div>
                <h3>Student Exchange</h3>
                <p>
                  Pertemuan siswa, berbagi budaya, diskusi lintas budaya, dan
                  kegiatan kolaboratif.
                </p>
              </article>
              <article className={`${styles.pillar} ${styles.reveal}`}>
                <div className={styles.num}>02</div>
                <h3>Teacher Development</h3>
                <p>
                  Pertukaran wawasan praktik pembelajaran dan pengembangan
                  profesional pendidik.
                </p>
              </article>
              <article className={`${styles.pillar} ${styles.reveal}`}>
                <div className={styles.num}>03</div>
                <h3>Sister School Partnership</h3>
                <p>
                  Penjajakan hubungan antarsekolah dan perencanaan agenda
                  kolaborasi.
                </p>
              </article>
              <article className={`${styles.pillar} ${styles.reveal}`}>
                <div className={styles.num}>04</div>
                <h3>Academic Visit</h3>
                <p>
                  Kunjungan ke sekolah atau universitas mitra serta diskusi
                  sistem pendidikan.
                </p>
              </article>
              <article className={`${styles.pillar} ${styles.reveal}`}>
                <div className={styles.num}>05</div>
                <h3>Joint Learning Project</h3>
                <p>
                  Penyusunan proyek bersama, presentasi hasil, dan refleksi
                  pembelajaran.
                </p>
              </article>
              <article className={`${styles.pillar} ${styles.reveal}`}>
                <div className={styles.num}>06</div>
                <h3>Global Collaboration</h3>
                <p>
                  Membangun hubungan berkelanjutan melalui pengalaman dan tujuan
                  bersama.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ===== PROGRAM ===== */}
        <section className={styles.section} id="program">
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <div className={styles.eyebrow}>Programs</div>
              <h2>Learning journeys designed around you.</h2>
              <p>
                Kami merancang perjalanan belajar bermakna yang menghubungkan
                siswa dengan dunia pendidikan, industri, budaya, dan kehidupan
                nyata.
              </p>
            </div>
            <div className={styles.programGrid}>
              <article className={`${styles.programCard} ${styles.reveal}`}>
                <div className={`${styles.programImg} ${styles.imgCard1}`} />
                <div className={styles.programBody}>
                  <small>PROGRAM 01</small>
                  <h3>Learning Immersion</h3>
                  <p>
                    Belajar dan berinteraksi langsung melalui kegiatan akademik,
                    pertukaran budaya, dan pembelajaran kolaboratif.
                  </p>
                </div>
              </article>
              <article className={`${styles.programCard} ${styles.reveal}`}>
                <div className={`${styles.programImg} ${styles.imgCard2}`} />
                <div className={styles.programBody}>
                  <small>PROGRAM 02</small>
                  <h3>Thematic Learning Journey</h3>
                  <p>
                    Perjalanan belajar berbasis tema dengan tujuan belajar yang
                    jelas dan aktivitas yang relevan.
                  </p>
                </div>
              </article>
              <article className={`${styles.programCard} ${styles.reveal}`}>
                <div className={`${styles.programImg} ${styles.imgCard3}`} />
                <div className={styles.programBody}>
                  <small>SUPPORT SERVICE</small>
                  <h3>Academic Event Support</h3>
                  <p>
                    Dukungan koordinasi perjalanan bagi kelompok siswa yang
                    mengikuti kegiatan akademik internasional.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== VALUE ===== */}
        <section
          className={`${styles.section} ${styles.sectionPaper}`}
          id="value"
        >
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <div className={styles.eyebrow}>The value</div>
              <h2>Manfaat nyata bagi siswa, sekolah, dan orang tua.</h2>
              <p>Belajar, berkembang, dan lebih siap menghadapi masa depan.</p>
            </div>
            <div className={styles.valueGrid}>
              <article className={`${styles.valueCard} ${styles.reveal}`}>
                <h3>Untuk Siswa</h3>
                <p>
                  Belajar melalui pengalaman nyata dan memperluas perspektif.
                </p>
                <ul>
                  <li>Memahami materi melalui pengalaman langsung.</li>
                  <li>
                    Mengembangkan kemandirian, komunikasi, dan adaptasi.
                  </li>
                  <li>Mengenal budaya dan peluang studi global.</li>
                </ul>
              </article>
              <article className={`${styles.valueCard} ${styles.reveal}`}>
                <h3>Untuk Sekolah</h3>
                <p>Memperkuat mutu, profil, dan daya saing sekolah.</p>
                <ul>
                  <li>Pengayaan pembelajaran.</li>
                  <li>Penguatan profil dan eksposur global.</li>
                  <li>Dokumentasi praktik dan hasil pembelajaran.</li>
                </ul>
              </article>
              <article className={`${styles.valueCard} ${styles.reveal}`}>
                <h3>Untuk Orang Tua</h3>
                <p>Pengalaman bermakna untuk bekal masa depan anak.</p>
                <ul>
                  <li>Mengenal dunia di luar lingkungan sehari-hari.</li>
                  <li>Mendukung kepercayaan diri dan kedewasaan.</li>
                  <li>Mengenali minat dan pilihan pendidikan.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className={`${styles.section} ${styles.connect}`} id="contact">
          <div className={styles.container}>
            <div className={`${styles.sectionHead} ${styles.reveal}`}>
              <div className={styles.eyebrow}>
                Let&apos;s create the next learning journey
              </div>
              <h2>Start a meaningful journey with NEXPLORA.</h2>
              <p>
                Ceritakan kebutuhan sekolah atau keluarga Anda. Tim kami siap
                membantu merancang pengalaman belajar yang tepat.
              </p>
            </div>
            <div className={styles.contactLine}>
              <a
                className={`${styles.btn} ${styles.btnPrimary}`}
                href="https://wa.me/6281113057890"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp +62 811 1305 7890 ↗
              </a>
              <a
                className={`${styles.btn} ${styles.btnOutline}`}
                href="mailto:info@nexplora.co.id"
              >
                Email NEXPLORA
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>
                <Image
                  src="/nexplora-footer-logo-transparent.png"
                  alt="NEXPLORA - Experiential Learning Partner"
                  width={240}
                  height={100}
                  className={styles.footerLogo}
                />
              </div>
              <p className={styles.footerAbout}>
                Experiential Learning Partner. Purposeful learning, real-world
                exposure, and meaningful connections.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <div className={styles.footerLinks}>
                <a href="#about">About</a>
                <a href="#explore">Explore</a>
                <a href="#prepare">Prepare</a>
                <a href="#connect">Connect</a>
                <a href="#program">Program</a>
                <a href="#value">Value</a>
              </div>
            </div>
            <div>
              <h4>Get in touch</h4>
              <div className={styles.footerLinks}>
                <a href="tel:+6281113057890">+62 811 1305 7890</a>
                <a href="mailto:info@nexplora.co.id">info@nexplora.co.id</a>
                <a href="https://www.nexplora.co.id">www.nexplora.co.id</a>
                <p className={styles.footerAddress}>
                  Bintaro Trade Center Blok C2 No. 21
                  <br />
                  Jl. Jend. Sudirman, Tangerang Selatan, Banten 15224
                </p>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <span>© NEXPLORA • Experiential Learning Partner</span>
            <span>Learning first. Destination follows.</span>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        className={styles.whatsapp}
        href="https://wa.me/6281113057890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
      >
        ✆
      </a>
    </div>
  );
}
