import React from 'react';
import './Bizhaqimizda.css';

const Bizhaqimizda = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">Biz haqimizda</h1>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h2>25-maktab tarixi</h2>
          <p>
            1960-yildan buyon ta'lim sohasida faoliyat yuritib kelayotgan maktabimiz, 
            minglab o'quvchilarning porloq kelajagiga yo'l ochib kelmoqda. Bizning asosiy 
            maqsadimiz - zamonaviy bilim va ko'nikmalarni yuqori sifatda o'quvchilarga yetkazib berishdir.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>O'quvchilar</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>O'qituvchilar</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Fan yo'nalishlari</p>
          </div>
          <div className="stat-card">
            <h3>60+</h3>
            <p>Yillik tajriba</p>
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission">
            <h2>Bizning maqsadimiz</h2>
            <p>
              Zamonaviy ta'lim metodlari orqali o'quvchilarni jahon standartlariga mos 
              bilim va ko'nikmalar bilan qurollantirish, ularning kelajakdagi 
              muvaffaqiyatlariga mustahkam poydevor yaratish.
            </p>
          </div>
          <div className="vision">
            <h2>Bizning qadriyatlarimiz</h2>
            <ul>
              <li>Sifatli ta'lim</li>
              <li>Individual yondashuv</li>
              <li>Zamonaviy metodika</li>
              <li>Amaliy bilimlar</li>
              <li>Doimiy rivojlanish</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bizhaqimizda;

