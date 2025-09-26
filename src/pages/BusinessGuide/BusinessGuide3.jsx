import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    // { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "계약서류안내", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 표시 여부를 변경하는 로직 추가 (예시)
  useEffect(() => {
    const handleImageVisibility = () => {
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려갔을 때
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener("scroll", handleImageVisibility);

    return () => {
      window.removeEventListener("scroll", handleImageVisibility);
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
        더샵 신문 그리니티 2차 - 계약서류안내
      </h1>
      <p className={styles.screenReaderOnly}>
        분양 당첨 후 계약에 필요한 서류와 준비 절차를 안내합니다. 신분증, 주민등록등본,
        인감증명서 등 필수 제출서류와 대리인 계약 시 위임장·가족관계증명서 등 추가 서류,
        제출 기한 및 유의사항을 확인해 혼동 없이 준비하세요.
      </p>

      <div className={styles.textBox}>
        <div>계약을 위한 첫 걸음</div>
        <div>더샵 신문 그리니티 2차, 준비된 서류로 안심 계약하세요.</div>
      </div>


      {/* 이미지에 isImageVisible 상태 적용 */}
      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="더샵신문그리니티계약서류안내-image1"
      />

      <Footer />
    </div>
  );
};

export default BusinessGuide2;
