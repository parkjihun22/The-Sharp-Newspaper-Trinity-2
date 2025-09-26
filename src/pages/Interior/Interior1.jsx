import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Interior.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

// 이미지 파일을 추가해야 합니다
import page1 from "../../assets/Interior/Interior1/page1.jpg";

const Interior1 = () => {
  const menuContents = [
    { title: "46㎡", url: "/Interior/A" },
    { title: "A㎡", url: "/Interior/84A" },
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
            <title>더샵 신문 그리니티 2차 - 인테리어</title>
            <meta
              name="description"
              content="더샵 신문 그리니티 2차 인테리어: 전용 84·93㎡ 중심의 세련된 공간 구성, 프리미엄 마감재와 수납 특화, 주방/욕실/침실 옵션을 확인하세요."
            />
            <meta
              name="keywords"
              content="더샵 신문 그리니티 2차, 인테리어, 84㎡, 93㎡, 김해 신문1지구, 장유, 율하, 포스코이앤씨, 더샵"
            />
            <link rel="canonical" href="https://www.abcya4.com/Interior/A" />

            {/* Open Graph - 소셜 미디어 공유 최적화 */}
            <meta property="og:title" content="더샵 신문 그리니티 2차 - 인테리어" />
            <meta
              property="og:description"
              content="프리미엄 마감과 수납 특화로 완성한 84·93㎡ 인테리어. 주방/거실/침실 공간별 디자인과 옵션을 한눈에."
            />
            <meta property="og:image" content="https://www.abcya4.com/Main1.png" />
            <meta property="og:url" content="https://www.abcya4.com/Interior/A" />
            <meta property="og:site_name" content="더샵 신문 그리니티 2차" />

            {/* Twitter 카드 설정 */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="더샵 신문 그리니티 2차 - 인테리어" />
            <meta
              name="twitter:description"
              content="세련된 컬러 패키지, 고급 자재, 효율적 수납 설계로 일상을 바꾸는 인테리어를 만나보세요."
            />
            <meta name="twitter:image" content="https://www.abcya4.com/Main1.png" />
            <meta name="twitter:url" content="https://www.abcya4.com/Interior/A" />

            {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "더샵 신문 그리니티 2차 - 인테리어",
                  "description": "전용 84·93㎡ 중심, 프리미엄 마감과 수납 특화 설계를 갖춘 더샵 신문 그리니티 2차 인테리어 소개.",
                  "url": "https://www.abcya4.com/Interior/A"
                }
              `}
            </script>	
          </Helmet>

          <Header isChanged={isScroll} />
          <FixIcon />

          <Bener title="인테리어" />

          <MenuBar contents={menuContents} />

          {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
          <h1 className={styles.screenReaderOnly}>
            더샵 신문 그리니티 2차 - 인테리어
          </h1>
          <p className={styles.screenReaderOnly}>
            더샵 신문 그리니티 2차 인테리어 페이지입니다. 전용 84·93㎡ 중심의 공간 구성과
            프리미엄 마감재, 팬트리·드레스룸 등 수납 특화 설계를 소개합니다. 컬러 패키지와
            옵션 정보를 확인해 나에게 맞는 인테리어를 선택하세요.
          </p>

          <div className={styles.textBox}>
            <div>디테일이 완성하는 일상</div>
            <div>더샵 신문 그리니티 2차, 프리미엄 인테리어</div>
          </div>



      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="더샵신문그리니티 타입 인테리어 이미지"
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

export default Interior1;
