import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/FloorPlan/FloorPlan1/page1.jpg";

const FloorPlan1 = () => {
  const menuContents = [
    { title: "84A㎡", url: "/FloorPlan/59A" },
		{ title: "84B㎡", url: "/FloorPlan/59B" },
		{ title: "84㎡C", url: "/FloorPlan/84A" },
		{ title: "93㎡", url: "/FloorPlan/84B" },
    { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
	
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>더샵 신문 그리니티 2차 - 평면안내</title>
        <meta
          name="description"
          content="더샵 신문 그리니티 2차 평면안내: 전용 84·93㎡ 중심의 공간 구성과 수납 특화, 남향 위주·4Bay 설계를 확인하세요. 생활 동선과 취향에 맞는 타입을 비교해 보실 수 있습니다."
        />
        <meta
          name="keywords"
          content="더샵 신문 그리니티 2차, 평면도, 84㎡, 93㎡, 김해 신문1지구, 장유, 율하, 더샵, 포스코이앤씨"
        />
        <link rel="canonical" href="https://tradexmeds.com/FloorPlan/59A" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="더샵 신문 그리니티 2차 - 평면안내" />
        <meta
          property="og:description"
          content="전용 84·93㎡ 중심의 평면 구성과 남향 위주·4Bay 설계를 한눈에. 라이프스타일에 맞는 타입을 비교해 보세요."
        />
        <meta property="og:image" content="https://tradexmeds.com/Main1.png" />
        <meta property="og:url" content="https://tradexmeds.com/FloorPlan/59A" />
        <meta property="og:site_name" content="더샵 신문 그리니티 2차" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="더샵 신문 그리니티 2차 - 평면안내" />
        <meta
          name="twitter:description"
          content="84·93㎡ 중심의 평면안내. 수납 특화와 효율적인 동선, 채광·통풍을 고려한 설계를 확인하세요."
        />
        <meta name="twitter:image" content="https://tradexmeds.com/Main1.png" />
        <meta name="twitter:url" content="https://tradexmeds.com/FloorPlan/59A" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "더샵 신문 그리니티 2차 - 평면안내",
              "description": "더샵 신문 그리니티 2차의 전용 84·93㎡ 평면 구성과 수납 특화, 남향 위주·4Bay 설계를 소개합니다.",
              "url": "https://tradexmeds.com/FloorPlan/59A"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="세대안내" />

      <MenuBar contents={menuContents} />

      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차 - 평면안내
      </h1>
      <p className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차 평면안내 페이지입니다. 전용 84·93㎡ 중심으로 공간 구성과 수납 특화,
        채광·통풍을 고려한 남향 위주·4Bay 설계를 비교해 보시고, 라이프스타일에 맞는 타입을 선택하세요.
      </p>

      <div className={styles.textBox}>
        <div>중대형 평면으로 일상을 넓히다</div>
        <div>더샵 신문 그리니티 2차, 나에게 맞는 타입을 선택하세요</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="더샵신문그리니티 평면안내 이미지1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로
          타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시
          차이가 있을 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan1;
