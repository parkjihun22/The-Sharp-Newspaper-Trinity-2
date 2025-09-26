// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>더샵 신문 그리니티 2차</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경상남도 김해시 신문동(신문1지구) 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 29층, 6개 동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 84㎡(A·B·C), 93㎡</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 695세대</span>
        </li>
      </ul>
    ),
  },

  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
{/* 프리미엄 섹션 상단 문단 */}
<div className={styles.premiumIntro}>
  <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
  <p className={styles.premiumSubtitle}>
    장유·율하 생활권, 신문1지구의 새로운 중심<br />
    더샵 신문 그리니티 2차
  </p>
</div>
{/* 슬라이더 */}
<PremiumSlider />
</>
),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "교통 호재 가시화<br />장유IC·서김해IC·부전~마산선(장유역 예정)",
      desc:
        "남해고속도로 지선 더블 IC로 광역 접근성 강화<br />BRT·부전~마산선 개통 시 부산·창원 1시간권",
    },
    {
      img: slide2,
      title: "더샵만의 특화설계와 쾌적한 단지",
      desc:
        "남향 위주·4Bay 판상형, 넓은 동간거리<br />개방형 발코니·유리난간·주방 창 확대 적용",
    },
    {
      img: slide3,
      title: "원스톱 생활 인프라",
      desc:
        "김해관광유통단지(아울렛·워터파크·하나로클럽) 인접<br />장유·율하 상권, 도서관·문화시설 가까움",
    },
    {
      img: slide4,
      title: "교육·학세권 프리미엄",
      desc:
        "신문1지구 초등학교(예정) 도보 통학 ‘초품아’<br />장유중·장유고·장유도서관 등 교육 인프라",
    },
    {
      img: slide5,
      title: "프리미엄 커뮤니티",
      desc:
        "피트니스·스크린골프·탁구·그린 카페 라운지<br />에듀존·작은도서관·게스트하우스·사우나",
    },
    {
      img: slide6,
      title: "중대형 평면 구성 · 합리적 금융",
      desc:
        "84·93㎡ 중심, 알파룸·팬트리·드레스룸 특화<br />계약금 500만 원 정액제·중도금 60% 무이자(공고 기준)",
    },
  ];


  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>Humanville BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
