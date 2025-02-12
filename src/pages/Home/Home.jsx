import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import NavbarImg from "../../assets/photo_2025-02-04_10-39-28.jpg"
import BannerImg from "../../assets/photo_2024-09-25_16-16-08.jpg"
import FooterImg from "../../assets/photo_2025-02-06_10-07-13.jpg"


function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-main">
              <h1 className="hero-title">
                <span className="highlight">Bilim</span> va
                <span className="highlight"> Taraqqiyot</span> Maskani
              </h1>
              <p className="hero-subtitle">
                Zamonaviy ta'lim va yorqin kelajak sari birgalikda qadam
                tashlaylik
              </p>
              <div className="hero-buttons">


        <Link to={"/contact"}>

        <button  className="primary-btn">
                  <span>Qabul jarayoni</span>
                  <i className="fas fa-arrow-right"></i>
        </button>

        </Link>
            

       <Link to={"/News"}>
          
          <button className="secondary-btn">
                  <i className="fas fa-play-circle"></i>
                  <span>Maktab hayoti</span>
          </button>
          </Link>
            
          
              </div>
            </div>

            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <div className="achievement-content">
                  <h3 className="counter">800+</h3>
                  <p>Muvaffaqiyatli o'quvchilar</p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="achievement-content">
                  <h3 className="counter">100+</h3>
                  <p>Olimpiada g'oliblari</p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <div className="achievement-content">
                  <h3 className="counter">60+</h3>
                  <p>Malakali o'qituvchilar</p>
                </div>
              </div>

              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="achievement-content">
                  <h3 className="counter">15+</h3>
                  <p>Qo'shimcha to'garaklar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="img-wrapper">

<div className="malum">
<img className="img-bir" src={NavbarImg} alt="Maktab binosi" />
<p className="par">Maktab Binosi</p>
</div>

<div className="malum">
<img className="img-bir" src={BannerImg} alt="O'qituvchilar xonasi" />
<p className="par">O'qituvchilar xonasi </p>
</div>

<div className="malum">
<img className="img-bir" src={FooterImg} alt="Sport zali" />
<p className="par">Sport zali</p>
</div>
</div>
      </div>




    </div>

  
  );
}

export default Home;
