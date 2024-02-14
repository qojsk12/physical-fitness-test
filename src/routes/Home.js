import React, {useEffect, useState} from 'react';
import './Home.css';
import Img from '../image/01.png';
import Img2 from '../image/02.gif';
import Img3 from '../image/혈압.png';
import Work2min from '../video/2분제자리걷기.mp4';
import Work6min from '../video/6분걷기.mp4';
import Run10m from '../video/10m왕복달리기.mp4';
import SpeedTime from '../video/반응시간.mp4';
import BloodDes from '../image/혈압소견서.png';

function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const [listSection, setListSection] = useState(null);
  const handleListSectionClick = (list) => {
    setListSection(listSection === list ? null : list);
  };

  const [listImg, setListImg] = useState(null);
  const handleListImgClick = (item) => {
    setListImg(listImg === item ? null : item);
  };

  const renderMainImg = () => {
    return (
      <div className="physical__list-des">
        <div className="physical__list-item main">
          <div
            className="img__box mainImg"
            onClick={() => handleListImgClick('blooddes')}
          >
            {listImg === 'blooddes' ? (
              <img className="main-img" src={BloodDes} alt="" />
            ) : (
              <img className="main-img" src={Img3} alt="" />
            )}
          </div>
        </div>
      </div>
    );
  };

  const t__CardioItems = [
    {
      videoSrc: Img2,
      title: '20m 왕복 오래달리기',
      gradingMethod: '등급 산정 방식',
      description: '횟수',
      duration: '진행 시간: 최대한 오래',
    },
    {
      videoSrc: Img2,
      title: '트레드밀',
      gradingMethod: '등급 산정 방식',
      description: '심박수 + 신장 + 체중',
      duration: '진행 시간: 6분',
    },
    {
      imgSrc: Img2,
      title: '스텝 박스',
      gradingMethod: '등급 산정 방식',
      description: '심박수 + 체중 + 신장',
      duration: '남자: 3분, 50.8cm, 126bpm, 여자: 3분, 45.7cm, 96bpm',
      onClick: () => handleListImgClick('women'),
    },
  ];

  const t__MuscularItems = [
    {
      videoSrc: Img2,
      title: '윗몸 말아올리기',
      gradingMethod: '등급 산정 방식',
      description: '횟수',
      duration: '최대한 많이',
    },
    {
      videoSrc: Img2,
      title: '반복점프',
      gradingMethod: '등급 산정 방식',
      description: '횟수',
      duration: '진행 시간: 30초',
    },
  ];

  const a__CardioItems = [
    {
      videoSrc: Img2,
      title: '20m 왕복 오래달리기',
      gradingMethod: '등급 산정 방식',
      description: '횟수',
      duration: '진행 시간: 최대한 오래',
    },
    {
      videoSrc: Img2,
      title: '트레드밀',
      gradingMethod: '등급 산정 방식',
      description: '심박수 + 신장 + 체중',
      duration: {
        male: '남자: 9분',
        female: '여자: 6분',
      },
    },
    {
      imgSrc: Img2,
      title: '스텝 박스',
      gradingMethod: '등급 산정 방식',
      description: '심박수 + 체중 + 신장',
      duration: '3분, 30.5cm, 96bpm',
    },
  ];

  const a__SpeedItems = [
    {
      videoSrc: Run10m,
      title: '10m 왕복 달리기',
      gradingMethod: '등급 산정 방식',
      description: '시간',
      duration: '최대한 빠르게',
    },
    {
      videoSrc: SpeedTime,
      title: '반응 시간',
      gradingMethod: '등급 산정 방식',
      description: '시간',
      duration: '최대한 빠르게',
    },
  ];

  const a__PowerItems = [
    {
      videoSrc: Img2,
      title: '제자리 멀리뛰기',
      gradingMethod: '등급 산정 방식',
      description: '멀리 뛴 거리',
      duration: '2번 진행',
    },
    {
      videoSrc: Img2,
      title: '체공 시간',
      gradingMethod: '등급 산정 방식',
      description: '공중에 떠 있는 시간',
      duration: '제한 시간 없음',
    },
  ];

  const e__CadioItems = [
    {
      videoSrc: Work2min,
      title: '2분 제자리 걷기',
      gradingMethod: '등급 산정 방식',
      description: '공중에 떠 있는 시간',
      duration: '진행 시간: 2분',
    },
    {
      videoSrc: Work6min,
      title: '6분 걷기',
      gradingMethod: '등급 산정 방식',
      description: '거리',
      duration: '진행 시간: 6분',
    },
  ];

  const renderList = (items) => {
    return (
      <div className="physical__list-des">
        {items.map((item, index) => (
          <div key={index} className="physical__list-item">
            <div className="img__box" onClick={item.onClick}>
              <video
                className="gif-img"
                controlsList="nofullscreen"
                controls
                muted
              >
                <source
                  src={listImg === 'women' ? BloodDes : item.videoSrc}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="des__box">
              <div className="img__description">종목</div>
              <div className="img__description">{item.title}</div>
              <div className="img__description">{item.gradingMethod}</div>
              <div className="img__description">{item.description}</div>
              <div className="img__description span">
                {typeof item.duration === 'object' ? (
                  <div>
                    <div>{item.duration.male}</div>
                    <div>{item.duration.female}</div>
                  </div>
                ) : (
                  item.duration
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    let mouseTimer;

    const handleMouseMove = () => {
      clearTimeout(mouseTimer);

      mouseTimer = setTimeout(() => {
        setActiveSection(null);
        setListSection(null);
        setListImg(null);
      }, 120000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, []);

  return (
    <div className="container mobile">
      <header className="header_main_name">
        <img className="header__img" src={Img} alt="" />
        <span className="header__span">체력측정 선택 종목 안내</span>
      </header>

      <div className="select__menu mobile">
        <h2 className="h2__title">생애주기</h2>
        <div className="ages">
          <ul className="teenager">
            <span
              className="custom-div div-8"
              onClick={() => handleSectionClick('teenager')}
            >
              청소년기
            </span>
            {activeSection === 'teenager' && (
              <div className="physical__list">
                <li
                  className={`common ${
                    listSection === 't__cadio' ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick('t__cadio')}
                >
                  심폐지구력
                </li>
                <li
                  className={`common ${
                    listSection === 't__muscular' ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick('t__muscular')}
                >
                  근지구력
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="ages">
          <ul className="adult">
            <span
              className="custom-div div-8"
              onClick={() => handleSectionClick('adult')}
            >
              성인기
            </span>
            {activeSection === 'adult' && (
              <div className="physical__list">
                <li
                  className={`common ${
                    listSection === 'a__cadio' ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick('a__cadio')}
                >
                  심폐지구력
                </li>
                <li
                  className={`common  ${
                    listSection === 'a__speed' ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick('a__speed')}
                >
                  민첩성
                </li>
                <li
                  className={`common ${
                    listSection === 'a__power' ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick('a__power')}
                >
                  순발력
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="ages">
          <ul className="elder">
            <span
              className="custom-div div-8"
              onClick={() => handleSectionClick('elder')}
            >
              어르신기
            </span>
            {activeSection === 'elder' && (
              <div className="physical__list">
                <li
                  className={`common ${
                    listSection === 'e__cadio' ? 'clicked' : ''
                  }`}
                  onClick={() => handleListSectionClick('e__cadio')}
                >
                  심폐지구력
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>

      <div className="gif__description">
        {listSection === null && renderMainImg()}
        {listSection === 't__cadio' && renderList(t__CardioItems)}
        {listSection === 't__muscular' && renderList(t__MuscularItems)}
        {listSection === 'a__cadio' && renderList(a__CardioItems)}
        {listSection === 'a__speed' && renderList(a__SpeedItems)}
        {listSection === 'a__power' && renderList(a__PowerItems)}
        {listSection === 'e__cadio' && renderList(e__CadioItems)}
      </div>
    </div>
  );
}

export default Home;
