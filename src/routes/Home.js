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
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>20m 왕복 오래 달리기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>횟수</td>
                    </tr>
                    <tr>
                      <th rowSpan="2">시간</th>
                      <td rowSpan="2">최대한 오래</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>트레드밀</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>심박수 + 신장 + 체중</td>
                    </tr>
                    <tr>
                      <th rowSpan="2">시간</th>
                      <td rowSpan="2">6분</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>스텝겁사</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>심박수 + 신장 + 체중</td>
                    </tr>
                    <tr>
                      <th rowSpan="2">시간</th>
                      <td>남자 : 3분, 50.5cm, 126bpm</td>
                    </tr>
                    <tr>
                      <td>여자 : 3분, 45.5cm, 96bpm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {listSection === 't__muscular' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>윗몸 말아올리기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>횟수</td>
                    </tr>
                    <tr>
                      <th>시간</th>
                      <td>최대한 오래</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>반복 점프</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>횟수</td>
                    </tr>
                    <tr>
                      <th>시간</th>
                      <td>30초</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {listSection === 'a__cadio' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>20m 왕복 오래 달리기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>횟수</td>
                    </tr>
                    <tr>
                      <th rowSpan="2">시간</th>
                      <td rowSpan="2">최대한 오래</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>트레드밀</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>심박수 + 신장 + 체중</td>
                    </tr>
                    <tr>
                      <th rowSpan="2">시간</th>
                      <td>남자 : 9분</td>
                    </tr>
                    <tr>
                      <td>여자 : 6분</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="img" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>스텝겁사</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>심박수 + 신장 + 체중</td>
                    </tr>
                    <tr>
                      <th rowSpan="2">시간</th>
                      <td rowSpan="2">3분, 30cm, 96bpm</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {listSection === 'a__speed' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>10m 왕복 달리기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>시간</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>반응시간</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>시간</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {listSection === 'a__power' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>제자리 멀리 뛰기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>멀리 뛴 거리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>체공시간</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>공중에 떠 있는 시간</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {listSection === 'e__cadio' && (
            <div className="physical__list">
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>2분 제자리 걷기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>횟수</td>
                    </tr>
                    <tr>
                      <th>시간</th>
                      <td>2분</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="physical__list-item">
                <div className="img__box">
                  <img src={Img2} alt="" />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>종목</th>
                      <td>6분 걷기</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>등급 산정 방식</th>
                      <td>거리</td>
                    </tr>
                    <tr>
                      <th>시간</th>
                      <td>6분</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
