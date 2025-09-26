import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/brand_award.jpg";

const Brand1 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
      if (window.scrollY > 200) {
        setIsImageVisible(true); // 이미지가 보이도록
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
    }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 메타 */}
        <title>더샵 신문 그리니티 2차 - 브랜드 소개</title>
        <meta
          name="description"
          content="포스코이앤씨 프리미엄 브랜드 더샵. 더샵 신문 그리니티 2차는 김해 신문1지구(장유·율하 생활권) 중심에 들어서는 중대형 위주 단지로, 고객 중심 설계·지속가능 철학·검증된 시공 품질로 새로운 주거 기준을 제시합니다."
        />
        <meta
          name="keywords"
          content="더샵 신문 그리니티 2차, 더샵, 포스코이앤씨, 김해 신문1지구, 장유, 율하, 모델하우스, 분양, 평면도"
        />
        <link rel="canonical" href="https://www.abcya4.com/Brand/intro" />

        {/* Open Graph */}
        <meta property="og:title" content="더샵 신문 그리니티 2차 - 브랜드 소개" />
        <meta
          property="og:description"
          content="더샵 신문 그리니티 2차: 포스코이앤씨 더샵의 브랜드 철학과 가치, 김해 신문1지구의 새로운 주거 기준을 확인하세요."
        />
        <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
        <meta property="og:url" content="https://www.abcya4.com/Brand/intro" />
        <meta property="og:site_name" content="더샵 신문 그리니티 2차" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="더샵 신문 그리니티 2차 - 브랜드 소개" />
        <meta
          name="twitter:description"
          content="포스코이앤씨 더샵의 혁신 설계와 프리미엄 품질. 김해 신문1지구 장유·율하 생활권의 새로운 기준, 더샵 신문 그리니티 2차."
        />
        <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
        <meta name="twitter:url" content="https://www.abcya4.com/Brand/intro" />

        {/* 구조화 데이터 (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "더샵 신문 그리니티 2차 - 브랜드 소개",
              "description": "포스코이앤씨 더샵의 브랜드 철학과 가치, 김해 신문1지구 장유·율하 생활권의 미래 주거 비전을 소개합니다.",
              "url": "https://www.abcya4.com/Brand/intro"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="더샵 신문 그리니티 2차" />

      <MenuBar contents={menuContents} />

      {/* 접근성용 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>더샵 신문 그리니티 2차 - 브랜드 소개</h1>
      <p className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차는 포스코이앤씨의 프리미엄 주거 브랜드 ‘더샵’이 선보이는 단지로,
        김해 신문1지구(장유·율하 생활권)의 중심에서 고객 중심 설계와 고급 사양,
        지속 가능한 주거 철학으로 새로운 주거 가치를 제시합니다.
      </p>

      <div className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}>
        <div>장유·율하 생활권의 새로운 기준</div>
        <div>더샵 신문 그리니티 2차, 신문1지구의 중심에서</div>
      </div>


      <img
        className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="더샵신문그리니티 브랜드 소개 이미지"
      />

      <Footer />
    </div>
  );
};

export default Brand1;
