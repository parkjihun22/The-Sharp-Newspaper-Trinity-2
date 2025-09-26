import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

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

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
          더샵 신문 그리니티 2차 - 프리미엄
        </h1>
        <p className={styles.screenReaderOnly}>
          더샵 신문 그리니티 2차의 프리미엄을 소개합니다. 장유·율하 생활권 핵심 입지와
          남향 위주 4Bay 설계, 공원형 조경, 에듀·스포츠 특화 커뮤니티(피트니스·스크린골프·
          스터디룸·작은도서관·게스트하우스 등), 스마트 홈/에너지 절감 설비로 차별화된
          일상을 제공합니다.
        </p>

        <div className={styles.textBox}>
          <div>프리미엄의 기준을 바꾸다</div>
          <div>더샵 신문 그리니티 2차, 일상의 품격을 높이다</div>
        </div>


      <img
        src={page1}
        className={styles.image3}
        alt="더샵신문그리니티 프리미엄설명 이미지"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
