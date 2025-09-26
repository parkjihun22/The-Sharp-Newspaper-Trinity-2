import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="더샵신문그리니티 배너 이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '더샵신문그리니티' || text === '홍보영상' || text === '체크포인트'| text === '당첨자서류안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            장유·율하 생활권 신흥 주거타운, 신문1지구의 새로운 중심.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            김해관광유통단지·롯데워터파크·아울렛이 가까운 원스톱 라이프.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            포스코이앤씨 ‘더샵 신문 그리니티 2차’의 브랜드 프리미엄.
          </div>
        </>
      );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            경남 김해시 장유 신문1지구, 지하2층~지상29층 6개동 695세대.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            전용 84·93㎡ 중심, 남향 위주·4Bay 판상형으로 채광·통풍 극대화.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            알파룸·팬트리·현관창고·드레스룸 등 수납 특화 설계.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            포스코이앤씨 더샵이 완성하는 김해 신문 브랜드 타운.
          </div>
        </>
      );
    } else if (text === '입지환경') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            장유·서김해IC, 남해고속도로 지선, 부전~마산선(장유역 예정)로 광역 접근성 우수.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            하나로클럽·롯데아울렛·워터파크·도서관 등 생활·문화 인프라 밀집.
          </div>
        </>
      );
    } else if (text === '단지안내') {
      return (
        <>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            남향 위주 배치와 넓은 동간거리, 공원형 조경으로 쾌적한 일상.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            84·93㎡ 중대형 위주 구성, 드레스룸·팬트리 등 수납 특화.
          </div>
          <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
            에듀존·작은도서관·피트니스·스크린골프 등 프리미엄 커뮤니티.
          </div>
        </>
      );
    }
  };
  
