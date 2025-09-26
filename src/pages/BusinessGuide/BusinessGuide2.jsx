import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },

  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // 이미지가 화면에 보이는지 체크 (예시)
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려가면 이미지 보이기
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
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

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차 - 분양일정
      </h1>
      <p className={styles.screenReaderOnly}>
        더샵 신문 그리니티 2차의 분양일정을 안내합니다. 모델하우스 개관부터
        특별공급·1·2순위 청약, 당첨자 발표, 정당계약, 입주 예정까지 핵심 일정을
        한눈에 확인하시고, 청약 준비에 필요한 유의사항과 제출서류도 함께 점검해
        보세요.
      </p>

      <div className={styles.textBox}>
        <div>신문1지구의 새로운 시작</div>
        <div>더샵 신문 그리니티 2차, 분양일정을 확인하세요.</div>
      </div>


      {/* 이미지에 isImageVisible 상태 적용 */}
      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="더샵신문그리니티분양일정안내-image1"
      />

      <Footer />
    </div>
  );
};

export default BusinessGuide2;
