'use client';

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* ===== HEADER NAVIGATION ===== */}
      <header className={styles.nav}>
        <a href="#" className={styles.logoLink} id="logo" aria-label="Nexplora Home">
          <Image
            src="/nexplora-logo-transparent.png"
            alt="Nexplora - Experiential Learning Partner"
            width={180}
            height={62}
            priority
            className={styles.headerLogoImg}
          />
        </a>

        {/* Desktop Menu */}
        <nav className={styles.menu}>
          <a href="#about" id="nav-about">About</a>
          <a href="#program" id="nav-program">Program</a>
          <a href="#value" id="nav-value">Value</a>
          <a href="#contact" id="nav-contact">Contact</a>
        </nav>

        <div className={styles.navActions}>
          <a
            href="https://wa.me/6281113057890?text=Halo%20Nexplora,%20saya%20tertarik%20untuk%20konsultasi%20program%20edukasi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.konsultasiPillBtn}
            id="nav-konsultasi"
          >
            Konsultasi
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
            <a href="#program" onClick={() => setMobileMenuOpen(false)}>Program</a>
            <a href="#value" onClick={() => setMobileMenuOpen(false)}>Value</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a
              href="https://wa.me/6281113057890?text=Halo%20Nexplora,%20saya%20tertarik%20untuk%20konsultasi%20program%20edukasi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
            >
              Konsultasi WhatsApp ↗
            </a>
          </nav>
        </div>
      )}

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroTextCol}>
              <h1 className={styles.heroMainTitle}>
                LEARNING GOES<br />
                BEYOND THE<br />
                CLASSROOM
              </h1>
              <p className={styles.heroSubtitle}>
                We turn journeys into meaningful learning experiences through real-world exploration, cultural exchange, and educational collaboration.
              </p>
            </div>

            <div className={styles.heroImgCol}>
              <div className={styles.heroImgFrame}>
                <Image
                  src="/petronas-delegation-real.jpg"
                  alt="Nexplora student delegation in front of Petronas Twin Towers, Kuala Lumpur"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.heroImgCover}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutTextCol}>
              <div className={styles.sectionBrandRow}>
                <h2 className={styles.sectionBrandWord}>About</h2>
                <Image
                  src="/nexplora-logo-transparent.png"
                  alt="Nexplora"
                  width={155}
                  height={50}
                  className={styles.inlineBrandLogo}
                />
              </div>

              <h3 className={styles.aboutOrangeHeading}>
                We Are More Than a Travel Provider
              </h3>

              <p className={styles.aboutLeadText}>
                NEXPLORA adalah penyedia program experiential learning berbasis studi luar negeri (study tour/field trip) yang didirikan untuk memperluas cakrawala pendidikan generasi muda.
              </p>

              <p className={styles.aboutDescText}>
                Dengan pengalaman bertahun-tahun di bidang ini, kami telah memfasilitasi berbagai institusi pendidikan mulai dari sekolah dasar hingga perguruan tinggi dengan program-program yang komprehensif, mencakup aspek akademik, kebudayaan, kepemimpinan, dan sosial.
              </p>

              <p className={styles.aboutFocusHeader}>
                Fokus utama dalam setiap program kami mencakup:
              </p>
              <ul className={styles.aboutFocusList}>
                <li>
                  <strong>• Learning Objectives:</strong> Program dirancang untuk menjawab tujuan pembelajaran institusi.
                </li>
                <li>
                  <strong>• Rich Experiences:</strong> Kolaborasi dengan institusi, universitas, dan komunitas lokal terkemuka di destinasi.
                </li>
                <li>
                  <strong>• Meaningful Outcomes:</strong> Memastikan setiap peserta memperoleh wawasan, relasi, dan perspektif global yang berguna bagi masa depannya.
                </li>
              </ul>

              <div className={styles.aboutApproachBox}>
                <span>Our approach: Learning first, destination follows.</span>
              </div>
            </div>

            <div className={styles.aboutImgCol}>
              <div className={styles.aboutPhotoCard}>
                <Image
                  src="/batu-caves-real.jpg"
                  alt="Delegasi Nexplora di Batu Caves, Malaysia"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.aboutPhotoCover}
                />
              </div>
              <div className={styles.aboutPhotoCard}>
                <Image
                  src="/merlion-real.jpg"
                  alt="Delegasi Nexplora di Merlion Park, Singapore"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.aboutPhotoCover}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY SECTION ===== */}
        <section id="why" className={styles.whySection}>
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
                Bagi kami, experiential learning bukan sekadar mengajak peserta jalan-jalan ke luar negeri. Lebih dari itu, setiap program dirancang sebagai sebuah proses belajar yang kontekstual, terstruktur, mendalam, dan relevan.
              </p>

              <p className={styles.whyListHeading}>
                4 Hal yang membuat kami berbeda:
              </p>

              <div className={styles.whyPointsStack}>
                <div className={styles.whyPointItem}>
                  <strong>1. Learning-driven Itinerary:</strong> Setiap destinasi, kunjungan, workshop, dan aktivitas memiliki tujuan pembelajaran yang jelas dan relevan bagi peserta didik.
                </div>
                <div className={styles.whyPointItem}>
                  <strong>2. Direct Experience:</strong> Belajar secara langsung dari para praktisi, akademisi, figur inspiratif, komunitas lokal, serta lingkungan baru yang membuka wawasan.
                </div>
                <div className={styles.whyPointItem}>
                  <strong>3. Facilitated Reflection:</strong> Peserta tidak hanya melihat dan mengalami, tetapi diajak untuk merefleksikan, mendiskusikan, dan merangkum pembelajaran yang didapat dalam bentuk portofolio perjalanan.
                </div>
                <div className={styles.whyPointItem}>
                  <strong>4. Designed Around the School:</strong> Jadwal, tema, aktivitas, penginapan, dan durasi program disesuaikan dengan kebutuhan serta nilai-nilai sekolah.
                </div>
              </div>

              <div className={styles.whyCalloutBanner}>
                <p>Not your typical tour. Not your typical travel agent.</p>
                <p>Programs designed around your school.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAM OVERVIEW BAR ===== */}
        <section id="program" className={styles.programBarSection}>
          <div className={styles.programBarContainer}>
            <div className={styles.programBarHeader}>
              <h2 className={styles.programBarTitle}>
                <span className={styles.programWordCyan}>Program</span>
                <Image
                  src="/nexplora-logo-transparent.png"
                  alt="Nexplora"
                  width={160}
                  height={50}
                  className={styles.inlineProgramLogo}
                />
              </h2>
            </div>

            <div className={styles.programPillarsGrid}>
              {/* Card 1: EXPLORE */}
              <a href="#explore-detail" className={styles.programPillarCard}>
                <div className={styles.programPillarImgWrapper}>
                  <Image
                    src="/program-explore.jpg"
                    alt="Perahu di atas danau alami - Program Explore"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.programPillarImg}
                  />
                </div>
                <h3 className={styles.programPillarTitle}>EXPLORE</h3>
                <h4 className={styles.programPillarSub}>Experience Beyond the Classroom</h4>
                <p className={styles.programPillarDesc}>
                  Memberikan pengalaman belajar melalui perjalanan edukatif di Indonesia maupun luar negeri.
                </p>
              </a>

              {/* Card 2: PREPARE */}
              <a href="#prepare-detail" className={styles.programPillarCard}>
                <div className={styles.programPillarImgWrapper}>
                  <Image
                    src="/program-prepare.jpg"
                    alt="Analisis dan persiapan studi - Program Prepare"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.programPillarImg}
                  />
                </div>
                <h3 className={styles.programPillarTitle}>PREPARE</h3>
                <h4 className={styles.programPillarSub}>Grow for the Future</h4>
                <p className={styles.programPillarDesc}>
                  Mendampingi siswa dan orang tua merencanakan jalur pendidikan ke luar negeri.
                </p>
              </a>

              {/* Card 3: CONNECT */}
              <a href="#connect-detail" className={styles.programPillarCard}>
                <div className={styles.programPillarImgWrapper}>
                  <Image
                    src="/program-connect.jpg"
                    alt="Dua tangan menyatukan puzzle - Program Connect"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.programPillarImg}
                  />
                </div>
                <h3 className={styles.programPillarTitle}>CONNECT</h3>
                <h4 className={styles.programPillarSub}>Build Connections Across Cultures</h4>
                <p className={styles.programPillarDesc}>
                  Membuka peluang kemitraan dan kolaborasi antara institusi pendidikan lintas negara.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ===== 1. EXPLORE DETAIL SECTION ===== */}
        <section id="explore-detail" className={styles.exploreDetailSection}>
          <div className={styles.detailContainer}>
            <div className={styles.detailHeaderSplit}>
              <div>
                <h2 className={styles.detailMainOrangeTitle}>EXPLORE</h2>
                <h3 className={styles.detailDarkSubtitle}>Experience Beyond the Classroom</h3>
              </div>
              <div className={styles.detailLogoHolder}>
                <Image
                  src="/nexplora-logo-transparent.png"
                  alt="Nexplora"
                  width={150}
                  height={48}
                  className={styles.detailHeaderLogo}
                />
              </div>
            </div>

            <p className={styles.exploreLeadDesc}>
              Paket dirancang sebagai sebuah program perjalanan edukasi yang menghubungkan pembelajaran di kelas dengan observasi, eksplorasi, dan interaksi langsung.
            </p>

            <div className={styles.exploreRowsStack}>
              {/* Row 1 */}
              <div className={styles.exploreRowItem}>
                <div className={styles.exploreRowImgCol}>
                  <Image
                    src="/explore-immersion.jpg"
                    alt="Learning Immersion - Water ripple effect"
                    fill
                    sizes="(max-width: 900px) 100vw, 35vw"
                    className={styles.exploreRowImgCover}
                  />
                </div>
                <div className={styles.exploreRowTextCol}>
                  <h4 className={styles.exploreRowNumHeading}>01 — Learning Immersion</h4>
                  <h5 className={styles.exploreRowSubHeading}>Pengalaman Belajar dan Interaksi Langsung</h5>
                  <p className={styles.exploreRowBodyText}>
                    Aktivitas dirancang agar peserta dapat merasakan langsung pengalaman belajar di setiap universitas, lembaga riset, komunitas masyarakat setempat melalui: hands-on workshop, pendampingan, diskusi, serta pembelajaran lapangan aktif.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className={styles.exploreRowItem}>
                <div className={styles.exploreRowImgCol}>
                  <Image
                    src="/explore-journey.jpg"
                    alt="Thematic Learning Journey - Winding road across lush hills"
                    fill
                    sizes="(max-width: 900px) 100vw, 35vw"
                    className={styles.exploreRowImgCover}
                  />
                </div>
                <div className={styles.exploreRowTextCol}>
                  <h4 className={styles.exploreRowNumHeading}>02 — Thematic Learning Journey</h4>
                  <h5 className={styles.exploreRowSubHeading}>Perjalanan Belajar Berbasis Tema</h5>
                  <p className={styles.exploreRowBodyText}>
                    Mengajak siswa mengeksplorasi berbagai tema pembelajaran, seperti budaya, teknologi, bisnis, inovasi, dan keberlanjutan melalui kunjungan dan aktivitas yang dirancang dengan tujuan belajar yang jelas.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className={styles.exploreRowItem}>
                <div className={styles.exploreRowImgCol}>
                  <Image
                    src="/explore-support.jpg"
                    alt="Academic Event Support - Team collaboration"
                    fill
                    sizes="(max-width: 900px) 100vw, 35vw"
                    className={styles.exploreRowImgCover}
                  />
                </div>
                <div className={styles.exploreRowTextCol}>
                  <h4 className={styles.exploreRowNumHeading}>Layanan Pendukung — Academic Event Support</h4>
                  <h5 className={styles.exploreRowSubHeading}>Mendampingi delegasi dalam berpartisipasi dalam:</h5>
                  <p className={styles.exploreRowBodyText}>
                    Memberikan pendampingan menyeluruh bagi delegasi sekolah dalam berbagai program internasional, mulai dari akomodasi, transportasi, asuransi perjalanan, hingga bimbingan selama di luar negeri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. PREPARE DETAIL SECTION ===== */}
        <section id="prepare-detail" className={styles.prepareDetailSection}>
          <div className={styles.detailContainer}>
            <div className={styles.detailHeaderSplit}>
              <div>
                <h2 className={styles.detailMainOrangeTitle}>PREPARE</h2>
                <h3 className={styles.detailDarkSubtitle}>Grow for the Future</h3>
              </div>
              <div className={styles.detailLogoHolder}>
                <Image
                  src="/nexplora-logo-transparent.png"
                  alt="Nexplora"
                  width={150}
                  height={48}
                  className={styles.detailHeaderLogo}
                />
              </div>
            </div>

            <div className={styles.prepareCardsGrid}>
              {/* Card 1 */}
              <div className={styles.prepareDarkCard}>
                <div className={styles.prepareWhiteImgFrame}>
                  <Image
                    src="/prepare-pathway.jpg"
                    alt="Future Education Pathway - Graduation cap with coins and books"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.prepareCardImg}
                  />
                </div>
                <h4 className={styles.prepareCardOrangeTitle}>01. FUTURE EDUCATION PATHWAY</h4>
                <h5 className={styles.prepareCardCyanSub}>Perencanaan Pendidikan Masa Depan</h5>
                <p className={styles.prepareCardDesc}>
                  Memberikan wawasan komprehensif mengenai pilihan studi lanjutan, sistem seleksi masuk universitas global, pemetaan minat dan bakat, serta persiapan profil akademik siswa sejak dini.
                </p>
              </div>

              {/* Card 2: STUDY ABROAD PREPARATION */}
              <div className={styles.prepareDarkCard}>
                <div className={styles.prepareWhiteImgFrame}>
                  <Image
                    src="/prepare-study.jpg"
                    alt="Study Abroad Preparation - Student desk with application papers"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.prepareCardImg}
                  />
                </div>
                <h4 className={styles.prepareCardOrangeTitle}>03. STUDY ABROAD PREPARATION</h4>
                <h5 className={styles.prepareCardCyanSub}>Persiapan Studi ke Luar Negeri</h5>
                <p className={styles.prepareCardDesc}>
                  Pelatihan intensif bahasa, adaptasi budaya, penulisan essay dan personal statement, persiapan visa pelajar, hingga pembekalan kemandirian hidup di luar negeri.
                </p>
              </div>

              {/* Card 3: GLOBAL READINESS */}
              <div className={styles.prepareDarkCard}>
                <div className={styles.prepareWhiteImgFrame}>
                  <Image
                    src="/prepare-global.jpg"
                    alt="Global Readiness - International network connectivity map"
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                    className={styles.prepareCardImg}
                  />
                </div>
                <h4 className={styles.prepareCardOrangeTitle}>02. GLOBAL READINESS</h4>
                <h5 className={styles.prepareCardCyanSub}>Kesiapan Menghadapi Dunia Global</h5>
                <p className={styles.prepareCardDesc}>
                  Membangun karakter global, kepemimpinan, kemampuan adaptasi lintas budaya, serta pemahaman isu-isu dunia terkini untuk mencetak generasi yang berdaya saing internasional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. CONNECT DETAIL SECTION ===== */}
        <section id="connect-detail" className={styles.connectSection}>
          <div className={styles.connectContainer}>
            <div className={styles.connectHeader}>
              <h2 className={styles.connectOrangeEyebrow}>CONNECT</h2>
              <h3 className={styles.connectCyanHeading}>Build Connections Across Cultures</h3>
              <p className={styles.connectLeadText}>
                NEXPLORA membantu membuka jejaring pendidikan internasional antara institusi pendidikan di Indonesia dengan institusi pendidikan di luar negeri.
              </p>
            </div>

            <div className={styles.connectColumnsGrid}>
              {/* Column 1: STUDENT EXCHANGE */}
              <div className={styles.connectColumnCard}>
                <div className={`${styles.hexBadgeWrapper} ${styles.hexRedBorder}`}>
                  <span className={styles.hexNumber}>01</span>
                  <span className={styles.hexLabel}>STUDENT<br />EXCHANGE</span>
                </div>
                <ul className={styles.connectBulletList}>
                  <li>• Pertukaran pelajar antar sekolah / universitas</li>
                  <li>• Learning buddies & student exchange program</li>
                  <li>• Program homestay & cultural immersion</li>
                  <li>• Short semester course di universitas mitra</li>
                </ul>
              </div>

              {/* Column 2: TEACHER DEVELOPMENT */}
              <div className={styles.connectColumnCard}>
                <div className={`${styles.hexBadgeWrapper} ${styles.hexOrangeBorder}`}>
                  <span className={styles.hexNumber}>02</span>
                  <span className={styles.hexLabel}>TEACHER<br />DEVELOPMENT</span>
                </div>
                <ul className={styles.connectBulletList}>
                  <li>• Pelatihan & workshop pedagogik untuk guru dan staf</li>
                  <li>• Observasi kelas & benchmarking metode pembelajaran global</li>
                  <li>• Short-term professional course untuk guru di luar negeri</li>
                </ul>
              </div>

              {/* Column 3: SISTER SCHOOL PARTNERSHIP */}
              <div className={styles.connectColumnCard}>
                <div className={`${styles.hexBadgeWrapper} ${styles.hexPurpleBorder}`}>
                  <span className={styles.hexNumber}>03</span>
                  <span className={styles.hexLabel}>SISTER SCHOOL<br />PARTNERSHIP</span>
                </div>
                <ul className={styles.connectBulletList}>
                  <li>• Perjanjian kemitraan antarsekolah (MoU) di luar negeri</li>
                  <li>• Pertukaran kurikulum & materi pembelajaran</li>
                  <li>• Program kolaborasi tahunan antarsekolah mitra</li>
                </ul>
              </div>

              {/* Column 4: ACADEMIC VISIT */}
              <div className={styles.connectColumnCard}>
                <div className={`${styles.hexBadgeWrapper} ${styles.hexGreenBorder}`}>
                  <span className={styles.hexNumber}>04</span>
                  <span className={styles.hexLabel}>ACADEMIC<br />VISIT</span>
                </div>
                <ul className={styles.connectBulletList}>
                  <li>• Kunjungan ke universitas dan institusi riset kelas dunia</li>
                  <li>• Diskusi dengan profesor & mahasiswa untuk studi lanjut</li>
                  <li>• Pengenalan sistem perkuliahan luar negeri</li>
                </ul>
              </div>

              {/* Column 5: JOINT LEARNING PROJECT */}
              <div className={styles.connectColumnCard}>
                <div className={`${styles.hexBadgeWrapper} ${styles.hexBlueBorder}`}>
                  <span className={styles.hexNumber}>05</span>
                  <span className={styles.hexLabel}>JOINT LEARNING<br />PROJECT</span>
                </div>
                <ul className={styles.connectBulletList}>
                  <li>• Riset kolaboratif antara siswa antardua negara</li>
                  <li>• Konferensi & presentasi proyek bersama</li>
                  <li>• Publikasi hasil riset dalam bentuk buku atau jurnal</li>
                </ul>
              </div>
            </div>

            <div className={styles.connectBottomBanner}>
              <span>Connecting institutions, empowering generation for a brighter global future.</span>
            </div>
          </div>
        </section>

        {/* ===== 4. THE VALUE SECTION ===== */}
        <section id="value" className={styles.theValueSection}>
          <div className={styles.valueContainer}>
            <div className={styles.valueHeader}>
              <h2 className={styles.valueOrangeTitle}>THE VALUE</h2>
              <h3 className={styles.valueDarkSubtitle}>Manfaat Nyata untuk Siswa, Sekolah, dan Orang Tua</h3>
            </div>

            <div className={styles.valueContentSplit}>
              <div className={styles.valueBooksCol}>
                <div className={styles.valueBooksFrame}>
                  <Image
                    src="/the-value-books.jpg"
                    alt="Tangga menuju topi sarjana di atas tumpukan buku pendidikan - The Value Nexplora"
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className={styles.valueBooksCover}
                  />
                </div>
              </div>

              <div className={styles.valueDetailsCol}>
                {/* Block 1: Untuk Siswa */}
                <div className={styles.valueBenefitBlock}>
                  <h4 className={styles.valueBenefitTitle}>
                    Membantu Siswa Berkembang dan Lebih Siap Menghadapi Masa Depan:
                  </h4>
                  <ul className={styles.valueBenefitList}>
                    <li>• Menumbuhkan kemandirian dan rasa percaya diri siswa</li>
                    <li>• Mengembangkan keterampilan komunikasi dan kemampuan beradaptasi</li>
                    <li>• Mengenal budaya, lingkungan pendidikan, dan peluang studi di tingkat global</li>
                  </ul>
                </div>

                {/* Block 2: Untuk Sekolah */}
                <div className={styles.valueBenefitBlock}>
                  <h4 className={styles.valueBenefitTitle}>
                    Bagi Sekolah & Mitra, kami mendampingi dalam:
                  </h4>
                  <ul className={styles.valueBenefitList}>
                    <li>• Perancangan kurikulum studi perjalanan yang relevan dengan kebutuhan pembelajaran serta target pendidikan institusi</li>
                    <li>• Menjalin kerja sama yang bermakna dan berkelanjutan melalui program sekolah, universitas global, serta komunitas internasional</li>
                    <li>• Dokumentasi proses pembelajaran melalui buku dokumentasi kegiatan, foto, project, dan video dokumenter yang dapat dimanfaatkan sekolah sebagai bukti pembelajaran serta modul dan portofolio promosi sekolah dengan outcome yang terukur.</li>
                  </ul>
                </div>

                {/* Block 3: Untuk Orang Tua */}
                <div className={styles.valueBenefitBlock}>
                  <h4 className={styles.valueBenefitTitle}>
                    Bagi Orang Tua, memberi kepastian dan ketenangan hati:
                  </h4>
                  <ul className={styles.valueBenefitList}>
                    <li>• Memberikan pemantauan berkala mengenai aktivitas dan kondisi putra-putri</li>
                    <li>• Menjamin keselamatan dan kenyamanan dengan standar asuransi dan pendampingan</li>
                    <li>• Menjadi investasi berharga untuk perkembangan masa depan pendidikan dan karier anak</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== OFFICIAL FOOTER ===== */}
      <footer id="contact" className={styles.officialFooter}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Image
              src="/nexplora-footer-logo-transparent.png"
              alt="Nexplora - Experiential learning partner"
              width={260}
              height={108}
              className={styles.footerLogoImg}
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

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <aside className={styles.floatingAction}>
        <a
          href="https://wa.me/6281113057890?text=Halo%20Nexplora,%20saya%20tertarik%20untuk%20konsultasi%20program%20edukasi"
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
