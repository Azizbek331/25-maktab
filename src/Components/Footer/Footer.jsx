import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">


          <div className="footer-column">
            <h3>Bog'lanish</h3>
            <div className="footer-contact">
              <p className='p-wrap'>Telefon: +998 50 900 68 10</p>
              <p className='p-wrap'>Email: azizbekakramjonov78@gmail.com</p>
              <p className='p-wrap'>Manzil: Namangan viloyati,Namangan tumani,Mirishkor MFY</p>
            </div>
          </div>

          <div className="footer-column">
            <h3>Maktab haqida</h3>
            <div className="footer-contact">
<div className="p-container">
<p className='p-wrap'>25- Maktab: Ta'limda Ijodiy Yondashuv</p>
<p className='p-wrapp'>(25th School: Creative Approach in Education)</p>
</div>
          </div>
          
        </div>
        <div className="footer-column">
            <h3 className="footer-title">Bizning Xizmatlarimiz</h3> 
           <div className="p-container">
           <ul className='footer-links'>
              <li><a href="#">Ta'lim Dasturlari o'rgatish</a></li> 
              <li><a href="#">Qo'shimcha Ta'lim</a></li>  
              <li><a href="#">Kurslar</a></li> 
              <li><a href="#">Konsultatsiyalar</a></li>  
            </ul>
            
           </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kompaniya. Har bir qadam - yangi yutuq sari</p>
        <p className='Azizbek'>Dasturch:Akramjonov Azizbek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
