import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "가시화되는 개발호재<br />살수록 높아지는 미래가치",
    contentText:
      "신문1지구 중심 입지<br />부전~마산선(장유역 예정)·BRT·도시기반 확충 기대",
  },
  {
    img: section2Image2,
    titleText: "더샵만의 특화설계와 쾌적한 단지",
    contentText:
      "남향 위주·4Bay 판상형 설계<br />팬트리·드레스룸 등 수납 특화, 넓은 동간거리",
  },
  {
    img: section2Image3,
    titleText: "도심·광역을 더 빠르게<br />특급 교통 프리미엄",
    contentText:
      "장유IC·서김해IC로 광역 이동 수월<br />부전~마산선(장유역 예정) 연계 교통 개선",
  },
  {
    img: section2Image4,
    titleText: "원스톱 생활권<br />쇼핑·문화·의료가 가까이",
    contentText:
      "김해관광유통단지(아울렛·워터파크·하나로클럽) 인접<br />장유·율하 상권·도서관 등 생활 인프라 밀집",
  },
  {
    img: section2Image5,
    titleText: "품격 있는 주거공간 프리미엄",
    contentText:
      "84·93㎡ 중심의 합리적 평면 구성<br />개방감 있는 거실·발코니, 채광·통풍 극대화",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />일상 속 힐링 라이프",
    contentText:
      "율하천 수변·근린공원과 가깝고<br />단지 내 공원형 조경으로 쾌적한 산책 동선",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

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
        <title>더샵 신문 그리니티 2차 - 입지안내</title>
        <meta
          name="description"
          content="김해 신문1지구(장유·율하 생활권)의 핵심 입지. 장유IC·서김해IC와 인접한 광역 교통망, 예정 장유역(부전~마산선) 및 BRT 연계, 김해관광유통단지·율하·장유 상권 등 풍부한 생활 인프라, 율하천 수변·공원과 맞닿은 쾌적한 녹지 환경을 갖춘 더샵 신문 그리니티 2차의 입지 경쟁력을 확인하세요."
        />
        <meta
          name="keywords"
          content="더샵 신문 그리니티 2차, 김해 신문1지구, 장유, 율하, 입지안내, 교통, 생활 인프라, 포스코이앤씨, 더샵"
        />
        <link rel="canonical" href="https://tradexmeds.com/LocationEnvironment/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="더샵 신문 그리니티 2차 - 입지안내" />
        <meta
          property="og:description"
          content="장유·율하 생활권의 원스톱 인프라와 광역 교통 프리미엄. 더샵 신문 그리니티 2차의 입지 경쟁력을 한눈에."
        />
        <meta property="og:image" content="https://tradexmeds.com/Main1.png" />
        <meta property="og:url" content="https://tradexmeds.com/LocationEnvironment/intro" />
        <meta property="og:site_name" content="더샵 신문 그리니티 2차" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="더샵 신문 그리니티 2차 - 입지안내" />
        <meta
          name="twitter:description"
          content="장유IC·서김해IC, 예정 장유역(부전~마산선)·BRT 연계, 김해관광유통단지·율하 상권·수변공원까지. 신문1지구 핵심 입지의 가치를 확인하세요."
        />
        <meta name="twitter:image" content="https://tradexmeds.com/Main1.png" />
        <meta name="twitter:url" content="https://tradexmeds.com/LocationEnvironment/intro" />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "더샵 신문 그리니티 2차 - 입지안내",
              "description": "김해 신문1지구(장유·율하 생활권) 핵심 입지와 교통·생활 인프라·녹지 환경을 소개합니다.",
              "url": "https://tradexmeds.com/LocationEnvironment/intro"
            }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차의 입지 정보를 안내합니다. 장유·율하 생활권의 상업·교육·의료
        인프라와 장유IC·서김해IC, 예정 장유역(부전~마산선)·BRT 연계 등 편리한 교통,
        율하천 수변과 공원 등 쾌적한 녹지 환경을 종합적으로 확인할 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>장유·율하 생활권 원스톱 라이프</div>
        <div>더샵 신문 그리니티 2차, 신문1지구의 중심에서</div>
        <div>도심·광역 접근성 프리미엄</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="더샵신문그리니티 입지안내 이미지"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      {/* <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※평택 브레인시티 개발계획 관련내용은 '경기도 고시 제2022-283호' 및
          '평택도시공사 브레인시티 토지 이용 계획'을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※아주대학교 평택병원 및 카이스트 평택캠퍼스 관련 내용은 '평택시청'
          2024년 주요업무계획을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※평택동부고속화도로 관련 내용은 '평택시 고지 제 2023-407호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※KTX 수원발 관련 내용은 '국토교통부 고시 제'2023-598호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※GTX A·C 관련 내용은 '국토굥통부 2024년 1월 25일 보도자료 별첨
          교통분야 3대 혁신 전략'을 참고하였습니다
        </div>
        <div className={styles.notice}>
          ※신설도로 관련내용은 '경기도 평택시 고시 제2023-316호'를
          참고하였습니다
        </div>
        <div className={styles.notice}>
          ※본 홍보물의 위치도는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※치도 등 상기 개발 및 료통 배정 등의 계획에 대한 사항은 추후 관계
          기관의 사정에 따라 변경 및 취소될 수 있으며 이는 당사와 무관함을
          알려드립니다
        </div>
        <div className={styles.notice}>
          ※상기 이미지와 내용의 각종 시설(학교,도로망 등)은 지구단위계획의 변경,
          허가관청 및 국가시책에 따라 변경될 수 있습니다.
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
