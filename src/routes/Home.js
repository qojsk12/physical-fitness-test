import React, {useState} from 'react';
import './Home.css';
import Img from '../image/01.png';
import Img2 from '../image/02.png';

function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const [listSection, setListSection] = useState(null);
  const handleListSectionClick = (list) => {
    setListSection(listSection === list ? null : list);
  };

  return (
    <div className="container">
      <header className="header_main_name">
        <img className="header__img" src={Img} alt="" />
        <span className="header__span">체력측정 선택 종목 안내</span>
      </header>
      <div className="sidebar mobile">
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
                    className={`${listSection === 't__cadio' ? 'clicked' : ''}`}
                    onClick={() => handleListSectionClick('t__cadio')}
                  >
                    심폐지구력
                  </li>
                  <li
                    className={`${
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
                    className={`${listSection === 'a__cadio' ? 'clicked' : ''}`}
                    onClick={() => handleListSectionClick('a__cadio')}
                  >
                    심폐지구력
                  </li>
                  <li
                    className={`${listSection === 'a__speed' ? 'clicked' : ''}`}
                    onClick={() => handleListSectionClick('a__speed')}
                  >
                    민첩성
                  </li>
                  <li
                    className={`${listSection === 'a__power' ? 'clicked' : ''}`}
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
                    className={`${listSection === 'e__cadio' ? 'clicked' : ''}`}
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
          {listSection === 't__cadio' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <img src={Img2} alt="" />

                <div className="des__box">
                  <div>종목</div>
                  <div>20m 왕복 오래달리기</div>
                  <div>등급 산정 방식</div>
                  <div>횟수</div>
                  <div>시간</div>
                  <div>최대한 오래</div>
                </div>
              </div>
              <div className="physical__list-item">
                <img src={Img2} alt="" />

                <div className="des__box">
                  <div>종목</div>
                  <div>트레드밀</div>
                  <div>등급 산정 방식</div>
                  <div>심박수 + 신장 + 체중</div>
                  <div>시간</div>
                  <div>6분</div>
                </div>
              </div>
              <div className="physical__list-item">
                <img src={Img2} alt="" />

                <div className="des__box">
                  <div>종목</div>
                  <div>스텝 박스</div>
                  <div>등급 산정 방식</div>
                  <div>심박수 + 체중 + 신장</div>
                  <div>시간</div>
                  <div>
                    남자: 3분, 50.5cm, 126bpm <br />
                    여자: 3분, 45.5cm, 96bpm
                  </div>
                </div>
              </div>
            </div>
          )}
          {listSection === 't__muscular' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>윗몸 말아올리기</div>
                  <div>등급 산정 방식</div>
                  <div>횟수</div>
                  <div>시간</div>
                  <div>최대한 많이</div>
                </div>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>반복 점프</div>
                  <div>등급 산정 방식</div>
                  <div>횟수</div>
                  <div>시간</div>
                  <div>30초</div>
                </div>
              </div>
            </div>
          )}
          {listSection === 'a__cadio' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>20m 왕복 오래달리기</div>
                  <div>등급 산정 방식</div>
                  <div>횟수</div>
                  <div>시간</div>
                  <div>최대한 오래</div>
                </div>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>트레드밀</div>
                  <div>등급 산정 방식</div>
                  <div>심박수 + 신장 + 체중</div>
                  <div>시간</div>
                  <div>
                    남자: 9분 <br /> 여자: 6분
                  </div>
                </div>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="img" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>스텝 박스</div>
                  <div>등급 산정 방식</div>
                  <div>심박수 + 체중 + 신장</div>
                  <div>시간</div>
                  <div>3분, 30.5cm, 96bpm</div>
                </div>
              </div>
            </div>
          )}
          {listSection === 'a__speed' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>10m 왕복 달리기</div>
                  <div>등급 산정 방식</div>
                  <div>시간</div>
                  <div>시간</div>
                  <div>최대한 빠르게</div>
                </div>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>반응 시간</div>
                  <div>등급 산정 방식</div>
                  <div>시간</div>
                  <div>시간</div>
                  <div>최대한 빠르게</div>
                </div>
              </div>
            </div>
          )}
          {listSection === 'a__power' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>제자리 멀리뛰기</div>
                  <div>등급 산정 방식</div>
                  <div>멀리 뛴 거리</div>
                  <div>시간</div>
                  <div>제한 시간 없음</div>
                </div>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>체공 시간</div>
                  <div>등급 산정 방식</div>
                  <div>공중에 떠 있는 시간</div>
                  <div>시간</div>
                  <div>제한 시간 없음</div>
                </div>
              </div>
            </div>
          )}
          {listSection === 'e__cadio' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>2분 제자리 걷기</div>
                  <div>등급 산정 방식</div>
                  <div>횟수</div>
                  <div>시간</div>
                  <div>2분</div>
                </div>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <div className="des__box">
                  <div>종목</div>
                  <div>6분 걷기</div>
                  <div>등급 산정 방식</div>
                  <div>거리</div>
                  <div>시간</div>
                  <div>6분</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
