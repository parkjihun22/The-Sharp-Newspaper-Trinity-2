import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/SalesInfo/SalesInfoAnnouncement/page1.jpg";
import pdfIcon from "../../assets/icons/pdf-icon.png"; // PDF 아이콘 이미지 임포트

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "공급안내", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },

  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const { pathname } = useLocation();

  // 페이지 로드 시 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 이벤트로 헤더 상태 변경
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

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  // PDF 새 창으로 열기 함수
  const openPDF = () => {
    setIsLoading(true); // PDF 로딩 시작
    const pdfUrl = "/announcement.pdf"; // 실제 PDF 파일 경로로 수정
    const newWindow = window.open(pdfUrl, "_blank");

    // PDF 로딩 후 로딩 상태 해제
    newWindow.onload = () => {
      setIsLoading(false);
    };
  };

  return (
    <div className={styles.container}>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="모집공고안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
          더샵 신문 그리니티 2차 - 모집공고안내
        </h1>
        <p className={styles.screenReaderOnly}>
          더샵 신문 그리니티 2차의 입주자 모집공고 주요 정보를 안내합니다.
          공급 세대수·면적·분양가, 청약 자격 요건, 접수 일정, 당첨자 발표 및 계약 절차,
          제출 서류와 유의사항을 한눈에 확인해 예비 청약자분들이 혼동 없이 준비할 수 있도록 돕습니다.
        </p>

        <div className={styles.textBox}>
          <div>입주자 모집공고를 확인하세요</div>
          <div>더샵 신문 그리니티 2차</div>
        </div>


      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="더샵신문그리니티모집공고안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      {/* 입주자 모집공고 PDF로 보기 버튼 */}
      <button onClick={openPDF} className={styles.pdfButton}>
        <img src={pdfIcon} alt="PDF 아이콘" className={styles.pdfIcon} />{" "}
        {/* 이미지 추가 */}
        <span>
          모집공고 PDF
          <br />
          확인하기
        </span>
      </button>

      {/* 로딩 중일 때 표시할 스피너 */}
      {isLoading && (
        <div className={styles.loader}>
          <p>파일을 로딩 중입니다...</p>
          {/* 여기에 스피너 아이콘 추가 가능 */}
          <div className={styles.spinner}></div>
        </div>
      )}

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 내용은 편집과정상 오류가 있을 수 있으니 반드시 입주자모집공고를
          확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
