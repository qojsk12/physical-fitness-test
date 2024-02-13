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

  useEffect(() => {
    let mouseTimer;

    const handleMouseMove = () => {
      clearTimeout(mouseTimer);

      mouseTimer = setTimeout(() => {
        setActiveSection(null);
        setListSection(null);
      }, 300000);
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
        {listSection === null && (
          <div className="physical__list-des">
            <div className="physical__list-item main">
              <div className="img__box mainImg">
                <img
                  onClick={() => handleListSectionClick('blooddes')}
                  className="main-img"
                  src={Img3}
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
        {listSection === 'blooddes' && (
          <div className="physical__list-des">
            <div className="physical__list-item main">
              <div className="img__box mainImg">
                <img
                  onClick={() => handleListSectionClick(null)}
                  className="main-img"
                  src={BloodDes}
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
        {listSection === 't__cadio' && (
          <div className="physical__list-des">
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">20m 왕복 오래달리기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">횟수</div>
                <div className="img__description span">
                  진행 시간: 최대한 오래
                </div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">트레드밀</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">심박수 + 신장 + 체중</div>
                <div className="img__description span">진행 시간: 6분</div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">스텝 박스</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">심박수 + 체중 + 신장</div>
                <div className="img__description span">
                  남자: 3분, 50.8cm, 126bpm <br />
                  여자: 3분, 45.7cm, 96bpm
                </div>
              </div>
            </div>
          </div>
        )}
        {listSection === 't__muscular' && (
          <div className="physical__list-des">
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">윗몸 말아올리기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">횟수</div>
                <div className="img__description span">최대한 많이</div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">반복 점프</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">횟수</div>
                <div className="img__description span">진행 시간: 30초</div>
              </div>
            </div>
          </div>
        )}
        {listSection === 'a__cadio' && (
          <div className="physical__list-des">
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">20m 왕복 오래달리기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">횟수</div>
                <div className="img__description span">
                  진행 시간: 최대한 오래
                </div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">트레드밀</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">심박수 + 신장 + 체중</div>
                <div className="img__description span">
                  남자: 9분 <br /> 여자: 6분
                </div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="img" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">스텝 박스</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">심박수 + 체중 + 신장</div>
                <div className="img__description span">3분, 30.5cm, 96bpm</div>
              </div>
            </div>
          </div>
        )}
        {listSection === 'a__speed' && (
          <div className="physical__list-des">
            <div className="physical__list-item">
              <div className="img__box">
                <video
                  className="gif-img"
                  controlsList="nofullscreen"
                  controls
                  muted
                >
                  <source src={Run10m} type="video/mp4" />
                </video>
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">10m 왕복 달리기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">시간</div>
                <div className="img__description span">최대한 빠르게</div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <video
                  className="gif-img"
                  controlsList="nofullscreen"
                  controls
                  muted
                >
                  <source src={SpeedTime} type="video/mp4" />
                </video>
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">반응 시간</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">시간</div>
                <div className="img__description span">최대한 빠르게</div>
              </div>
            </div>
          </div>
        )}
        {listSection === 'a__power' && (
          <div className="physical__list-des">
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">제자리 멀리뛰기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">멀리 뛴 거리</div>
                <div className="img__description span">제한 시간 없음</div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <img className="gif-img" src={Img2} alt="" />
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">체공 시간</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">공중에 떠 있는 시간</div>
                <div className="img__description span">제한 시간 없음</div>
              </div>
            </div>
          </div>
        )}
        {listSection === 'e__cadio' && (
          <div className="physical__list-des">
            <div className="physical__list-item">
              <div className="img__box">
                <video
                  className="gif-img"
                  controlsList="nofullscreen"
                  controls
                  muted
                >
                  <source src={Work2min} type="video/mp4" />
                </video>
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">2분 제자리 걷기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">횟수</div>
                <div className="img__description span">진행 시간: 2분</div>
              </div>
            </div>
            <div className="physical__list-item">
              <div className="img__box">
                <video
                  className="gif-img"
                  controlsList="nofullscreen"
                  controls
                  muted
                >
                  <source src={Work6min} type="video/mp4" />
                </video>
              </div>
              <div className="des__box">
                <div className="img__description">종목</div>
                <div className="img__description">6분 걷기</div>
                <div className="img__description">등급 산정 방식</div>
                <div className="img__description">거리</div>
                <div className="img__description span">진행 시간: 6분</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
